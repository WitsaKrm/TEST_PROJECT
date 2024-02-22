import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./services/Routes/routes.service";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
    <div className="container">
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
    </HelmetProvider>
  );
}

export default App;
