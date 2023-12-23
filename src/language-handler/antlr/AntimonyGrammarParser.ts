// Generated from /Users/evaliu/Documents/AntimonyEditor/src/languages/antlr/AntimonyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { AntimonyGrammarListener } from "./AntimonyGrammarListener";
import { AntimonyGrammarVisitor } from "./AntimonyGrammarVisitor";


export class AntimonyGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly END = 31;
	public static readonly ARROW = 32;
	public static readonly INTERACTION_SYMBOL = 33;
	public static readonly NUMBER = 34;
	public static readonly BOOLEAN = 35;
	public static readonly COMPARE = 36;
	public static readonly LOGICAL = 37;
	public static readonly SBOTERM = 38;
	public static readonly AEQ = 39;
	public static readonly ANNOT_KEYWORD = 40;
	public static readonly VAR_MODIFIER = 41;
	public static readonly SUB_MODIFIER = 42;
	public static readonly TYPE_MODIFIER = 43;
	public static readonly COMMENT = 44;
	public static readonly NAME = 45;
	public static readonly CNAME = 46;
	public static readonly LETTER = 47;
	public static readonly WORD = 48;
	public static readonly LCASE_LETTER = 49;
	public static readonly UCASE_LETTER = 50;
	public static readonly DIGIT = 51;
	public static readonly NEWLINE = 52;
	public static readonly WS = 53;
	public static readonly ESCAPED_STRING = 54;
	public static readonly RULE_root = 0;
	public static readonly RULE_model = 1;
	public static readonly RULE_var_name = 2;
	public static readonly RULE_in_comp = 3;
	public static readonly RULE_namemaybein = 4;
	public static readonly RULE_event = 5;
	public static readonly RULE_event_delay = 6;
	public static readonly RULE_event_trigger_list = 7;
	public static readonly RULE_event_trigger = 8;
	public static readonly RULE_empty = 9;
	public static readonly RULE_reaction_name = 10;
	public static readonly RULE_reaction = 11;
	public static readonly RULE_species_list = 12;
	public static readonly RULE_species = 13;
	public static readonly RULE_interaction = 14;
	public static readonly RULE_event_assignment_list = 15;
	public static readonly RULE_event_assignment = 16;
	public static readonly RULE_sboterm = 17;
	public static readonly RULE_assignment = 18;
	public static readonly RULE_apostrophe = 19;
	public static readonly RULE_rate_rule = 20;
	public static readonly RULE_annotation = 21;
	public static readonly RULE_annot_list = 22;
	public static readonly RULE_new_annot = 23;
	public static readonly RULE_declaration = 24;
	public static readonly RULE_decl_modifiers = 25;
	public static readonly RULE_decl_item = 26;
	public static readonly RULE_decl_assignment = 27;
	public static readonly RULE_unit = 28;
	public static readonly RULE_unit_declaration = 29;
	public static readonly RULE_unit_assignment = 30;
	public static readonly RULE_mmodel_call = 31;
	public static readonly RULE_bool_exp = 32;
	public static readonly RULE_expressions = 33;
	public static readonly RULE_sum = 34;
	public static readonly RULE_product = 35;
	public static readonly RULE_power = 36;
	public static readonly RULE_atom = 37;
	public static readonly RULE_func_call = 38;
	public static readonly RULE_simple_stmt = 39;
	public static readonly RULE_small_stmt = 40;
	public static readonly RULE_simple_stmt_list = 41;
	public static readonly RULE_import_ = 42;
	public static readonly RULE_modular_model = 43;
	public static readonly RULE_function = 44;
	public static readonly RULE_parameters = 45;
	public static readonly RULE_init_params = 46;
	public static readonly RULE_variable_in = 47;
	public static readonly RULE_is_assignment = 48;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "model", "var_name", "in_comp", "namemaybein", "event", "event_delay", 
		"event_trigger_list", "event_trigger", "empty", "reaction_name", "reaction", 
		"species_list", "species", "interaction", "event_assignment_list", "event_assignment", 
		"sboterm", "assignment", "apostrophe", "rate_rule", "annotation", "annot_list", 
		"new_annot", "declaration", "decl_modifiers", "decl_item", "decl_assignment", 
		"unit", "unit_declaration", "unit_assignment", "mmodel_call", "bool_exp", 
		"expressions", "sum", "product", "power", "atom", "func_call", "simple_stmt", 
		"small_stmt", "simple_stmt_list", "import_", "modular_model", "function", 
		"parameters", "init_params", "variable_in", "is_assignment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'model'", "'module'", "'*'", "'()'", "'$'", "'in'", "'at'", 
		"':'", "'after'", "','", "'t0'", "'='", "'priority'", "'fromTrigger'", 
		"'persistent'", "';'", "'+'", "'.sboTerm'", "'''", "'unit'", "'has'", 
		"'('", "')'", "'-'", "'/'", "'^'", "'exp'", "'import'", "'function'", 
		"'is'", "'end'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "':='", undefined, undefined, "'substanceOnly'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "END", "ARROW", "INTERACTION_SYMBOL", 
		"NUMBER", "BOOLEAN", "COMPARE", "LOGICAL", "SBOTERM", "AEQ", "ANNOT_KEYWORD", 
		"VAR_MODIFIER", "SUB_MODIFIER", "TYPE_MODIFIER", "COMMENT", "NAME", "CNAME", 
		"LETTER", "WORD", "LCASE_LETTER", "UCASE_LETTER", "DIGIT", "NEWLINE", 
		"WS", "ESCAPED_STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AntimonyGrammarParser._LITERAL_NAMES, AntimonyGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AntimonyGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "AntimonyGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return AntimonyGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return AntimonyGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AntimonyGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AntimonyGrammarParser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AntimonyGrammarParser.T__0) | (1 << AntimonyGrammarParser.T__1) | (1 << AntimonyGrammarParser.T__4) | (1 << AntimonyGrammarParser.T__6) | (1 << AntimonyGrammarParser.T__15) | (1 << AntimonyGrammarParser.T__19) | (1 << AntimonyGrammarParser.T__27) | (1 << AntimonyGrammarParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AntimonyGrammarParser.ARROW - 32)) | (1 << (AntimonyGrammarParser.NUMBER - 32)) | (1 << (AntimonyGrammarParser.VAR_MODIFIER - 32)) | (1 << (AntimonyGrammarParser.SUB_MODIFIER - 32)) | (1 << (AntimonyGrammarParser.TYPE_MODIFIER - 32)) | (1 << (AntimonyGrammarParser.COMMENT - 32)) | (1 << (AntimonyGrammarParser.NAME - 32)) | (1 << (AntimonyGrammarParser.NEWLINE - 32)))) !== 0)) {
				{
				this.state = 102;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 98;
					this.simple_stmt();
					}
					break;

				case 2:
					{
					this.state = 99;
					this.model();
					}
					break;

				case 3:
					{
					this.state = 100;
					this.function();
					}
					break;

				case 4:
					{
					this.state = 101;
					this.modular_model();
					}
					break;
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public model(): ModelContext {
		let _localctx: ModelContext = new ModelContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AntimonyGrammarParser.RULE_model);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.NEWLINE) {
				{
				this.state = 107;
				this.match(AntimonyGrammarParser.NEWLINE);
				}
			}

			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.COMMENT) {
				{
				this.state = 110;
				this.match(AntimonyGrammarParser.COMMENT);
				}
			}

			this.state = 113;
			_la = this._input.LA(1);
			if (!(_la === AntimonyGrammarParser.T__0 || _la === AntimonyGrammarParser.T__1)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.T__2) {
				{
				this.state = 114;
				this.match(AntimonyGrammarParser.T__2);
				}
			}

			this.state = 117;
			this.match(AntimonyGrammarParser.NAME);
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.T__3) {
				{
				this.state = 118;
				this.match(AntimonyGrammarParser.T__3);
				}
			}

			this.state = 121;
			this.simple_stmt_list();
			this.state = 122;
			this.match(AntimonyGrammarParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_name(): Var_nameContext {
		let _localctx: Var_nameContext = new Var_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AntimonyGrammarParser.RULE_var_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.T__4) {
				{
				this.state = 124;
				this.match(AntimonyGrammarParser.T__4);
				}
			}

			this.state = 127;
			this.match(AntimonyGrammarParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public in_comp(): In_compContext {
		let _localctx: In_compContext = new In_compContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AntimonyGrammarParser.RULE_in_comp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(AntimonyGrammarParser.T__5);
			this.state = 130;
			this.var_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namemaybein(): NamemaybeinContext {
		let _localctx: NamemaybeinContext = new NamemaybeinContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AntimonyGrammarParser.RULE_namemaybein);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.var_name();
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.T__5) {
				{
				this.state = 133;
				this.in_comp();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event(): EventContext {
		let _localctx: EventContext = new EventContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AntimonyGrammarParser.RULE_event);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.T__4 || _la === AntimonyGrammarParser.NAME) {
				{
				this.state = 136;
				this.reaction_name();
				}
			}

			this.state = 139;
			this.match(AntimonyGrammarParser.T__6);
			this.state = 141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 140;
				this.event_delay();
				}
				break;
			}
			this.state = 143;
			this.bool_exp();
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 144;
				this.event_trigger_list();
				}
				break;
			}
			this.state = 147;
			this.match(AntimonyGrammarParser.T__7);
			this.state = 148;
			this.event_assignment_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event_delay(): Event_delayContext {
		let _localctx: Event_delayContext = new Event_delayContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AntimonyGrammarParser.RULE_event_delay);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.bool_exp();
			this.state = 151;
			this.match(AntimonyGrammarParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event_trigger_list(): Event_trigger_listContext {
		let _localctx: Event_trigger_listContext = new Event_trigger_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AntimonyGrammarParser.RULE_event_trigger_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AntimonyGrammarParser.T__9) {
				{
				{
				this.state = 153;
				this.match(AntimonyGrammarParser.T__9);
				this.state = 154;
				this.event_trigger();
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event_trigger(): Event_triggerContext {
		let _localctx: Event_triggerContext = new Event_triggerContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AntimonyGrammarParser.RULE_event_trigger);
		try {
			this.state = 172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AntimonyGrammarParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 160;
				this.match(AntimonyGrammarParser.T__10);
				this.state = 161;
				this.match(AntimonyGrammarParser.T__11);
				this.state = 162;
				this.match(AntimonyGrammarParser.BOOLEAN);
				}
				break;
			case AntimonyGrammarParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 163;
				this.match(AntimonyGrammarParser.T__12);
				this.state = 164;
				this.match(AntimonyGrammarParser.T__11);
				this.state = 165;
				this.sum(0);
				}
				break;
			case AntimonyGrammarParser.T__13:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 166;
				this.match(AntimonyGrammarParser.T__13);
				this.state = 167;
				this.match(AntimonyGrammarParser.T__11);
				this.state = 168;
				this.match(AntimonyGrammarParser.BOOLEAN);
				}
				break;
			case AntimonyGrammarParser.T__14:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 169;
				this.match(AntimonyGrammarParser.T__14);
				this.state = 170;
				this.match(AntimonyGrammarParser.T__11);
				this.state = 171;
				this.match(AntimonyGrammarParser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public empty(): EmptyContext {
		let _localctx: EmptyContext = new EmptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AntimonyGrammarParser.RULE_empty);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reaction_name(): Reaction_nameContext {
		let _localctx: Reaction_nameContext = new Reaction_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AntimonyGrammarParser.RULE_reaction_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.namemaybein();
			this.state = 177;
			this.match(AntimonyGrammarParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reaction(): ReactionContext {
		let _localctx: ReactionContext = new ReactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AntimonyGrammarParser.RULE_reaction);
		let _la: number;
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 179;
					this.reaction_name();
					}
					break;
				}
				this.state = 182;
				this.species_list();
				this.state = 183;
				this.match(AntimonyGrammarParser.ARROW);
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AntimonyGrammarParser.T__4 || _la === AntimonyGrammarParser.NUMBER || _la === AntimonyGrammarParser.NAME) {
					{
					this.state = 184;
					this.species_list();
					}
				}

				this.state = 187;
				this.match(AntimonyGrammarParser.T__15);
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AntimonyGrammarParser.T__4) | (1 << AntimonyGrammarParser.T__16) | (1 << AntimonyGrammarParser.T__21) | (1 << AntimonyGrammarParser.T__23) | (1 << AntimonyGrammarParser.T__26))) !== 0) || _la === AntimonyGrammarParser.NUMBER || _la === AntimonyGrammarParser.NAME) {
					{
					this.state = 188;
					this.sum(0);
					}
				}

				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AntimonyGrammarParser.T__5) {
					{
					this.state = 191;
					this.in_comp();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 195;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 194;
					this.reaction_name();
					}
					break;
				}
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AntimonyGrammarParser.T__4 || _la === AntimonyGrammarParser.NUMBER || _la === AntimonyGrammarParser.NAME) {
					{
					this.state = 197;
					this.species_list();
					}
				}

				this.state = 200;
				this.match(AntimonyGrammarParser.ARROW);
				this.state = 201;
				this.species_list();
				this.state = 202;
				this.match(AntimonyGrammarParser.T__15);
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AntimonyGrammarParser.T__4) | (1 << AntimonyGrammarParser.T__16) | (1 << AntimonyGrammarParser.T__21) | (1 << AntimonyGrammarParser.T__23) | (1 << AntimonyGrammarParser.T__26))) !== 0) || _la === AntimonyGrammarParser.NUMBER || _la === AntimonyGrammarParser.NAME) {
					{
					this.state = 203;
					this.sum(0);
					}
				}

				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AntimonyGrammarParser.T__5) {
					{
					this.state = 206;
					this.in_comp();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public species_list(): Species_listContext {
		let _localctx: Species_listContext = new Species_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AntimonyGrammarParser.RULE_species_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.species();
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AntimonyGrammarParser.T__16) {
				{
				{
				this.state = 212;
				this.match(AntimonyGrammarParser.T__16);
				this.state = 213;
				this.species();
				}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public species(): SpeciesContext {
		let _localctx: SpeciesContext = new SpeciesContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AntimonyGrammarParser.RULE_species);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.NUMBER) {
				{
				this.state = 219;
				this.match(AntimonyGrammarParser.NUMBER);
				}
			}

			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.T__4) {
				{
				this.state = 222;
				this.match(AntimonyGrammarParser.T__4);
				}
			}

			this.state = 225;
			this.match(AntimonyGrammarParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interaction(): InteractionContext {
		let _localctx: InteractionContext = new InteractionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AntimonyGrammarParser.RULE_interaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 227;
				this.reaction_name();
				}
				break;
			}
			this.state = 230;
			this.species();
			this.state = 231;
			this.match(AntimonyGrammarParser.INTERACTION_SYMBOL);
			this.state = 232;
			this.namemaybein();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event_assignment_list(): Event_assignment_listContext {
		let _localctx: Event_assignment_listContext = new Event_assignment_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AntimonyGrammarParser.RULE_event_assignment_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.event_assignment();
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AntimonyGrammarParser.T__9) {
				{
				{
				this.state = 235;
				this.match(AntimonyGrammarParser.T__9);
				this.state = 236;
				this.event_assignment();
				}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event_assignment(): Event_assignmentContext {
		let _localctx: Event_assignmentContext = new Event_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AntimonyGrammarParser.RULE_event_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.var_name();
			this.state = 243;
			this.match(AntimonyGrammarParser.T__11);
			this.state = 244;
			this.sum(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sboterm(): SbotermContext {
		let _localctx: SbotermContext = new SbotermContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AntimonyGrammarParser.RULE_sboterm);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.var_name();
			this.state = 247;
			this.match(AntimonyGrammarParser.T__17);
			this.state = 248;
			this.match(AntimonyGrammarParser.T__11);
			this.state = 249;
			this.match(AntimonyGrammarParser.SBOTERM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AntimonyGrammarParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.namemaybein();
			this.state = 252;
			_la = this._input.LA(1);
			if (!(_la === AntimonyGrammarParser.T__11 || _la === AntimonyGrammarParser.AEQ)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 253;
			this.sum(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public apostrophe(): ApostropheContext {
		let _localctx: ApostropheContext = new ApostropheContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, AntimonyGrammarParser.RULE_apostrophe);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this.match(AntimonyGrammarParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rate_rule(): Rate_ruleContext {
		let _localctx: Rate_ruleContext = new Rate_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AntimonyGrammarParser.RULE_rate_rule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.match(AntimonyGrammarParser.NAME);
			this.state = 258;
			this.apostrophe();
			this.state = 259;
			this.match(AntimonyGrammarParser.T__11);
			this.state = 260;
			this.sum(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AntimonyGrammarParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.var_name();
			this.state = 263;
			this.match(AntimonyGrammarParser.ANNOT_KEYWORD);
			this.state = 264;
			this.match(AntimonyGrammarParser.ESCAPED_STRING);
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.T__9) {
				{
				this.state = 265;
				this.annot_list();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annot_list(): Annot_listContext {
		let _localctx: Annot_listContext = new Annot_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, AntimonyGrammarParser.RULE_annot_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 268;
				this.new_annot();
				}
				}
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === AntimonyGrammarParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public new_annot(): New_annotContext {
		let _localctx: New_annotContext = new New_annotContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, AntimonyGrammarParser.RULE_new_annot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.match(AntimonyGrammarParser.T__9);
			this.state = 274;
			this.match(AntimonyGrammarParser.NEWLINE);
			this.state = 275;
			this.match(AntimonyGrammarParser.ESCAPED_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, AntimonyGrammarParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.decl_modifiers();
			this.state = 278;
			this.decl_item();
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AntimonyGrammarParser.T__9) {
				{
				{
				this.state = 279;
				this.match(AntimonyGrammarParser.T__9);
				this.state = 280;
				this.decl_item();
				}
				}
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decl_modifiers(): Decl_modifiersContext {
		let _localctx: Decl_modifiersContext = new Decl_modifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, AntimonyGrammarParser.RULE_decl_modifiers);
		try {
			this.state = 295;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 286;
				this.match(AntimonyGrammarParser.VAR_MODIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 287;
				this.match(AntimonyGrammarParser.TYPE_MODIFIER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 288;
				this.match(AntimonyGrammarParser.VAR_MODIFIER);
				this.state = 289;
				this.match(AntimonyGrammarParser.TYPE_MODIFIER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 290;
				this.match(AntimonyGrammarParser.SUB_MODIFIER);
				this.state = 291;
				this.match(AntimonyGrammarParser.TYPE_MODIFIER);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 292;
				this.match(AntimonyGrammarParser.VAR_MODIFIER);
				this.state = 293;
				this.match(AntimonyGrammarParser.SUB_MODIFIER);
				this.state = 294;
				this.match(AntimonyGrammarParser.TYPE_MODIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decl_item(): Decl_itemContext {
		let _localctx: Decl_itemContext = new Decl_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, AntimonyGrammarParser.RULE_decl_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.namemaybein();
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.T__11) {
				{
				this.state = 298;
				this.decl_assignment();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decl_assignment(): Decl_assignmentContext {
		let _localctx: Decl_assignmentContext = new Decl_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, AntimonyGrammarParser.RULE_decl_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(AntimonyGrammarParser.T__11);
			this.state = 302;
			this.sum(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit(): UnitContext {
		let _localctx: UnitContext = new UnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, AntimonyGrammarParser.RULE_unit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(AntimonyGrammarParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit_declaration(): Unit_declarationContext {
		let _localctx: Unit_declarationContext = new Unit_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, AntimonyGrammarParser.RULE_unit_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(AntimonyGrammarParser.T__19);
			this.state = 307;
			this.var_name();
			this.state = 308;
			this.match(AntimonyGrammarParser.T__11);
			this.state = 309;
			this.sum(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit_assignment(): Unit_assignmentContext {
		let _localctx: Unit_assignmentContext = new Unit_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, AntimonyGrammarParser.RULE_unit_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.var_name();
			this.state = 312;
			this.match(AntimonyGrammarParser.T__20);
			this.state = 313;
			this.sum(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mmodel_call(): Mmodel_callContext {
		let _localctx: Mmodel_callContext = new Mmodel_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, AntimonyGrammarParser.RULE_mmodel_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 315;
				this.reaction_name();
				}
				break;
			}
			this.state = 318;
			this.match(AntimonyGrammarParser.NAME);
			this.state = 319;
			this.match(AntimonyGrammarParser.T__21);
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.NUMBER || _la === AntimonyGrammarParser.NAME) {
				{
				this.state = 320;
				this.init_params();
				}
			}

			this.state = 323;
			this.match(AntimonyGrammarParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool_exp(): Bool_expContext {
		let _localctx: Bool_expContext = new Bool_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, AntimonyGrammarParser.RULE_bool_exp);
		let _la: number;
		try {
			this.state = 334;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 325;
				this.expressions();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 326;
				this.expressions();
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AntimonyGrammarParser.LOGICAL) {
					{
					{
					this.state = 327;
					this.match(AntimonyGrammarParser.LOGICAL);
					this.state = 328;
					this.expressions();
					}
					}
					this.state = 333;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressions(): ExpressionsContext {
		let _localctx: ExpressionsContext = new ExpressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, AntimonyGrammarParser.RULE_expressions);
		let _la: number;
		try {
			this.state = 345;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 336;
				this.sum(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 337;
				this.sum(0);
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AntimonyGrammarParser.COMPARE) {
					{
					{
					this.state = 338;
					this.match(AntimonyGrammarParser.COMPARE);
					this.state = 339;
					this.sum(0);
					}
					}
					this.state = 344;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sum(): SumContext;
	public sum(_p: number): SumContext;
	// @RuleVersion(0)
	public sum(_p?: number): SumContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SumContext = new SumContext(this._ctx, _parentState);
		let _prevctx: SumContext = _localctx;
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, AntimonyGrammarParser.RULE_sum, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 348;
			this.product(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 358;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 356;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
					case 1:
						{
						_localctx = new SumContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AntimonyGrammarParser.RULE_sum);
						this.state = 350;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 351;
						this.match(AntimonyGrammarParser.T__16);
						this.state = 352;
						this.product(0);
						}
						break;

					case 2:
						{
						_localctx = new SumContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AntimonyGrammarParser.RULE_sum);
						this.state = 353;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 354;
						this.match(AntimonyGrammarParser.T__23);
						this.state = 355;
						this.product(0);
						}
						break;
					}
					}
				}
				this.state = 360;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public product(): ProductContext;
	public product(_p: number): ProductContext;
	// @RuleVersion(0)
	public product(_p?: number): ProductContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ProductContext = new ProductContext(this._ctx, _parentState);
		let _prevctx: ProductContext = _localctx;
		let _startState: number = 70;
		this.enterRecursionRule(_localctx, 70, AntimonyGrammarParser.RULE_product, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 362;
			this.power(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 372;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 370;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
					case 1:
						{
						_localctx = new ProductContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AntimonyGrammarParser.RULE_product);
						this.state = 364;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 365;
						this.match(AntimonyGrammarParser.T__2);
						this.state = 366;
						this.power(0);
						}
						break;

					case 2:
						{
						_localctx = new ProductContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AntimonyGrammarParser.RULE_product);
						this.state = 367;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 368;
						this.match(AntimonyGrammarParser.T__24);
						this.state = 369;
						this.power(0);
						}
						break;
					}
					}
				}
				this.state = 374;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public power(): PowerContext;
	public power(_p: number): PowerContext;
	// @RuleVersion(0)
	public power(_p?: number): PowerContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PowerContext = new PowerContext(this._ctx, _parentState);
		let _prevctx: PowerContext = _localctx;
		let _startState: number = 72;
		this.enterRecursionRule(_localctx, 72, AntimonyGrammarParser.RULE_power, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AntimonyGrammarParser.T__4:
			case AntimonyGrammarParser.T__16:
			case AntimonyGrammarParser.T__21:
			case AntimonyGrammarParser.T__23:
			case AntimonyGrammarParser.NUMBER:
			case AntimonyGrammarParser.NAME:
				{
				this.state = 376;
				this.atom();
				}
				break;
			case AntimonyGrammarParser.T__26:
				{
				this.state = 377;
				this.match(AntimonyGrammarParser.T__26);
				this.state = 378;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 386;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PowerContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, AntimonyGrammarParser.RULE_power);
					this.state = 381;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 382;
					this.match(AntimonyGrammarParser.T__25);
					this.state = 383;
					this.atom();
					}
					}
				}
				this.state = 388;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, AntimonyGrammarParser.RULE_atom);
		try {
			this.state = 406;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 389;
				this.match(AntimonyGrammarParser.NUMBER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 390;
				this.var_name();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 391;
				this.match(AntimonyGrammarParser.NUMBER);
				this.state = 392;
				this.var_name();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 393;
				this.match(AntimonyGrammarParser.T__23);
				this.state = 394;
				this.atom();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 395;
				this.match(AntimonyGrammarParser.T__16);
				this.state = 396;
				this.atom();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 397;
				this.match(AntimonyGrammarParser.T__21);
				this.state = 398;
				this.sum(0);
				this.state = 399;
				this.match(AntimonyGrammarParser.T__22);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 401;
				this.func_call();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 402;
				this.match(AntimonyGrammarParser.T__21);
				this.state = 403;
				this.bool_exp();
				this.state = 404;
				this.match(AntimonyGrammarParser.T__22);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_call(): Func_callContext {
		let _localctx: Func_callContext = new Func_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, AntimonyGrammarParser.RULE_func_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.var_name();
			this.state = 409;
			this.match(AntimonyGrammarParser.T__21);
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AntimonyGrammarParser.T__4) | (1 << AntimonyGrammarParser.T__16) | (1 << AntimonyGrammarParser.T__21) | (1 << AntimonyGrammarParser.T__23) | (1 << AntimonyGrammarParser.T__26))) !== 0) || _la === AntimonyGrammarParser.NUMBER || _la === AntimonyGrammarParser.NAME) {
				{
				this.state = 410;
				this.parameters();
				}
			}

			this.state = 413;
			this.match(AntimonyGrammarParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simple_stmt(): Simple_stmtContext {
		let _localctx: Simple_stmtContext = new Simple_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, AntimonyGrammarParser.RULE_simple_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AntimonyGrammarParser.T__4) | (1 << AntimonyGrammarParser.T__6) | (1 << AntimonyGrammarParser.T__19) | (1 << AntimonyGrammarParser.T__27))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AntimonyGrammarParser.ARROW - 32)) | (1 << (AntimonyGrammarParser.NUMBER - 32)) | (1 << (AntimonyGrammarParser.VAR_MODIFIER - 32)) | (1 << (AntimonyGrammarParser.SUB_MODIFIER - 32)) | (1 << (AntimonyGrammarParser.TYPE_MODIFIER - 32)) | (1 << (AntimonyGrammarParser.NAME - 32)))) !== 0)) {
				{
				this.state = 415;
				this.small_stmt();
				}
			}

			this.state = 418;
			_la = this._input.LA(1);
			if (!(_la === AntimonyGrammarParser.T__15 || _la === AntimonyGrammarParser.NEWLINE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public small_stmt(): Small_stmtContext {
		let _localctx: Small_stmtContext = new Small_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, AntimonyGrammarParser.RULE_small_stmt);
		try {
			this.state = 434;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 420;
				this.reaction();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 421;
				this.assignment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 422;
				this.declaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 423;
				this.annotation();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 424;
				this.unit_declaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 425;
				this.unit_assignment();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 426;
				this.mmodel_call();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 427;
				this.variable_in();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 428;
				this.is_assignment();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 429;
				this.import_();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 430;
				this.interaction();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 431;
				this.rate_rule();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 432;
				this.sboterm();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 433;
				this.event();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simple_stmt_list(): Simple_stmt_listContext {
		let _localctx: Simple_stmt_listContext = new Simple_stmt_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, AntimonyGrammarParser.RULE_simple_stmt_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 436;
				this.simple_stmt();
				}
				}
				this.state = 439;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AntimonyGrammarParser.T__4) | (1 << AntimonyGrammarParser.T__6) | (1 << AntimonyGrammarParser.T__15) | (1 << AntimonyGrammarParser.T__19) | (1 << AntimonyGrammarParser.T__27))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AntimonyGrammarParser.ARROW - 32)) | (1 << (AntimonyGrammarParser.NUMBER - 32)) | (1 << (AntimonyGrammarParser.VAR_MODIFIER - 32)) | (1 << (AntimonyGrammarParser.SUB_MODIFIER - 32)) | (1 << (AntimonyGrammarParser.TYPE_MODIFIER - 32)) | (1 << (AntimonyGrammarParser.NAME - 32)) | (1 << (AntimonyGrammarParser.NEWLINE - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_(): Import_Context {
		let _localctx: Import_Context = new Import_Context(this._ctx, this.state);
		this.enterRule(_localctx, 84, AntimonyGrammarParser.RULE_import_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.match(AntimonyGrammarParser.T__27);
			this.state = 442;
			this.match(AntimonyGrammarParser.ESCAPED_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modular_model(): Modular_modelContext {
		let _localctx: Modular_modelContext = new Modular_modelContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, AntimonyGrammarParser.RULE_modular_model);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.match(AntimonyGrammarParser.T__0);
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.T__2) {
				{
				this.state = 445;
				this.match(AntimonyGrammarParser.T__2);
				}
			}

			this.state = 448;
			this.match(AntimonyGrammarParser.NAME);
			this.state = 449;
			this.match(AntimonyGrammarParser.T__21);
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.NUMBER || _la === AntimonyGrammarParser.NAME) {
				{
				this.state = 450;
				this.init_params();
				}
			}

			this.state = 453;
			this.match(AntimonyGrammarParser.T__22);
			this.state = 454;
			this.simple_stmt_list();
			this.state = 455;
			this.match(AntimonyGrammarParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, AntimonyGrammarParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.match(AntimonyGrammarParser.T__28);
			this.state = 458;
			this.match(AntimonyGrammarParser.NAME);
			this.state = 459;
			this.match(AntimonyGrammarParser.T__21);
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.NUMBER || _la === AntimonyGrammarParser.NAME) {
				{
				this.state = 460;
				this.init_params();
				}
			}

			this.state = 463;
			this.match(AntimonyGrammarParser.T__22);
			this.state = 464;
			this.match(AntimonyGrammarParser.NEWLINE);
			this.state = 465;
			this.sum(0);
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AntimonyGrammarParser.T__15) {
				{
				this.state = 466;
				this.match(AntimonyGrammarParser.T__15);
				}
			}

			this.state = 469;
			this.match(AntimonyGrammarParser.NEWLINE);
			this.state = 470;
			this.match(AntimonyGrammarParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, AntimonyGrammarParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 472;
			this.bool_exp();
			}
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AntimonyGrammarParser.T__9) {
				{
				{
				this.state = 473;
				this.match(AntimonyGrammarParser.T__9);
				{
				this.state = 474;
				this.bool_exp();
				}
				}
				}
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public init_params(): Init_paramsContext {
		let _localctx: Init_paramsContext = new Init_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, AntimonyGrammarParser.RULE_init_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			_la = this._input.LA(1);
			if (!(_la === AntimonyGrammarParser.NUMBER || _la === AntimonyGrammarParser.NAME)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AntimonyGrammarParser.T__9) {
				{
				{
				this.state = 481;
				this.match(AntimonyGrammarParser.T__9);
				this.state = 482;
				_la = this._input.LA(1);
				if (!(_la === AntimonyGrammarParser.NUMBER || _la === AntimonyGrammarParser.NAME)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable_in(): Variable_inContext {
		let _localctx: Variable_inContext = new Variable_inContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, AntimonyGrammarParser.RULE_variable_in);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this.var_name();
			this.state = 489;
			this.in_comp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public is_assignment(): Is_assignmentContext {
		let _localctx: Is_assignmentContext = new Is_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, AntimonyGrammarParser.RULE_is_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.match(AntimonyGrammarParser.NAME);
			this.state = 492;
			this.match(AntimonyGrammarParser.T__29);
			this.state = 493;
			this.match(AntimonyGrammarParser.ESCAPED_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 34:
			return this.sum_sempred(_localctx as SumContext, predIndex);

		case 35:
			return this.product_sempred(_localctx as ProductContext, predIndex);

		case 36:
			return this.power_sempred(_localctx as PowerContext, predIndex);
		}
		return true;
	}
	private sum_sempred(_localctx: SumContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private product_sempred(_localctx: ProductContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);

		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private power_sempred(_localctx: PowerContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x038\u01F2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x07\x02i\n\x02\f\x02\x0E\x02l\v\x02\x03\x03\x05\x03o" +
		"\n\x03\x03\x03\x05\x03r\n\x03\x03\x03\x03\x03\x05\x03v\n\x03\x03\x03\x03" +
		"\x03\x05\x03z\n\x03\x03\x03\x03\x03\x03\x03\x03\x04\x05\x04\x80\n\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06\x89\n" +
		"\x06\x03\x07\x05\x07\x8C\n\x07\x03\x07\x03\x07\x05\x07\x90\n\x07\x03\x07" +
		"\x03\x07\x05\x07\x94\n\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\t\x03\t\x07\t\x9E\n\t\f\t\x0E\t\xA1\v\t\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xAF\n\n\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\r\x05\r\xB7\n\r\x03\r\x03\r\x03\r\x05\r\xBC\n\r\x03" +
		"\r\x03\r\x05\r\xC0\n\r\x03\r\x05\r\xC3\n\r\x03\r\x05\r\xC6\n\r\x03\r\x05" +
		"\r\xC9\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\xCF\n\r\x03\r\x05\r\xD2\n\r\x05" +
		"\r\xD4\n\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xD9\n\x0E\f\x0E\x0E\x0E\xDC" +
		"\v\x0E\x03\x0F\x05\x0F\xDF\n\x0F\x03\x0F\x05\x0F\xE2\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x05\x10\xE7\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x07\x11\xF0\n\x11\f\x11\x0E\x11\xF3\v\x11\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u010D\n\x17\x03\x18\x06\x18" +
		"\u0110\n\x18\r\x18\x0E\x18\u0111\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u011C\n\x1A\f\x1A\x0E\x1A\u011F\v\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x05\x1B\u012A\n\x1B\x03\x1C\x03\x1C\x05\x1C\u012E\n\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03 \x03 \x03!\x05!\u013F\n!\x03!\x03!\x03!\x05!\u0144\n!\x03!\x03" +
		"!\x03\"\x03\"\x03\"\x03\"\x07\"\u014C\n\"\f\"\x0E\"\u014F\v\"\x05\"\u0151" +
		"\n\"\x03#\x03#\x03#\x03#\x07#\u0157\n#\f#\x0E#\u015A\v#\x05#\u015C\n#" +
		"\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u0167\n$\f$\x0E$\u016A" +
		"\v$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u0175\n%\f%\x0E" +
		"%\u0178\v%\x03&\x03&\x03&\x03&\x05&\u017E\n&\x03&\x03&\x03&\x07&\u0183" +
		"\n&\f&\x0E&\u0186\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0199\n\'\x03" +
		"(\x03(\x03(\x05(\u019E\n(\x03(\x03(\x03)\x05)\u01A3\n)\x03)\x03)\x03*" +
		"\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05" +
		"*\u01B5\n*\x03+\x06+\u01B8\n+\r+\x0E+\u01B9\x03,\x03,\x03,\x03-\x03-\x05" +
		"-\u01C1\n-\x03-\x03-\x03-\x05-\u01C6\n-\x03-\x03-\x03-\x03-\x03.\x03." +
		"\x03.\x03.\x05.\u01D0\n.\x03.\x03.\x03.\x03.\x05.\u01D6\n.\x03.\x03.\x03" +
		".\x03/\x03/\x03/\x07/\u01DE\n/\f/\x0E/\u01E1\v/\x030\x030\x030\x070\u01E6" +
		"\n0\f0\x0E0\u01E9\v0\x031\x031\x031\x032\x032\x032\x032\x032\x02\x02\x05" +
		"FHJ3\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02\x02\x06\x03\x02\x03\x04\x04\x02\x0E\x0E))\x04\x02\x12\x126" +
		"6\x04\x02$$//\x02\u0210\x02j\x03\x02\x02\x02\x04n\x03\x02\x02\x02\x06" +
		"\x7F\x03\x02\x02\x02\b\x83\x03\x02\x02\x02\n\x86\x03\x02\x02\x02\f\x8B" +
		"\x03\x02\x02\x02\x0E\x98\x03\x02\x02\x02\x10\x9F\x03\x02\x02\x02\x12\xAE" +
		"\x03\x02\x02\x02\x14\xB0\x03\x02\x02\x02\x16\xB2\x03\x02\x02\x02\x18\xD3" +
		"\x03\x02\x02\x02\x1A\xD5\x03\x02\x02\x02\x1C\xDE\x03\x02\x02\x02\x1E\xE6" +
		"\x03\x02\x02\x02 \xEC\x03\x02\x02\x02\"\xF4\x03\x02\x02\x02$\xF8\x03\x02" +
		"\x02\x02&\xFD\x03\x02\x02\x02(\u0101\x03\x02\x02\x02*\u0103\x03\x02\x02" +
		"\x02,\u0108\x03\x02\x02\x02.\u010F\x03\x02\x02\x020\u0113\x03\x02\x02" +
		"\x022\u0117\x03\x02\x02\x024\u0129\x03\x02\x02\x026\u012B\x03\x02\x02" +
		"\x028\u012F\x03\x02\x02\x02:\u0132\x03\x02\x02\x02<\u0134\x03\x02\x02" +
		"\x02>\u0139\x03\x02\x02\x02@\u013E\x03\x02\x02\x02B\u0150\x03\x02\x02" +
		"\x02D\u015B\x03\x02\x02\x02F\u015D\x03\x02\x02\x02H\u016B\x03\x02\x02" +
		"\x02J\u017D\x03\x02\x02\x02L\u0198\x03\x02\x02\x02N\u019A\x03\x02\x02" +
		"\x02P\u01A2\x03\x02\x02\x02R\u01B4\x03\x02\x02\x02T\u01B7\x03\x02\x02" +
		"\x02V\u01BB\x03\x02\x02\x02X\u01BE\x03\x02\x02\x02Z\u01CB\x03\x02\x02" +
		"\x02\\\u01DA\x03\x02\x02\x02^\u01E2\x03\x02\x02\x02`\u01EA\x03\x02\x02" +
		"\x02b\u01ED\x03\x02\x02\x02di\x05P)\x02ei\x05\x04\x03\x02fi\x05Z.\x02" +
		"gi\x05X-\x02hd\x03\x02\x02\x02he\x03\x02\x02\x02hf\x03\x02\x02\x02hg\x03" +
		"\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02k\x03" +
		"\x03\x02\x02\x02lj\x03\x02\x02\x02mo\x076\x02\x02nm\x03\x02\x02\x02no" +
		"\x03\x02\x02\x02oq\x03\x02\x02\x02pr\x07.\x02\x02qp\x03\x02\x02\x02qr" +
		"\x03\x02\x02\x02rs\x03\x02\x02\x02su\t\x02\x02\x02tv\x07\x05\x02\x02u" +
		"t\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x03\x02\x02\x02wy\x07/\x02\x02x" +
		"z\x07\x06\x02\x02yx\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02" +
		"{|\x05T+\x02|}\x07!\x02\x02}\x05\x03\x02\x02\x02~\x80\x07\x07\x02\x02" +
		"\x7F~\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02" +
		"\x81\x82\x07/\x02\x02\x82\x07\x03\x02\x02\x02\x83\x84\x07\b\x02\x02\x84" +
		"\x85\x05\x06\x04\x02\x85\t\x03\x02\x02\x02\x86\x88\x05\x06\x04\x02\x87" +
		"\x89\x05\b\x05\x02\x88\x87\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89" +
		"\v\x03\x02\x02\x02\x8A\x8C\x05\x16\f\x02\x8B\x8A\x03\x02\x02\x02\x8B\x8C" +
		"\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x07\t\x02\x02\x8E\x90" +
		"\x05\x0E\b\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91" +
		"\x03\x02\x02\x02\x91\x93\x05B\"\x02\x92\x94\x05\x10\t\x02\x93\x92\x03" +
		"\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x07" +
		"\n\x02\x02\x96\x97\x05 \x11\x02\x97\r\x03\x02\x02\x02\x98\x99\x05B\"\x02" +
		"\x99\x9A\x07\v\x02\x02\x9A\x0F\x03\x02\x02\x02\x9B\x9C\x07\f\x02\x02\x9C" +
		"\x9E\x05\x12\n\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F" +
		"\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\x11\x03\x02\x02\x02\xA1" +
		"\x9F\x03\x02\x02\x02\xA2\xA3\x07\r\x02\x02\xA3\xA4\x07\x0E\x02\x02\xA4" +
		"\xAF\x07%\x02\x02\xA5\xA6\x07\x0F\x02\x02\xA6\xA7\x07\x0E\x02\x02\xA7" +
		"\xAF\x05F$\x02\xA8\xA9\x07\x10\x02\x02\xA9\xAA\x07\x0E\x02\x02\xAA\xAF" +
		"\x07%\x02\x02\xAB\xAC\x07\x11\x02\x02\xAC\xAD\x07\x0E\x02\x02\xAD\xAF" +
		"\x07%\x02\x02\xAE\xA2\x03\x02\x02\x02\xAE\xA5\x03\x02\x02\x02\xAE\xA8" +
		"\x03\x02\x02\x02\xAE\xAB\x03\x02\x02\x02\xAF\x13\x03\x02\x02\x02\xB0\xB1" +
		"\x03\x02\x02\x02\xB1\x15\x03\x02\x02\x02\xB2\xB3\x05\n\x06\x02\xB3\xB4" +
		"\x07\n\x02\x02\xB4\x17\x03\x02\x02\x02\xB5\xB7\x05\x16\f\x02\xB6\xB5\x03" +
		"\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x05" +
		"\x1A\x0E\x02\xB9\xBB\x07\"\x02\x02\xBA\xBC\x05\x1A\x0E\x02\xBB\xBA\x03" +
		"\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x07" +
		"\x12\x02\x02\xBE\xC0\x05F$\x02\xBF\xBE\x03\x02\x02\x02\xBF\xC0\x03\x02" +
		"\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\xC3\x05\b\x05\x02\xC2\xC1\x03\x02" +
		"\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xD4\x03\x02\x02\x02\xC4\xC6\x05\x16" +
		"\f\x02\xC5\xC4\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC8\x03\x02" +
		"\x02\x02\xC7\xC9\x05\x1A\x0E\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02" +
		"\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x07\"\x02\x02\xCB\xCC\x05\x1A" +
		"\x0E\x02\xCC\xCE\x07\x12\x02\x02\xCD\xCF\x05F$\x02\xCE\xCD\x03\x02\x02" +
		"\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x03\x02\x02\x02\xD0\xD2\x05\b\x05" +
		"\x02\xD1\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03\x02\x02" +
		"\x02\xD3\xB6\x03\x02\x02\x02\xD3\xC5\x03\x02\x02\x02\xD4\x19\x03\x02\x02" +
		"\x02\xD5\xDA\x05\x1C\x0F\x02\xD6\xD7\x07\x13\x02\x02\xD7\xD9\x05\x1C\x0F" +
		"\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8\x03\x02\x02" +
		"\x02\xDA\xDB\x03\x02\x02\x02\xDB\x1B\x03\x02\x02\x02\xDC\xDA\x03\x02\x02" +
		"\x02\xDD\xDF\x07$\x02\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF\x03\x02\x02" +
		"\x02\xDF\xE1\x03\x02\x02\x02\xE0\xE2\x07\x07\x02\x02\xE1\xE0\x03\x02\x02" +
		"\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x07/\x02" +
		"\x02\xE4\x1D\x03\x02\x02\x02\xE5\xE7\x05\x16\f\x02\xE6\xE5\x03\x02\x02" +
		"\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x05\x1C\x0F" +
		"\x02\xE9\xEA\x07#\x02\x02\xEA\xEB\x05\n\x06\x02\xEB\x1F\x03\x02\x02\x02" +
		"\xEC\xF1\x05\"\x12\x02\xED\xEE\x07\f\x02\x02\xEE\xF0\x05\"\x12\x02\xEF" +
		"\xED\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1" +
		"\xF2\x03\x02\x02\x02\xF2!\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF4" +
		"\xF5\x05\x06\x04\x02\xF5\xF6\x07\x0E\x02\x02\xF6\xF7\x05F$\x02\xF7#\x03" +
		"\x02\x02\x02\xF8\xF9\x05\x06\x04\x02\xF9\xFA\x07\x14\x02\x02\xFA\xFB\x07" +
		"\x0E\x02\x02\xFB\xFC\x07(\x02\x02\xFC%\x03\x02\x02\x02\xFD\xFE\x05\n\x06" +
		"\x02\xFE\xFF\t\x03\x02\x02\xFF\u0100\x05F$\x02\u0100\'\x03\x02\x02\x02" +
		"\u0101\u0102\x07\x15\x02\x02\u0102)\x03\x02\x02\x02\u0103\u0104\x07/\x02" +
		"\x02\u0104\u0105\x05(\x15\x02\u0105\u0106\x07\x0E\x02\x02\u0106\u0107" +
		"\x05F$\x02\u0107+\x03\x02\x02\x02\u0108\u0109\x05\x06\x04\x02\u0109\u010A" +
		"\x07*\x02\x02\u010A\u010C\x078\x02\x02\u010B\u010D\x05.\x18\x02\u010C" +
		"\u010B\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D-\x03\x02\x02" +
		"\x02\u010E\u0110\x050\x19\x02\u010F\u010E\x03\x02\x02\x02\u0110\u0111" +
		"\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02" +
		"\u0112/\x03\x02\x02\x02\u0113\u0114\x07\f\x02\x02\u0114\u0115\x076\x02" +
		"\x02\u0115\u0116\x078\x02\x02\u01161\x03\x02\x02\x02\u0117\u0118\x054" +
		"\x1B\x02\u0118\u011D\x056\x1C\x02\u0119\u011A\x07\f\x02\x02\u011A\u011C" +
		"\x056\x1C\x02\u011B\u0119\x03\x02\x02\x02\u011C\u011F\x03\x02\x02\x02" +
		"\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E3\x03\x02" +
		"\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u012A\x07+\x02\x02\u0121\u012A" +
		"\x07-\x02\x02\u0122\u0123\x07+\x02\x02\u0123\u012A\x07-\x02\x02\u0124" +
		"\u0125\x07,\x02\x02\u0125\u012A\x07-\x02\x02\u0126\u0127\x07+\x02\x02" +
		"\u0127\u0128\x07,\x02\x02\u0128\u012A\x07-\x02\x02\u0129\u0120\x03\x02" +
		"\x02\x02\u0129\u0121\x03\x02\x02\x02\u0129\u0122\x03\x02\x02\x02\u0129" +
		"\u0124\x03\x02\x02\x02\u0129\u0126\x03\x02\x02\x02\u012A5\x03\x02\x02" +
		"\x02\u012B\u012D\x05\n\x06\x02\u012C\u012E\x058\x1D\x02\u012D\u012C\x03" +
		"\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E7\x03\x02\x02\x02\u012F" +
		"\u0130\x07\x0E\x02\x02\u0130\u0131\x05F$\x02\u01319\x03\x02\x02\x02\u0132" +
		"\u0133\x07/\x02\x02\u0133;\x03\x02\x02\x02\u0134\u0135\x07\x16\x02\x02" +
		"\u0135\u0136\x05\x06\x04\x02\u0136\u0137\x07\x0E\x02\x02\u0137\u0138\x05" +
		"F$\x02\u0138=\x03\x02\x02\x02\u0139\u013A\x05\x06\x04\x02\u013A\u013B" +
		"\x07\x17\x02\x02\u013B\u013C\x05F$\x02\u013C?\x03\x02\x02\x02\u013D\u013F" +
		"\x05\x16\f\x02\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02" +
		"\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x07/\x02\x02\u0141\u0143\x07" +
		"\x18\x02\x02\u0142\u0144\x05^0\x02\u0143\u0142\x03\x02\x02\x02\u0143\u0144" +
		"\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x07\x19\x02\x02" +
		"\u0146A\x03\x02\x02\x02\u0147\u0151\x05D#\x02\u0148\u014D\x05D#\x02\u0149" +
		"\u014A\x07\'\x02\x02\u014A\u014C\x05D#\x02\u014B\u0149\x03\x02\x02\x02" +
		"\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03" +
		"\x02\x02\x02\u014E\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150" +
		"\u0147\x03\x02\x02\x02\u0150\u0148\x03\x02\x02\x02\u0151C\x03\x02\x02" +
		"\x02\u0152\u015C\x05F$\x02\u0153\u0158\x05F$\x02\u0154\u0155\x07&\x02" +
		"\x02\u0155\u0157\x05F$\x02\u0156\u0154\x03\x02\x02\x02\u0157\u015A\x03" +
		"\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
		"\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B\u0152\x03\x02" +
		"\x02\x02\u015B\u0153\x03\x02\x02\x02\u015CE\x03\x02\x02\x02\u015D\u015E" +
		"\b$\x01\x02\u015E\u015F\x05H%\x02\u015F\u0168\x03\x02\x02\x02\u0160\u0161" +
		"\f\x04\x02\x02\u0161\u0162\x07\x13\x02\x02\u0162\u0167\x05H%\x02\u0163" +
		"\u0164\f\x03\x02\x02\u0164\u0165\x07\x1A\x02\x02\u0165\u0167\x05H%\x02" +
		"\u0166\u0160\x03\x02\x02\x02\u0166\u0163\x03\x02\x02\x02\u0167\u016A\x03" +
		"\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169" +
		"G\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016C\b%\x01\x02\u016C" +
		"\u016D\x05J&\x02\u016D\u0176\x03\x02\x02\x02\u016E\u016F\f\x04\x02\x02" +
		"\u016F\u0170\x07\x05\x02\x02\u0170\u0175\x05J&\x02\u0171\u0172\f\x03\x02" +
		"\x02\u0172\u0173\x07\x1B\x02\x02\u0173\u0175\x05J&\x02\u0174\u016E\x03" +
		"\x02\x02\x02\u0174\u0171\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176" +
		"\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177I\x03\x02\x02" +
		"\x02\u0178\u0176\x03\x02\x02\x02\u0179\u017A\b&\x01\x02\u017A\u017E\x05" +
		"L\'\x02\u017B\u017C\x07\x1D\x02\x02\u017C\u017E\x05L\'\x02\u017D\u0179" +
		"\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017E\u0184\x03\x02\x02\x02" +
		"\u017F\u0180\f\x04\x02\x02\u0180\u0181\x07\x1C\x02\x02\u0181\u0183\x05" +
		"L\'\x02\u0182\u017F\x03\x02\x02\x02\u0183\u0186\x03\x02\x02\x02\u0184" +
		"\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185K\x03\x02\x02" +
		"\x02\u0186\u0184\x03\x02\x02\x02\u0187\u0199\x07$\x02\x02\u0188\u0199" +
		"\x05\x06\x04\x02\u0189\u018A\x07$\x02\x02\u018A\u0199\x05\x06\x04\x02" +
		"\u018B\u018C\x07\x1A\x02\x02\u018C\u0199\x05L\'\x02\u018D\u018E\x07\x13" +
		"\x02\x02\u018E\u0199\x05L\'\x02\u018F\u0190\x07\x18\x02\x02\u0190\u0191" +
		"\x05F$\x02\u0191\u0192\x07\x19\x02\x02\u0192\u0199\x03\x02\x02\x02\u0193" +
		"\u0199\x05N(\x02\u0194\u0195\x07\x18\x02\x02\u0195\u0196\x05B\"\x02\u0196" +
		"\u0197\x07\x19\x02\x02\u0197\u0199\x03\x02\x02\x02\u0198\u0187\x03\x02" +
		"\x02\x02\u0198\u0188\x03\x02\x02\x02\u0198\u0189\x03\x02\x02\x02\u0198" +
		"\u018B\x03\x02\x02\x02\u0198\u018D\x03\x02\x02\x02\u0198\u018F\x03\x02" +
		"\x02\x02\u0198\u0193\x03\x02\x02\x02\u0198\u0194\x03\x02\x02\x02\u0199" +
		"M\x03\x02\x02\x02\u019A\u019B\x05\x06\x04\x02\u019B\u019D\x07\x18\x02" +
		"\x02\u019C\u019E\x05\\/\x02\u019D\u019C\x03\x02\x02\x02\u019D\u019E\x03" +
		"\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x07\x19\x02\x02\u01A0" +
		"O\x03\x02\x02\x02\u01A1\u01A3\x05R*\x02\u01A2\u01A1\x03\x02\x02\x02\u01A2" +
		"\u01A3\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A5\t\x04\x02" +
		"\x02\u01A5Q\x03\x02\x02\x02\u01A6\u01B5\x05\x18\r\x02\u01A7\u01B5\x05" +
		"&\x14\x02\u01A8\u01B5\x052\x1A\x02\u01A9\u01B5\x05,\x17\x02\u01AA\u01B5" +
		"\x05<\x1F\x02\u01AB\u01B5\x05> \x02\u01AC\u01B5\x05@!\x02\u01AD\u01B5" +
		"\x05`1\x02\u01AE\u01B5\x05b2\x02\u01AF\u01B5\x05V,\x02\u01B0\u01B5\x05" +
		"\x1E\x10\x02\u01B1\u01B5\x05*\x16\x02\u01B2\u01B5\x05$\x13\x02\u01B3\u01B5" +
		"\x05\f\x07\x02\u01B4\u01A6\x03\x02\x02\x02\u01B4\u01A7\x03\x02\x02\x02" +
		"\u01B4\u01A8\x03\x02\x02\x02\u01B4\u01A9\x03\x02\x02\x02\u01B4\u01AA\x03" +
		"\x02\x02\x02\u01B4\u01AB\x03\x02\x02\x02\u01B4\u01AC\x03\x02\x02\x02\u01B4" +
		"\u01AD\x03\x02\x02\x02\u01B4\u01AE\x03\x02\x02\x02\u01B4\u01AF\x03\x02" +
		"\x02\x02\u01B4\u01B0\x03\x02\x02\x02\u01B4\u01B1\x03\x02\x02\x02\u01B4" +
		"\u01B2\x03\x02\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B5S\x03\x02\x02" +
		"\x02\u01B6\u01B8\x05P)\x02\u01B7\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03" +
		"\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
		"U\x03\x02\x02\x02\u01BB\u01BC\x07\x1E\x02\x02\u01BC\u01BD\x078\x02\x02" +
		"\u01BDW\x03\x02\x02\x02\u01BE\u01C0\x07\x03\x02\x02\u01BF\u01C1\x07\x05" +
		"\x02\x02\u01C0\u01BF\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1" +
		"\u01C2\x03\x02\x02\x02\u01C2\u01C3\x07/\x02\x02\u01C3\u01C5\x07\x18\x02" +
		"\x02\u01C4\u01C6\x05^0\x02\u01C5\u01C4\x03\x02\x02\x02\u01C5\u01C6\x03" +
		"\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C8\x07\x19\x02\x02\u01C8" +
		"\u01C9\x05T+\x02\u01C9\u01CA\x07!\x02\x02\u01CAY\x03\x02\x02\x02\u01CB" +
		"\u01CC\x07\x1F\x02\x02\u01CC\u01CD\x07/\x02\x02\u01CD\u01CF\x07\x18\x02" +
		"\x02\u01CE\u01D0\x05^0\x02\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03" +
		"\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x07\x19\x02\x02\u01D2" +
		"\u01D3\x076\x02\x02\u01D3\u01D5\x05F$\x02\u01D4\u01D6\x07\x12\x02\x02" +
		"\u01D5\u01D4\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D7\x03" +
		"\x02\x02\x02\u01D7\u01D8\x076\x02\x02\u01D8\u01D9\x07!\x02\x02\u01D9[" +
		"\x03\x02\x02\x02\u01DA\u01DF\x05B\"\x02\u01DB\u01DC\x07\f\x02\x02\u01DC" +
		"\u01DE\x05B\"\x02\u01DD\u01DB\x03\x02\x02\x02\u01DE\u01E1\x03\x02\x02" +
		"\x02\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0]\x03" +
		"\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01E7\t\x05\x02\x02\u01E3" +
		"\u01E4\x07\f\x02\x02\u01E4\u01E6\t\x05\x02\x02\u01E5\u01E3\x03\x02\x02" +
		"\x02\u01E6\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8" +
		"\x03\x02\x02\x02\u01E8_\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA" +
		"\u01EB\x05\x06\x04\x02\u01EB\u01EC\x05\b\x05\x02\u01ECa\x03\x02\x02\x02" +
		"\u01ED\u01EE\x07/\x02\x02\u01EE\u01EF\x07 \x02\x02\u01EF\u01F0\x078\x02" +
		"\x02\u01F0c\x03\x02\x02\x029hjnquy\x7F\x88\x8B\x8F\x93\x9F\xAE\xB6\xBB" +
		"\xBF\xC2\xC5\xC8\xCE\xD1\xD3\xDA\xDE\xE1\xE6\xF1\u010C\u0111\u011D\u0129" +
		"\u012D\u013E\u0143\u014D\u0150\u0158\u015B\u0166\u0168\u0174\u0176\u017D" +
		"\u0184\u0198\u019D\u01A2\u01B4\u01B9\u01C0\u01C5\u01CF\u01D5\u01DF\u01E7";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AntimonyGrammarParser.__ATN) {
			AntimonyGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AntimonyGrammarParser._serializedATN));
		}

		return AntimonyGrammarParser.__ATN;
	}

}

export class RootContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext[];
	public simple_stmt(i: number): Simple_stmtContext;
	public simple_stmt(i?: number): Simple_stmtContext | Simple_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Simple_stmtContext);
		} else {
			return this.getRuleContext(i, Simple_stmtContext);
		}
	}
	public model(): ModelContext[];
	public model(i: number): ModelContext;
	public model(i?: number): ModelContext | ModelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelContext);
		} else {
			return this.getRuleContext(i, ModelContext);
		}
	}
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
		}
	}
	public modular_model(): Modular_modelContext[];
	public modular_model(i: number): Modular_modelContext;
	public modular_model(i?: number): Modular_modelContext | Modular_modelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Modular_modelContext);
		} else {
			return this.getRuleContext(i, Modular_modelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_root; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterRoot) {
			listener.enterRoot(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitRoot) {
			listener.exitRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitRoot) {
			return visitor.visitRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModelContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AntimonyGrammarParser.NAME, 0); }
	public simple_stmt_list(): Simple_stmt_listContext {
		return this.getRuleContext(0, Simple_stmt_listContext);
	}
	public END(): TerminalNode { return this.getToken(AntimonyGrammarParser.END, 0); }
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(AntimonyGrammarParser.NEWLINE, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(AntimonyGrammarParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_model; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterModel) {
			listener.enterModel(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitModel) {
			listener.exitModel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitModel) {
			return visitor.visitModel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AntimonyGrammarParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_var_name; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterVar_name) {
			listener.enterVar_name(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitVar_name) {
			listener.exitVar_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitVar_name) {
			return visitor.visitVar_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class In_compContext extends ParserRuleContext {
	public var_name(): Var_nameContext {
		return this.getRuleContext(0, Var_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_in_comp; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterIn_comp) {
			listener.enterIn_comp(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitIn_comp) {
			listener.exitIn_comp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitIn_comp) {
			return visitor.visitIn_comp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamemaybeinContext extends ParserRuleContext {
	public var_name(): Var_nameContext {
		return this.getRuleContext(0, Var_nameContext);
	}
	public in_comp(): In_compContext | undefined {
		return this.tryGetRuleContext(0, In_compContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_namemaybein; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterNamemaybein) {
			listener.enterNamemaybein(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitNamemaybein) {
			listener.exitNamemaybein(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitNamemaybein) {
			return visitor.visitNamemaybein(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventContext extends ParserRuleContext {
	public bool_exp(): Bool_expContext {
		return this.getRuleContext(0, Bool_expContext);
	}
	public event_assignment_list(): Event_assignment_listContext {
		return this.getRuleContext(0, Event_assignment_listContext);
	}
	public reaction_name(): Reaction_nameContext | undefined {
		return this.tryGetRuleContext(0, Reaction_nameContext);
	}
	public event_delay(): Event_delayContext | undefined {
		return this.tryGetRuleContext(0, Event_delayContext);
	}
	public event_trigger_list(): Event_trigger_listContext | undefined {
		return this.tryGetRuleContext(0, Event_trigger_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_event; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterEvent) {
			listener.enterEvent(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitEvent) {
			listener.exitEvent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitEvent) {
			return visitor.visitEvent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_delayContext extends ParserRuleContext {
	public bool_exp(): Bool_expContext {
		return this.getRuleContext(0, Bool_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_event_delay; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterEvent_delay) {
			listener.enterEvent_delay(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitEvent_delay) {
			listener.exitEvent_delay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitEvent_delay) {
			return visitor.visitEvent_delay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_trigger_listContext extends ParserRuleContext {
	public event_trigger(): Event_triggerContext[];
	public event_trigger(i: number): Event_triggerContext;
	public event_trigger(i?: number): Event_triggerContext | Event_triggerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Event_triggerContext);
		} else {
			return this.getRuleContext(i, Event_triggerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_event_trigger_list; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterEvent_trigger_list) {
			listener.enterEvent_trigger_list(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitEvent_trigger_list) {
			listener.exitEvent_trigger_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitEvent_trigger_list) {
			return visitor.visitEvent_trigger_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_triggerContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(AntimonyGrammarParser.BOOLEAN, 0); }
	public sum(): SumContext | undefined {
		return this.tryGetRuleContext(0, SumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_event_trigger; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterEvent_trigger) {
			listener.enterEvent_trigger(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitEvent_trigger) {
			listener.exitEvent_trigger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitEvent_trigger) {
			return visitor.visitEvent_trigger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_empty; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterEmpty) {
			listener.enterEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitEmpty) {
			listener.exitEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitEmpty) {
			return visitor.visitEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Reaction_nameContext extends ParserRuleContext {
	public namemaybein(): NamemaybeinContext {
		return this.getRuleContext(0, NamemaybeinContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_reaction_name; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterReaction_name) {
			listener.enterReaction_name(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitReaction_name) {
			listener.exitReaction_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitReaction_name) {
			return visitor.visitReaction_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReactionContext extends ParserRuleContext {
	public species_list(): Species_listContext[];
	public species_list(i: number): Species_listContext;
	public species_list(i?: number): Species_listContext | Species_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Species_listContext);
		} else {
			return this.getRuleContext(i, Species_listContext);
		}
	}
	public ARROW(): TerminalNode { return this.getToken(AntimonyGrammarParser.ARROW, 0); }
	public reaction_name(): Reaction_nameContext | undefined {
		return this.tryGetRuleContext(0, Reaction_nameContext);
	}
	public sum(): SumContext | undefined {
		return this.tryGetRuleContext(0, SumContext);
	}
	public in_comp(): In_compContext | undefined {
		return this.tryGetRuleContext(0, In_compContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_reaction; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterReaction) {
			listener.enterReaction(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitReaction) {
			listener.exitReaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitReaction) {
			return visitor.visitReaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Species_listContext extends ParserRuleContext {
	public species(): SpeciesContext[];
	public species(i: number): SpeciesContext;
	public species(i?: number): SpeciesContext | SpeciesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpeciesContext);
		} else {
			return this.getRuleContext(i, SpeciesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_species_list; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterSpecies_list) {
			listener.enterSpecies_list(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitSpecies_list) {
			listener.exitSpecies_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitSpecies_list) {
			return visitor.visitSpecies_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpeciesContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AntimonyGrammarParser.NAME, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(AntimonyGrammarParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_species; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterSpecies) {
			listener.enterSpecies(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitSpecies) {
			listener.exitSpecies(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitSpecies) {
			return visitor.visitSpecies(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InteractionContext extends ParserRuleContext {
	public species(): SpeciesContext {
		return this.getRuleContext(0, SpeciesContext);
	}
	public INTERACTION_SYMBOL(): TerminalNode { return this.getToken(AntimonyGrammarParser.INTERACTION_SYMBOL, 0); }
	public namemaybein(): NamemaybeinContext {
		return this.getRuleContext(0, NamemaybeinContext);
	}
	public reaction_name(): Reaction_nameContext | undefined {
		return this.tryGetRuleContext(0, Reaction_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_interaction; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterInteraction) {
			listener.enterInteraction(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitInteraction) {
			listener.exitInteraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitInteraction) {
			return visitor.visitInteraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_assignment_listContext extends ParserRuleContext {
	public event_assignment(): Event_assignmentContext[];
	public event_assignment(i: number): Event_assignmentContext;
	public event_assignment(i?: number): Event_assignmentContext | Event_assignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Event_assignmentContext);
		} else {
			return this.getRuleContext(i, Event_assignmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_event_assignment_list; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterEvent_assignment_list) {
			listener.enterEvent_assignment_list(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitEvent_assignment_list) {
			listener.exitEvent_assignment_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitEvent_assignment_list) {
			return visitor.visitEvent_assignment_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_assignmentContext extends ParserRuleContext {
	public var_name(): Var_nameContext {
		return this.getRuleContext(0, Var_nameContext);
	}
	public sum(): SumContext {
		return this.getRuleContext(0, SumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_event_assignment; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterEvent_assignment) {
			listener.enterEvent_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitEvent_assignment) {
			listener.exitEvent_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitEvent_assignment) {
			return visitor.visitEvent_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SbotermContext extends ParserRuleContext {
	public var_name(): Var_nameContext {
		return this.getRuleContext(0, Var_nameContext);
	}
	public SBOTERM(): TerminalNode { return this.getToken(AntimonyGrammarParser.SBOTERM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_sboterm; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterSboterm) {
			listener.enterSboterm(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitSboterm) {
			listener.exitSboterm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitSboterm) {
			return visitor.visitSboterm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public namemaybein(): NamemaybeinContext {
		return this.getRuleContext(0, NamemaybeinContext);
	}
	public sum(): SumContext {
		return this.getRuleContext(0, SumContext);
	}
	public AEQ(): TerminalNode { return this.getToken(AntimonyGrammarParser.AEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_assignment; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApostropheContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_apostrophe; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterApostrophe) {
			listener.enterApostrophe(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitApostrophe) {
			listener.exitApostrophe(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitApostrophe) {
			return visitor.visitApostrophe(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rate_ruleContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AntimonyGrammarParser.NAME, 0); }
	public apostrophe(): ApostropheContext {
		return this.getRuleContext(0, ApostropheContext);
	}
	public sum(): SumContext {
		return this.getRuleContext(0, SumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_rate_rule; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterRate_rule) {
			listener.enterRate_rule(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitRate_rule) {
			listener.exitRate_rule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitRate_rule) {
			return visitor.visitRate_rule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public var_name(): Var_nameContext {
		return this.getRuleContext(0, Var_nameContext);
	}
	public ANNOT_KEYWORD(): TerminalNode { return this.getToken(AntimonyGrammarParser.ANNOT_KEYWORD, 0); }
	public ESCAPED_STRING(): TerminalNode { return this.getToken(AntimonyGrammarParser.ESCAPED_STRING, 0); }
	public annot_list(): Annot_listContext | undefined {
		return this.tryGetRuleContext(0, Annot_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_annotation; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annot_listContext extends ParserRuleContext {
	public new_annot(): New_annotContext[];
	public new_annot(i: number): New_annotContext;
	public new_annot(i?: number): New_annotContext | New_annotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(New_annotContext);
		} else {
			return this.getRuleContext(i, New_annotContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_annot_list; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterAnnot_list) {
			listener.enterAnnot_list(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitAnnot_list) {
			listener.exitAnnot_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitAnnot_list) {
			return visitor.visitAnnot_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class New_annotContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode { return this.getToken(AntimonyGrammarParser.NEWLINE, 0); }
	public ESCAPED_STRING(): TerminalNode { return this.getToken(AntimonyGrammarParser.ESCAPED_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_new_annot; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterNew_annot) {
			listener.enterNew_annot(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitNew_annot) {
			listener.exitNew_annot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitNew_annot) {
			return visitor.visitNew_annot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public decl_modifiers(): Decl_modifiersContext {
		return this.getRuleContext(0, Decl_modifiersContext);
	}
	public decl_item(): Decl_itemContext[];
	public decl_item(i: number): Decl_itemContext;
	public decl_item(i?: number): Decl_itemContext | Decl_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Decl_itemContext);
		} else {
			return this.getRuleContext(i, Decl_itemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_declaration; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Decl_modifiersContext extends ParserRuleContext {
	public VAR_MODIFIER(): TerminalNode | undefined { return this.tryGetToken(AntimonyGrammarParser.VAR_MODIFIER, 0); }
	public TYPE_MODIFIER(): TerminalNode | undefined { return this.tryGetToken(AntimonyGrammarParser.TYPE_MODIFIER, 0); }
	public SUB_MODIFIER(): TerminalNode | undefined { return this.tryGetToken(AntimonyGrammarParser.SUB_MODIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_decl_modifiers; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterDecl_modifiers) {
			listener.enterDecl_modifiers(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitDecl_modifiers) {
			listener.exitDecl_modifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitDecl_modifiers) {
			return visitor.visitDecl_modifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Decl_itemContext extends ParserRuleContext {
	public namemaybein(): NamemaybeinContext {
		return this.getRuleContext(0, NamemaybeinContext);
	}
	public decl_assignment(): Decl_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Decl_assignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_decl_item; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterDecl_item) {
			listener.enterDecl_item(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitDecl_item) {
			listener.exitDecl_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitDecl_item) {
			return visitor.visitDecl_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Decl_assignmentContext extends ParserRuleContext {
	public sum(): SumContext {
		return this.getRuleContext(0, SumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_decl_assignment; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterDecl_assignment) {
			listener.enterDecl_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitDecl_assignment) {
			listener.exitDecl_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitDecl_assignment) {
			return visitor.visitDecl_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AntimonyGrammarParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_unit; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterUnit) {
			listener.enterUnit(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitUnit) {
			listener.exitUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unit_declarationContext extends ParserRuleContext {
	public var_name(): Var_nameContext {
		return this.getRuleContext(0, Var_nameContext);
	}
	public sum(): SumContext {
		return this.getRuleContext(0, SumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_unit_declaration; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterUnit_declaration) {
			listener.enterUnit_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitUnit_declaration) {
			listener.exitUnit_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitUnit_declaration) {
			return visitor.visitUnit_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unit_assignmentContext extends ParserRuleContext {
	public var_name(): Var_nameContext {
		return this.getRuleContext(0, Var_nameContext);
	}
	public sum(): SumContext {
		return this.getRuleContext(0, SumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_unit_assignment; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterUnit_assignment) {
			listener.enterUnit_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitUnit_assignment) {
			listener.exitUnit_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitUnit_assignment) {
			return visitor.visitUnit_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mmodel_callContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AntimonyGrammarParser.NAME, 0); }
	public reaction_name(): Reaction_nameContext | undefined {
		return this.tryGetRuleContext(0, Reaction_nameContext);
	}
	public init_params(): Init_paramsContext | undefined {
		return this.tryGetRuleContext(0, Init_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_mmodel_call; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterMmodel_call) {
			listener.enterMmodel_call(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitMmodel_call) {
			listener.exitMmodel_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitMmodel_call) {
			return visitor.visitMmodel_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_expContext extends ParserRuleContext {
	public expressions(): ExpressionsContext[];
	public expressions(i: number): ExpressionsContext;
	public expressions(i?: number): ExpressionsContext | ExpressionsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionsContext);
		} else {
			return this.getRuleContext(i, ExpressionsContext);
		}
	}
	public LOGICAL(): TerminalNode[];
	public LOGICAL(i: number): TerminalNode;
	public LOGICAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AntimonyGrammarParser.LOGICAL);
		} else {
			return this.getToken(AntimonyGrammarParser.LOGICAL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_bool_exp; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterBool_exp) {
			listener.enterBool_exp(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitBool_exp) {
			listener.exitBool_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitBool_exp) {
			return visitor.visitBool_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionsContext extends ParserRuleContext {
	public sum(): SumContext[];
	public sum(i: number): SumContext;
	public sum(i?: number): SumContext | SumContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SumContext);
		} else {
			return this.getRuleContext(i, SumContext);
		}
	}
	public COMPARE(): TerminalNode[];
	public COMPARE(i: number): TerminalNode;
	public COMPARE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AntimonyGrammarParser.COMPARE);
		} else {
			return this.getToken(AntimonyGrammarParser.COMPARE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_expressions; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterExpressions) {
			listener.enterExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitExpressions) {
			listener.exitExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitExpressions) {
			return visitor.visitExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SumContext extends ParserRuleContext {
	public product(): ProductContext {
		return this.getRuleContext(0, ProductContext);
	}
	public sum(): SumContext | undefined {
		return this.tryGetRuleContext(0, SumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_sum; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterSum) {
			listener.enterSum(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitSum) {
			listener.exitSum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitSum) {
			return visitor.visitSum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProductContext extends ParserRuleContext {
	public power(): PowerContext {
		return this.getRuleContext(0, PowerContext);
	}
	public product(): ProductContext | undefined {
		return this.tryGetRuleContext(0, ProductContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_product; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterProduct) {
			listener.enterProduct(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitProduct) {
			listener.exitProduct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitProduct) {
			return visitor.visitProduct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowerContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public power(): PowerContext | undefined {
		return this.tryGetRuleContext(0, PowerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_power; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterPower) {
			listener.enterPower(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitPower) {
			listener.exitPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitPower) {
			return visitor.visitPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(AntimonyGrammarParser.NUMBER, 0); }
	public var_name(): Var_nameContext | undefined {
		return this.tryGetRuleContext(0, Var_nameContext);
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public sum(): SumContext | undefined {
		return this.tryGetRuleContext(0, SumContext);
	}
	public func_call(): Func_callContext | undefined {
		return this.tryGetRuleContext(0, Func_callContext);
	}
	public bool_exp(): Bool_expContext | undefined {
		return this.tryGetRuleContext(0, Bool_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_atom; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_callContext extends ParserRuleContext {
	public var_name(): Var_nameContext {
		return this.getRuleContext(0, Var_nameContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_func_call; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterFunc_call) {
			listener.enterFunc_call(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitFunc_call) {
			listener.exitFunc_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitFunc_call) {
			return visitor.visitFunc_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_stmtContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode { return this.getToken(AntimonyGrammarParser.NEWLINE, 0); }
	public small_stmt(): Small_stmtContext | undefined {
		return this.tryGetRuleContext(0, Small_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_simple_stmt; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterSimple_stmt) {
			listener.enterSimple_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitSimple_stmt) {
			listener.exitSimple_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitSimple_stmt) {
			return visitor.visitSimple_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Small_stmtContext extends ParserRuleContext {
	public reaction(): ReactionContext | undefined {
		return this.tryGetRuleContext(0, ReactionContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public unit_declaration(): Unit_declarationContext | undefined {
		return this.tryGetRuleContext(0, Unit_declarationContext);
	}
	public unit_assignment(): Unit_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Unit_assignmentContext);
	}
	public mmodel_call(): Mmodel_callContext | undefined {
		return this.tryGetRuleContext(0, Mmodel_callContext);
	}
	public variable_in(): Variable_inContext | undefined {
		return this.tryGetRuleContext(0, Variable_inContext);
	}
	public is_assignment(): Is_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Is_assignmentContext);
	}
	public import_(): Import_Context | undefined {
		return this.tryGetRuleContext(0, Import_Context);
	}
	public interaction(): InteractionContext | undefined {
		return this.tryGetRuleContext(0, InteractionContext);
	}
	public rate_rule(): Rate_ruleContext | undefined {
		return this.tryGetRuleContext(0, Rate_ruleContext);
	}
	public sboterm(): SbotermContext | undefined {
		return this.tryGetRuleContext(0, SbotermContext);
	}
	public event(): EventContext | undefined {
		return this.tryGetRuleContext(0, EventContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_small_stmt; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterSmall_stmt) {
			listener.enterSmall_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitSmall_stmt) {
			listener.exitSmall_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitSmall_stmt) {
			return visitor.visitSmall_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_stmt_listContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext[];
	public simple_stmt(i: number): Simple_stmtContext;
	public simple_stmt(i?: number): Simple_stmtContext | Simple_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Simple_stmtContext);
		} else {
			return this.getRuleContext(i, Simple_stmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_simple_stmt_list; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterSimple_stmt_list) {
			listener.enterSimple_stmt_list(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitSimple_stmt_list) {
			listener.exitSimple_stmt_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitSimple_stmt_list) {
			return visitor.visitSimple_stmt_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_Context extends ParserRuleContext {
	public ESCAPED_STRING(): TerminalNode { return this.getToken(AntimonyGrammarParser.ESCAPED_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_import_; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterImport_) {
			listener.enterImport_(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitImport_) {
			listener.exitImport_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitImport_) {
			return visitor.visitImport_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Modular_modelContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AntimonyGrammarParser.NAME, 0); }
	public simple_stmt_list(): Simple_stmt_listContext {
		return this.getRuleContext(0, Simple_stmt_listContext);
	}
	public END(): TerminalNode { return this.getToken(AntimonyGrammarParser.END, 0); }
	public init_params(): Init_paramsContext | undefined {
		return this.tryGetRuleContext(0, Init_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_modular_model; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterModular_model) {
			listener.enterModular_model(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitModular_model) {
			listener.exitModular_model(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitModular_model) {
			return visitor.visitModular_model(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AntimonyGrammarParser.NAME, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AntimonyGrammarParser.NEWLINE);
		} else {
			return this.getToken(AntimonyGrammarParser.NEWLINE, i);
		}
	}
	public sum(): SumContext {
		return this.getRuleContext(0, SumContext);
	}
	public END(): TerminalNode { return this.getToken(AntimonyGrammarParser.END, 0); }
	public init_params(): Init_paramsContext | undefined {
		return this.tryGetRuleContext(0, Init_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_function; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public bool_exp(): Bool_expContext[];
	public bool_exp(i: number): Bool_expContext;
	public bool_exp(i?: number): Bool_expContext | Bool_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bool_expContext);
		} else {
			return this.getRuleContext(i, Bool_expContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_parameters; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Init_paramsContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AntimonyGrammarParser.NAME);
		} else {
			return this.getToken(AntimonyGrammarParser.NAME, i);
		}
	}
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AntimonyGrammarParser.NUMBER);
		} else {
			return this.getToken(AntimonyGrammarParser.NUMBER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_init_params; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterInit_params) {
			listener.enterInit_params(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitInit_params) {
			listener.exitInit_params(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitInit_params) {
			return visitor.visitInit_params(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_inContext extends ParserRuleContext {
	public var_name(): Var_nameContext {
		return this.getRuleContext(0, Var_nameContext);
	}
	public in_comp(): In_compContext {
		return this.getRuleContext(0, In_compContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_variable_in; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterVariable_in) {
			listener.enterVariable_in(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitVariable_in) {
			listener.exitVariable_in(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitVariable_in) {
			return visitor.visitVariable_in(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Is_assignmentContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AntimonyGrammarParser.NAME, 0); }
	public ESCAPED_STRING(): TerminalNode { return this.getToken(AntimonyGrammarParser.ESCAPED_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AntimonyGrammarParser.RULE_is_assignment; }
	// @Override
	public enterRule(listener: AntimonyGrammarListener): void {
		if (listener.enterIs_assignment) {
			listener.enterIs_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: AntimonyGrammarListener): void {
		if (listener.exitIs_assignment) {
			listener.exitIs_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AntimonyGrammarVisitor<Result>): Result {
		if (visitor.visitIs_assignment) {
			return visitor.visitIs_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


