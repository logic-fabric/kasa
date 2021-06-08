import React from "react";

import "../css/Thumbnail.css";

class Thumbnail extends React.Component {
  render() {
    return (
      <article className="thumbnail">
        <img src="" alt="" />
        <h2 className="thumbnail__title">Titre de la location</h2>
      </article>
    );
  }
}

export default Thumbnail;
