import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

function App() {
  return (
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

  		<FilePond server="https://lepetitsudredescimage.azurewebsites.net/api/AnalyseImage?code=mpjotMyJJ9J1NgzZtGuMPKYo5fWhMVkn9aHR8U8DMgcRQce0KcJO5A=="/>
    </div>
  );
}

export default App;
