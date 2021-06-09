import React from "react";

import Banner from "./Banner";
import Footer from "./Footer";
import Gallery from "./Gallery.js";
import Header from "./Header";
import "../css/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Banner />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
