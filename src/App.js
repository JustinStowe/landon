import React from "react";
import "./App.css";
import { Header, Main, Footer } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
