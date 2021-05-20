import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

function App() {
  return (
  	<input type="file" id="file-selector" multiple>
	<script>
	  const fileSelector = document.getElementById('file-selector');
	  fileSelector.addEventListener('change', (event) => {
	    const fileList = event.target.files;
	    console.log(fileList);
	  });
	</script>
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
