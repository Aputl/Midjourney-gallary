import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Router } from 'react-router-dom'

const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.hygraph.com/v2/cl6j0kl4m50o501uqd1uye125/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>
)
