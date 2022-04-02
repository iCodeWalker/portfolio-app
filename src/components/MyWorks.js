import React from "react";
import Card from "./Card";
import "./MyWorks.css";

function MyWorks() {
  return (
    <div className="myworks">
      <h1>Apps I've Build</h1>
      <div className="myworks__container">
        <div className="myworks__row">
          <Card
            title="1st project"
            description="Hey here i'm with my 1st project so you all can have a look at it"
            name="Netflix Clone"
            bgImage="../../public/images/netflix-project.png"
          />
          <Card
            title="2nd project"
            description="Hey here i'm with my 2nd project so you all can have a look at it"
            name="Amazon Clone"
          />
        </div>
        <div className="myworks__row">
          <Card
            title="3rd project"
            description="Hey here i'm with my 3rd project so you all can have a look at it"
            name="Spotify Clone"
          />
          <Card
            title="4th project"
            description="Hey here i'm with my 4th  project so you all can have a look at it"
            name="LinkedIn Clone"
          />
        </div>
        <div className="myworks__row">
          <Card
            title="5th project"
            description="Hey here i'm with my 5th project so you all can have a look at it"
            name="Uber Clone"
          />
          <Card
            title="6th project"
            description="Hey here i'm with my 6th project so you all can have a look at it"
            name="Uber Eats Clone"
          />
        </div>
        <h2 className="myworks__moreprojects">More...</h2>
      </div>
    </div>
  );
}

export default MyWorks;
