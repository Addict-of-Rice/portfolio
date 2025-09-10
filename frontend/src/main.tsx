import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { styleSheet } from './css.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <style dangerouslySetInnerHTML={{ __html: styleSheet() }} />
    <App />
  </StrictMode>
);
