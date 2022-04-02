import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <h1>Hey, I'm Vaibhav Kadwey</h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum
          quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum,
          voluptas natus?
        </p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum
          quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum,
          voluptas natus?
        </p>
      </div>
      <div className="home__right">
        <img
          src="https://st3.depositphotos.com/3382541/13326/v/600/depositphotos_133260890-stock-illustration-programmer-sitting-on-big-laptop.jpg"
          alt="logo_img"
        />
      </div>
    </div>
  );
}

export default Home;
