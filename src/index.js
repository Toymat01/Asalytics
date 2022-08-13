import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {theme } from './Styles'
import { ThemeProvider } from '@mui/material';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient ({
  uri:'https://analytics-api.herokuapp.com/analytics',
  cache: new InMemoryCache()
})
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);

