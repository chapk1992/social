import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
  <Header />
  <Container />
  <NavBar />
    </div>
  );
}

export default App;
