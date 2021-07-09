import React from "react";
import PropTypes from "prop-types";

import "./Collapse.css";

class Collapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
    this.updateIsOpen = this.updateIsOpen.bind(this);
  }

  updateIsOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <section className="collapse">
        <h2
          className="collapse__title"
          onClick={() => {
            this.updateIsOpen();
            console.log("toggled to", this.state);
          }}
        >
          <span>{this.props.title}</span>
          <i
            className={`fas fa-chevron-${this.state.isOpen ? "up" : "down"}`}
          ></i>
        </h2>
        <p
          className={`collapse__text ${
            this.state.isOpen ? "is-open" : "is-close"
          }`}
        >
          {this.props.text}
        </p>
      </section>
    );
  }
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Collapse;
