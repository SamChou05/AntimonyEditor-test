import * as monaco from 'monaco-editor';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { AntimonyGrammarLexer } from './antlr/AntimonyGrammarLexer';
import { AnnotationContext, AntimonyGrammarParser, AssignmentContext, DeclarationContext, EventContext, Is_assignmentContext, NamemaybeinContext, ReactionContext, SpeciesContext, Unit_declarationContext } from './antlr/AntimonyGrammarParser';
import { AntimonyGrammarListener } from './antlr/AntimonyGrammarListener'
import { ModelContext } from './antlr/AntimonyGrammarParser'
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { hover } from '@testing-library/user-event/dist/hover';

class VariableInfo {
  label?: string;
  modifiers?: string;
  initialize?: string;
  display?: string;
  compartments?: string;
  annotations?: string[] = [];
}

const ModelParser = (editor: monaco.editor.IStandaloneCodeEditor, hoverExists: boolean) => {
  // Create the lexer and parser
  let inputStream = new ANTLRInputStream(editor.getValue());
  let lexer = new AntimonyGrammarLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new AntimonyGrammarParser(tokenStream);

  // Parse the input, where `compilationUnit` is whatever entry point you defined
  let tree = parser.root();

  var variables: Map<string, VariableInfo> = new Map<string, VariableInfo>();

  var annotatedVar: string[] = [];

  class AntimonySyntax implements AntimonyGrammarListener {
    enterModel(ctx: ModelContext) {
      const modelName = ctx.NAME().text; // Get the model name
      const modelInfo = new VariableInfo();

      let variable = variables.get(modelName);
      if (!variable) {
        modelInfo.label = 'Model';
        variables.set(modelName, modelInfo);
      } else {
        variable.label = 'Model';
      }
    };

    enterSpecies(ctx: SpeciesContext) {
      const speciesInfo = new VariableInfo();
      speciesInfo.label = 'Species';

      let variable = variables.get(ctx.text);

      if (!variable) {
        variables.set(ctx.text, speciesInfo);
      } else {
        variable.label = 'Species';
      }
    };

    enterReaction (ctx: ReactionContext) {
        const reactionName = ctx.reaction_name()?.namemaybein().text; // Get reaction name
        const reactionInfo = new VariableInfo();

      if (reactionName) {
        let variable = variables.get(reactionName);

        if (!variable) {
          reactionInfo.label = 'Reaction'
          variables.set(reactionName, reactionInfo)
        } else {
          variable.label = 'Reaction';
        }
      }
    };

    enterDeclaration (ctx: DeclarationContext) {
      const varType = ctx.decl_modifiers().text; // Get modifier
      if (varType == 'compartment') {
        ctx.decl_item().forEach((item) => {
          const varName = item.namemaybein().var_name().text; // Get variable name
          let variable = variables.get(varName);
          if (variable) {
            variable.label = 'Compartment';
          } else {
            let variableInfo = new VariableInfo();
            variableInfo.label = 'Compartment';
            variables.set(varName, variableInfo);
          }
        });
      }

      ctx.decl_item().forEach((item) => {
        const varName = item.namemaybein().var_name().text; // Get variable name
        let variable = variables.get(varName);
        if (variable) {
          variable.modifiers = varType;
        } else {
          let variableInfo = new VariableInfo();
          variableInfo.modifiers = varType;
          variables.set(varName, variableInfo);
        }
      });
    };

    enterAssignment (ctx: AssignmentContext) {
      const varName = ctx.namemaybein().var_name().text; // Get variable name
      const varAssignment = ctx.sum().text; // Get assignment
      let variable = variables.get(varName);
      if (variable && varAssignment) {
        variable.initialize = varAssignment;
      } else if (!variable && varAssignment) {
        let variableInfo = new VariableInfo();
        variableInfo.initialize = varAssignment;
        variables.set(varName, variableInfo);
      }
    };

    enterEvent (ctx: EventContext) {
      const eventName = ctx.reaction_name()?.namemaybein().text; // Get variable name
      if (eventName) {
        let variable = variables.get(eventName);
        if (variable) {
          variable.label = 'Event';
        } else {
          let variableInfo = new VariableInfo();
          variableInfo.label = 'Event';
          variables.set(eventName, variableInfo);
        }
      }
    }

    enterUnit_declaration (ctx: Unit_declarationContext) {
      const varName = ctx.var_name().text; // Get variable name
      const varSum = ctx.sum().text; // Get sum
      let variable = variables.get(varName);
      if (variable && varSum) {
        variable.initialize = varSum;
        variable.label = 'Unit';
        variable.modifiers = 'unit';
      } else if (!variable && varSum) {
        let variableInfo = new VariableInfo();
        variableInfo.initialize = varSum;
        variableInfo.label = 'Unit';
        variableInfo.modifiers = 'unit';
        variables.set(varName, variableInfo);
      }
    };

    enterNamemaybein(ctx: NamemaybeinContext) {
      const varName = ctx.var_name().text; // Get the species name
      const compartmentCtx = ctx.in_comp();
      const compartment = compartmentCtx ? compartmentCtx.var_name().text : undefined; // Get compartment

      let variable = variables.get(varName);

      if (variable && compartment) {
        variable.compartments = compartment;
      } else if (!variable && compartment) {
        const variableInfo = new VariableInfo();
        variableInfo.compartments = compartment;
        variables.set(varName, variableInfo);
      }
    }

    enterIs_assignment (ctx: Is_assignmentContext) {
      const varName = ctx.NAME().text; // Get the species name
      const display = ctx.ESCAPED_STRING().text; // Get the display

      let variable = variables.get(varName);

      if (variable && display) {
        variable.display = display;
      } else if (!variable && display) {
        const variableInfo = new VariableInfo();
        variableInfo.display = display;
        variables.set(varName, variableInfo);
      }
    };

    enterAnnotation(ctx: AnnotationContext) {
      const varName = ctx.var_name().text; // Get the species name
      const annotationlink = ctx.ESCAPED_STRING().text; // Get the annotation

      if (annotatedVar.includes(varName)) {
        return;
      } else {
        annotatedVar.push(varName);
      }

      let variable = variables.get(varName);
      if (variable) {
        variable.annotations?.push(annotationlink);
      } else {
        const annotationInfo = new VariableInfo();
        annotationInfo.annotations?.push(annotationlink);
        variables.set(varName, annotationInfo);
      }
    };
  }
  console.log(variables)

  // Create the listener
  const listener: AntimonyGrammarListener = new AntimonySyntax();
  // Use the entry point for listeners
  ParseTreeWalker.DEFAULT.walk(listener, tree)

  let hoverInfo = parseAntimony(variables);
  let typingTimer: any;
  if (hoverInfo) {
    editor.onDidDispose(() => {
      hoverInfo.dispose();
    });
    editor.onDidChangeModelContent(() => {
      hoverInfo.dispose();
    });
  }
}

