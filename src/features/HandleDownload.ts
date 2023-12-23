import * as monaco from 'monaco-editor';

const handleDownload = (editorInstance: monaco.editor.IStandaloneCodeEditor | null, fileName: string) => {
  // Download the file to the user's downloads folder
  if (editorInstance) {
    const blob = new Blob([editorInstance.getValue()], { type: 'ant' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};

export default handleDownload;