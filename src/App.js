import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

function App() {

  const context = useContext(UploadsViewStateContext);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const uploadFiles = (files: FileList | null) =>
    files && context.uploadItems(files);

  const showFileDialog = () =>
    inputFileRef.current && inputFileRef.current.click()

  return (
	<div className="input-file">
      <input 
        style={{ display: 'none' }}
        ref={inputFileRef}
        type="file"
        multiple={true}
        onChange={e => uploadFiles(e.target.files)}
      />
      <button onClick={() => showFileDialog()}>
        Click here to Upload File
      </button>
    </div>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by Aymeric
        </a>
      </header>
      <FilePond server="https://cnamtpfuncayw.azurewebsites.net/api/UploadPhoto?code=3EuwYbV4M0VmzwQXY4wSkbchkWtmRsd0bhX/7PHfoySM2D2RZwpmDQ=="/>
    </div>
  );
}

export default App;
