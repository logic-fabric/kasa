import React from "react";

import { SAMPLE_DATA } from "../data/sample-data.js";
import Thumbnail from "./Thumbnail";
import "../css/Gallery.css";

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <ul>
          {SAMPLE_DATA.map(({ id, title }) => (
            <Thumbnail key={`thumbnail-${id}`} title={title} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Gallery;
