import React from "react";

import Thumbnail from "./Thumbnail";
import "../css/Gallery.css";

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <ul>
          {this.props.advertisements.map(({ id, title }) => (
            <Thumbnail key={`thumbnail-${id}`} title={title} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Gallery;
