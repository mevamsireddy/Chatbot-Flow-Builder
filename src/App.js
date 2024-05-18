import React, { useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  MiniMap,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css'; // Import React Flow styles
import NodesPanel from './components/NodesPanel'; // Import NodesPanel component
import SettingsPanel from './components/SettingsPanel'; // Import SettingsPanel component
import CustomNode from './components/CustomNode'; // Import CustomNode component
import CustomEdge from './components/CustomEdge'; // Import CustomEdge component
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique IDs
import './App.css'; // Import custom CSS

// Initial empty nodes and edges
const initialNodes = [];
const initialEdges = [];

// Define custom node and edge types
const nodeTypes = {
  TextMessage: CustomNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

const App = () => {
  // State for nodes, edges, selected node, and settings panel visibility
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);

  const onConnect = (params) => setEdges((eds) => addEdge({ ...params, type: 'custom' }, eds));
  const onNodesChange = (changes) => setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgesChange = (changes) => setEdges((eds) => applyEdgeChanges(changes, eds));
  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    if (node.type === 'TextMessage') {
      setShowSettingsPanel(true);
    }
  };

  const handleDrop = (event) => {
    const reactFlowBounds = event.target.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    if (!type) return;

    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    };
    const id = uuidv4();
    const newNode = {
      id,
      type,
      position,
      data: { label: `${type}` },
    };

    setNodes((nds) => nds.concat(newNode));
  };

  // Handle drag over event
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  // Handle text change in node
  const onTextChange = (id, value) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            label: value,
          };
        }
        return node;
      })
    );
  };

  const handleSave = () => {
    const nodesWithNoTarget = nodes.filter(
      (node) => !edges.some((edge) => edge.source === node.id)
    );

    if (nodesWithNoTarget.length > 2) {
      alert('Error: More than one node without a target handle.');
    } else {
      alert('Flow saved successfully!');
    }
  };

  // Handle back action from settings panel
  const handleBack = () => {
    setShowSettingsPanel(false);
    setSelectedNode(null);
  };

  return (
    <div className="app-container">
      <div className="navbar">
        <button className="save-button" onClick={handleSave}>Save Changes</button>
      </div>
      <div className="main-content">
        <div className="reactflow-wrapper" onDrop={handleDrop} onDragOver={handleDragOver}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            fitView
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
          >
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </div>
        {showSettingsPanel && selectedNode ? (
          <SettingsPanel selectedNode={selectedNode} onTextChange={onTextChange} onBack={handleBack} />
        ) : (
          <NodesPanel />
        )}
      </div>
    </div>
  );
};

export default App;
