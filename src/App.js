import React from 'react';
import './App.css';
import Taskbar from './components/Taskbar';
import Desktop from './components/Desktop';
import Window from './components/Window';

function App() {
  return (
    <div className="App">
      <Desktop />
      <Taskbar />
      <Window title="My Computer">
        <p>Welcome to Windows 95!</p>
      </Window>
    </div>
  );
}

export default App;
