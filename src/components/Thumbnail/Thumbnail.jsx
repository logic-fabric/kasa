import React from "react";
import PropTypes from "prop-types";

import "./Thumbnail.css";

class Thumbnail extends React.Component {
  render() {
    return (
      <article className="thumbnail">
        <img
          className="thumbnail__cover"
          src={this.props.cover}
          alt={`Une location située en ${this.props.location}`}
        />
        <div className="thumbnail__filter"></div>
        <h2 className="thumbnail__title">{this.props.title}</h2>
      </article>
    );
  }
}

Thumbnail.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
};

export default Thumbnail;
