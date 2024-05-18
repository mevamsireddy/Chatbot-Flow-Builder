// Importing libraries
import React from 'react';
import { Handle, Position } from 'reactflow';
import './CustomNode.css';
import { FaCommentAlt, FaWhatsapp } from 'react-icons/fa';

// Defining a functional component that takes 'data' as a prop
const CustomNode = ({ data }) => {
  return (
    <div className="custom-node">
      <div className="node-header bg-light-green">
      <FaCommentAlt className="icon" />
        <span className="node-text">Send Message</span>
        <FaWhatsapp className="icon whatsapp-icon" />
      </div>
      <div className="node-content">
        {data.label}
      </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

// Exporting the CustomNode component as the default export
export default CustomNode;
