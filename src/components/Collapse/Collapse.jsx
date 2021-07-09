import React from "react";

import "./Collapse.css";

class Collapse extends React.Component {
  render() {
    return (
      <section className="collapse">
        <h2 className="collapse__title">{this.props.title}</h2>
        <p className="collapse__text">{this.props.text}</p>
      </section>
    );
  }
}

export default Collapse;
