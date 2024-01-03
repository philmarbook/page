// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './router/App';
import './assets/scss/index.scss'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