function parseAntimony(variables: Map<string, VariableInfo>) {
  let hoverContents: monaco.IMarkdownString[] = [];
  // Register the hover provider
  let hoverInfo = monaco.languages.registerHoverProvider('antimony', {
    provideHover: (model, position) => {
      hoverContents = []
      let valueOfHover: string = '';
      let valueOfAnnotation: string = '';
      const word = model.getWordAtPosition(position);
      if (word) {
        if (variables.has(word.word)) {
          const variableInfo = variables.get(word.word);
          if (variableInfo?.modifiers) {
            switch (variableInfo?.modifiers) {
              case 'var':
                valueOfHover += `<span style="color:#BC96CA;">${variableInfo?.modifiers}</span> <br/> `;
                break;
              case 'const':
                valueOfHover += `<span style="color:#4954F5;">${variableInfo?.modifiers}</span> <br/> `;
                break;
              case 'formula':
                valueOfHover += `<span style="color:#8185C9;">${variableInfo?.modifiers}</span> <br/> `;
                break;
              case 'species':
                valueOfHover += `(<span style="color:#FD7F20;">Species</span>) ${word.word} <br/> `;
                break;
              default:
                break;
            }
          }
          if (variableInfo?.display) {
            valueOfHover += `<span style="color:#FD7F20;">${variableInfo?.display}</span> <br/> `;
          }
          if (variableInfo?.label) {
            switch (variableInfo?.label) {
              case 'Model':
                valueOfHover += `${word.word} <br/> `;
                break;
              case 'Reaction':
                valueOfHover += `(<span style="color:#4DC5B9;">${variableInfo?.label}</span>) ${word.word} <br/> `;
                break;
              case 'Compartment':
                valueOfHover += `(<span style="color:#BC96CA;">${variableInfo?.label}</span>) ${word.word} <br/> `;
                break;
              case 'Event':
                valueOfHover += `(<span style="color:#4954F5;">${variableInfo?.label}</span>) ${word.word} <br/> `;
                break;
              case 'Unit':
                valueOfHover += `(<span style="color:#4954F5;">${variableInfo?.label}</span>) ${word.word} <br/> `;
                break;
              default:
                break;
            }
          }
          if (variableInfo?.initialize) {
            valueOfHover += `Initialized Value: <span style="color:#DEF9CB;">${variableInfo?.initialize}</span> <br/> `;
          }
          if (variableInfo?.compartments) {
            valueOfHover += `In <span style="color:#BC96CA;">${'compartment'}</span>: ${variableInfo?.compartments} <br/> `;
          }
          if (variableInfo?.annotations) {
            variableInfo?.annotations.forEach((annotation) => {
              valueOfAnnotation += `<span style="color:#f2ab7c;">${annotation.replace(/"/g, "")}</span> <br/> `;
            });
          }
        }
        hoverContents.push(
          { supportHtml: true,
            value:  valueOfHover });
        hoverContents.push(
          { supportHtml: true,
            value:  valueOfAnnotation });
        return {
          range: new monaco.Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn),
          contents: hoverContents,
        };
      }
  
    },
  });
  return hoverInfo;
}

export default ModelParser;