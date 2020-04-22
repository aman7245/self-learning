import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/greet';
import Welcome from './component/welcom';
import Hello from './component/hello';

function App() {
  return (
    <div className="App">
      <Greet name='Aman'/>
      <Greet name='Aditya'>
        <p>this is an inner html</p>
      </Greet>
      <Welcome name='Aman'/>
      <Welcome name='Aman Jha'/>
      <Hello />
    </div>
  );
}

export default App;
