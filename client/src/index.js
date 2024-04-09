import React from 'react';
import ReactDOM from 'react-dom/client'; // Update the import statement
import App from './App';
import EmotionProvider from './emotion';
import styled from '@emotion/styled';

ReactDOM.createRoot(document.getElementById('root')).render( // Use createRoot
  <React.StrictMode>
    <EmotionProvider>
      <App />
    </EmotionProvider>
  </React.StrictMode>
);
