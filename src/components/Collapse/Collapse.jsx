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
      <section
        className={`collapse${this.state.isOpen ? " is-open" : " is-close"}`}
      >
        <h2 className="collapse__title" onClick={this.updateIsOpen}>
          <span>{this.props.title}</span>
          <i
            className={`fas fa-chevron-${this.state.isOpen ? "up" : "down"}`}
          ></i>
        </h2>

        {typeof this.props.text === "string" ? (
          <p
            className={`collapse__text${
              this.state.isOpen ? " is-open" : " is-close"
            }`}
          >
            {this.props.text}
          </p>
        ) : (
          <ul
            className={`collapse__text${
              this.state.isOpen ? " is-open" : " is-close"
            }`}
          >
            {this.props.text.map((item, index) => (
              <li key={`item-${index}`}>{item}</li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Collapse;
