import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './global';

import App from './App';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
