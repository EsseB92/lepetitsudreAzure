import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

function App() {
  return (
    <div className="App">
  		<FilePond server="https://cnamtpfuncayw.azurewebsites.net/api/UploadPhoto?code=3EuwYbV4M0VmzwQXY4wSkbchkWtmRsd0bhX/7PHfoySM2D2RZwpmDQ=="/>
    </div>
  );
}

export default App;
