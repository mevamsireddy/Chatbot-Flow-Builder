import React from 'react'; // Importing React library
import ReactDOM from 'react-dom'; // Importing ReactDOM for rendering
import './index.css'; // Importing CSS for styling
import App from './App'; // Importing main App component
import ErrorBoundary from './ErrorBoundary'; // Importing ErrorBoundary component

// Rendering the React app within the root element
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root') // Selecting root element in HTML
);
