/**
 * FILE: src/main.jsx
 * WHAT IT DOES
 *   The starting point. Loads the fonts and all the CSS, then draws <App /> into index.html.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/playfair-display/latin-500.css';
import '@fontsource/playfair-display/latin-600.css';
import App from './App';
import './styles/tokens.css';
import './styles/base.css';
import './styles/bento.css';
import './styles/ui.css';
import './styles/sections.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
