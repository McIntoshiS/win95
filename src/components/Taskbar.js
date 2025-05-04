import React from 'react';
import './Taskbar.css';

function Taskbar() {
  return (
    <div className="taskbar">
      <button className="start-button">Start</button>
      <div className="taskbar-icons">
        {/* Add taskbar icons here */}
      </div>
    </div>
  );
}

export default Taskbar;