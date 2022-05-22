import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from "react";
// import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./Component/styles.css";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Routes from "./Component/routes";
import Header from "./Component/Header";
import firebase from "firebase/compat/app";
import firebaseConfig from './firebase/firebase.config';
require('firebase/auth');

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header />

          <Switch>
            {Routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

reportWebVitals();