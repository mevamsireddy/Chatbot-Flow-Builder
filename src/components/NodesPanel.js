// Importing necessary libraries and dependencies
import React from 'react';
import './NodesPanel.css';
import { FaCommentAlt } from 'react-icons/fa';

// NodesPanel component definition
const NodesPanel = () => {
  // Function to handle the drag start event
  const handleDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="nodes-panel">
      <div
        className="node-item"
        onDragStart={(event) => handleDragStart(event, 'TextMessage')}
        draggable
      >
        <FaCommentAlt className="icon"/>
        Message
      </div>
    </div>
  );
};

// Exporting the component for use in other parts of the application
export default NodesPanel;
