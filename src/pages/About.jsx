import React from "react";

import Banner from "../components/Banner";
import "../css/About.css";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Banner imgSource="../assets/mountain-landscape.png" title="" />
      </div>
    );
  }
}

export default About;
