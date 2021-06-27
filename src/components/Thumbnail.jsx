import React from "react";
import PropTypes from "prop-types";

import "../css/Thumbnail.css";

class Thumbnail extends React.Component {
  render() {
    return (
      <article className="thumbnail">
        <img src="" alt="" />
        <h2 className="thumbnail__title">{this.props.title}</h2>
      </article>
    );
  }
}

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Thumbnail;
