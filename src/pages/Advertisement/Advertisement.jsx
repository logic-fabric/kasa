import React from "react";

import Error404 from "../Error404/Error404";
import "./Advertisement.css";

class Advertisement extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const advertisementsList = this.props.advertisementsList;

    console.log("advertisementsList =", advertisementsList);

    const advertisementToDisplay = this.props.advertisementsList.findById(id);

    console.log("advertisementToDisplay =", advertisementToDisplay);

    if (!advertisementToDisplay) {
      return <Error404 />;
    }

    return (
      <main className="Advertisement">
        <h1>Hello location {id} !</h1>
      </main>
    );
  }
}

export default Advertisement;
