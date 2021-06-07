import React from "react";

import Banner from "./Banner";
import Header from "./Header";
import "../css/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Banner />
      </div>
    );
  }
}

export default App;
