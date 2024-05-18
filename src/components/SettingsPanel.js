
// Importing necessary libraries and dependencies
import React, { useState } from 'react';
import './SettingsPanel.css';
import { FaArrowLeft } from 'react-icons/fa';

const SettingsPanel = ({ selectedNode, onTextChange, onBack }) => {
  const [text, setText] = useState(selectedNode.data.label);

  // Function to handle text change in the textarea
  const handleTextChange = (event) => {
    setText(event.target.value);
    onTextChange(selectedNode.id, event.target.value);
  };

  return (
    <div className="settings-panel">
      <div className="settings-header">
        <FaArrowLeft onClick={onBack} className="back-arrow" />
        <span className="settings-title">Message</span>
      </div>
      <hr />
      <div className="settings-content">
        <label className="settings-label">Text</label>
        <textarea
          className="text-input"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <hr />
    </div>
  );
};

// Export the SettingsPanel component as default
export default SettingsPanel;
