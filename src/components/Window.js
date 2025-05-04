import React, { useState } from 'react';
import './Window.css';

function Window({ title, children }) {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={`window ${isMinimized ? 'minimized' : ''}`}>
      <div className="window-header">
        <span>{title}</span>
        <div className="window-controls">
          <button onClick={() => setIsMinimized(!isMinimized)}>_</button>
          <button onClick={() => alert('Close window')}>X</button>
        </div>
      </div>
      {!isMinimized && <div className="window-content">{children}</div>}
    </div>
  );
}

export default Window;