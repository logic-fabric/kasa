import React from "react";

import "./Advertisement.css";

class Advertisement extends React.Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <main className="Advertisement">
        <h1>Hello location {id} !</h1>
      </main>
    );
  }
}

export default Advertisement;
