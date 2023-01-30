import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AuthProvider from "./context/AuthContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Header />
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
