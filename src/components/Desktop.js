import React from 'react';
import './Desktop.css';

function Desktop() {
  const icons = [
    { name: 'My Computer', icon: '/static/icons/my-computer.png' },
    { name: 'Recycle Bin', icon: '/static/icons/recycle-bin.png' },
    // Add more icons as needed
  ];

  return (
    <div className="desktop">
      {icons.map((icon, index) => (
        <div key={index} className="desktop-icon">
          <img src={icon.icon} alt={icon.name} />
          <span>{icon.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Desktop;