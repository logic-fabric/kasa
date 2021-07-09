import React from "react";
import PropTypes from "prop-types";

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

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Collapse;
