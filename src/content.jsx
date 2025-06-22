import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const mountNode = document.createElement('div');
mountNode.id = 'my-extension-root';
document.body.appendChild(mountNode);

const root = createRoot(mountNode);
root.render(<App />);