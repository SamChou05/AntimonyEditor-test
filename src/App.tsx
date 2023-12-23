import React, { useState, useEffect } from 'react';
import './App.css';
import FileExplorer from './components/file-explorer/FileExplorer';
import { openDB, DBSchema } from 'idb';
import { SolidSplitter } from './components/CustomSplitters';
import { Split } from '@geoffcox/react-splitter';
import AntimonyEditor from './components/antimony-editor/AntimonyEditor';
import { IDBPDatabase } from 'idb';

interface MyDB extends DBSchema {
  files: {
    key: string;
    value: { name: string; content: string };
  };
}

const App: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; content: string }[]>([]);
  const [selectedFileContent, setSelectedFileContent] = useState<string>('// Enter Antimony Model Here');
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  const [db, setDb] = useState<IDBPDatabase<MyDB> | null>();

  useEffect(() => {
    openDB<MyDB>('antimony_editor_db', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('files')) {
          db.createObjectStore('files', { keyPath: 'name' });
        }
      },
    }).then(database => {
      setDb(database); // Store the database instance in the state
      database.getAll('files').then(files => {
        setUploadedFiles(files);
      });
    });
  }, []);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && db) {
      Array.from(files).forEach(async file => {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async () => {
          const fileData = { name: file.name, content: reader.result as string };
          await db.put('files', fileData);
          setUploadedFiles(prevFiles => [...prevFiles, fileData]);
        };
      });
    }
  };

  const handleFileClick = (fileContent: string, fileName: string) => {
    setSelectedFileContent(fileContent);
    setSelectedFileName(fileName);
  
    // Store the selected file's information in IndexedDB
    if (db) {
      db.put('files', { name: fileName, content: fileContent });
    }
  };

  return (
    <div className='app'>
      <header>
        <h1>The Official Antimony Web Code Editor</h1>
        <a target="_blank" href={"https://reproduciblebiomodels.org/"}>
          https://reproduciblebiomodels.org/
        </a>
      </header>
      <div className="middle">
        <Split
          renderSplitter={() => <SolidSplitter/>}
          initialPrimarySize='14%'
          splitterSize='3px'
          minPrimarySize='14%'
        >
          <section>
            <input type="file" multiple onChange={handleFileUpload} />
            <FileExplorer files={uploadedFiles} onFileClick={handleFileClick} />
          </section>       
          <div>
          {db ? ( // Conditionally render the AntimonyEditor component when db is defined
              <AntimonyEditor content={selectedFileContent} fileName={selectedFileName} database={db} />
            ) : (
              // You can provide a loading message or handle the absence of the database as needed
              <div>Loading...</div>
            )}          </div>
        </Split>
      </div>
      <footer>
        Copyright © 2023 Center for Reproducible Biomedical Modeling
      </footer>
    </div>
  );
};

export default App;
