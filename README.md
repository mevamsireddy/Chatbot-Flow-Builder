# Chatbot Flow Builder

A web application for visually designing chatbot conversation flows. This project uses React and React Flow to create an interactive UI for building and managing chatbot nodes and edges.

## Features
- Drag-and-Drop Interface: Easily drag and drop nodes to create conversation flows.
- Custom Nodes: Implement custom node types with specific icons and styles.
- Editable Node Text: Modify the text of nodes via a settings panel.
- Save Functionality: Save the designed flow with validation to ensure no multiple nodes without targets.
- Custom Edges: Connect nodes with custom edges that include arrows indicating direction.

## Directory Structure
```
chatbot-flow-builder/
├── src/
│   ├── components/
│   │   ├── CustomEdge.js
│   │   ├── CustomNode.js
│   │   ├── NodesPanel.css
│   │   ├── SettingsPanel.css
│   │   ├── NodesPanel.js
│   │   ├── SettingsPanel.js
│   ├── constants/
│   │   ├── index.js
│   ├── App.js
│   ├── ErrorBoundary.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
├── package.json
```

## Installation
Clone the repository:
git clone [ github ](https://github.com/mevamsireddy/Chatbot-Flow-Builder.git)

Navigate to the project directory:

`cd chatbot-flow-builder`

Install the dependencies:

`npm install`

Running the Application
Start the development server:

`npm start`

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Components

*`CustomNode.js`*
Defines the custom node component with specific styles and icons.

*`CustomEdge.js`*
Defines the custom edge component that renders edges with arrows.

*`NodesPanel.js`*
A panel on the left side of the screen allowing users to drag and drop new nodes into the flow.

*`SettingsPanel.js`*
A panel that appears when a node is selected, allowing the user to edit the node's text.

*`ErrorBoundary.js`*
A component to catch and display errors in the UI.

## Styles

- `App.css`: Contains styles for the overall layout.
- `NodesPanel.css:` Styles for the NodesPanel component.
- `SettingsPanel.css`: Styles for the SettingsPanel component.
- `CustomNode.css`: Styles for the custom node component.
- `index.css`: Global styles for the application.

# Future Enhancements

- *Export/Import Functionality:* Allow users to export the flow to a file and import it back.
- *Multiple Node Types:* Implement additional types of nodes for different chatbot functionalities.
- *More Customizations:* Allow users to customize more aspects of nodes and edges.