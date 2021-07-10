import React from "react";

import "./Advertisement.css";

class Advertisement extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const advertisementsList = this.props.advertisementsList;

    console.log("advertisementsList =", advertisementsList);

    const advertisementsToDisplay = this.props.advertisementsList.findById(id);

    console.log("advertismentToDisplay =", advertisementsToDisplay);

    return (
      <main className="Advertisement">
        <h1>Hello location {id} !</h1>
      </main>
    );
  }
}

export default Advertisement;
