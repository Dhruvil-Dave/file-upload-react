import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';

const App = () => (
  <div className='container mt-4'>
    <h2 className='display-4 text-center mb-4'>
       File Upload
    </h2>
    <br/>
    <h3><center>Drag n Drop your file or browse your file</center></h3>
    <br/>

    <FileUpload />
    <br/><br/><center>The uploaded files will appear in uploads folder.</center>
  </div>
);

export default App;