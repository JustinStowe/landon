import React from "react";
import "./App.css";
import { Header, Main, Footer } from "./components";
import { ProvideController } from "./context/useController";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ProvideController>
          <Header />
          <Main />
          <Footer />
        </ProvideController>
      </div>
    );
  }
}

export default App;
