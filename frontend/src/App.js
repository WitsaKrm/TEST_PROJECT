import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./services/Routes/routes.service";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../frontend/src/App.css'

function App() {
  return (
    <HelmetProvider>
      <div className="bg">
      <div className="container" >
      <Helmet>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <Router>
        <Routes />
      </Router>
    </div>
      </div>
    
    </HelmetProvider>
  );
}

export default App;
