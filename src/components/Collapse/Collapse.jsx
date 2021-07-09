import React from "react";

import "./Collapse.css";

class Collapse extends React.Component {
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </section>
    );
  }
}

export default Collapse;
