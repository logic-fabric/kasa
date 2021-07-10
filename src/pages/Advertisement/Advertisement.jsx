import React from "react";

import Error404 from "../Error404/Error404";
import Collapse from "../../components/Collapse/Collapse";
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

    const ad = advertisementToDisplay;

    return (
      <main className="Advertisement">
        <div>[ CAROUSEL - COMING SOON ]</div>
        <section>
          <div>
            <h1>{ad.title} !</h1>
            <h2>{ad.location}</h2>
            <div>[ TAGS - COMING SOON ]</div>
          </div>
          <div>
            <p>{ad.host.name}</p>
            <img src={ad.host.picture} alt={ad.host.name} />
            <div>[ RATING - COMING SOON ]</div>
          </div>
          <div className="Advertisement__collapses-box">
            <div className="Advertisement__collapse">
              <Collapse title="Description" text={ad.description} />
            </div>

            <div className="Advertisement__collapse">
              <Collapse
                title="Êquipements"
                text={`${ad.equipments.join(", ")}`}
              />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Advertisement;
