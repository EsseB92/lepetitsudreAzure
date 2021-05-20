import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

function App() {
  return (
    <div className="App">
  		<FilePond server="https://lepetitsudredescimage.azurewebsites.net/api/AnalyseImage?code=mpjotMyJJ9J1NgzZtGuMPKYo5fWhMVkn9aHR8U8DMgcRQce0KcJO5A=="/>
    </div>
  );
}

export default App;
