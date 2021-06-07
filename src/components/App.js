import React from "react";

import Header from "./Header";
import "../css/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
      </div>
    );
  }
}

export default App;
