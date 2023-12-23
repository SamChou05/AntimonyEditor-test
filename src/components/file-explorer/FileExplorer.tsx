import React, { useState } from 'react';
import './FileExplorer.css'

interface FileExplorerProps {
  files: { name: string; content: string }[];
  onFileClick: (fileContent: string, fileName: string) => void;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files, onFileClick }) => {
  const [selectedFileIndex, setSelectedFileIndex] = useState<number | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleFileButtonClick = (index: number, fileName: string) => {
    setSelectedFileIndex(index);
    setSelectedFileName(fileName)
    onFileClick(files[index].content, fileName);
  };

  return (
    <div className="file-explorer">
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <button
              onClick={() => handleFileButtonClick(index, file.name)}
              className={`button ${selectedFileIndex === index ? 'selected' : ''}`}
            >
              {file.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileExplorer;
