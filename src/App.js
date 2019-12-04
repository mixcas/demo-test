import React from 'react';
import './App.css';
import ToDo from './components/ToDo'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh'
    }} className="App">
      <ToDo/>
    </div>
  );
}

export default App;
