import React, { Component } from "react";
import Photo from "./components/Photo";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <div className="card-container">
        <Photo />
        <Middle />
        <Footer />
      </div>
    );
  }
}

export default App;
