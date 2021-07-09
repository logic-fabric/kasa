import React from "react";

import Banner from "../../components/Banner/Banner";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Banner imgSource="../assets/mountain-landscape.png" />
      </div>
    );
  }
}

export default About;
