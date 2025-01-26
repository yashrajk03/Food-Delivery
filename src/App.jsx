import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Header from "./components/header";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Login/>
    </Router>
  );
}

export default App;
