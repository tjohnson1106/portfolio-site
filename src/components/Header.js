import React, { PureComponent } from "react";

import Footer from "./Footer";
import avatar from "../assets/images/avatar.jpg";

class Header extends PureComponent {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="https://github.com/tjohnson1106" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1
            style={{
              color: "#FFFEEE"
            }}
          >
            <strong>Thomas Johnson </strong>
            <br />
            Full-stack web and mobile developer
            <br />
            with a strong concentration in React Native and React. Elixir
            enthusiast.
            <br />
            Based in New York City.
          </h1>
        </div>
        <Footer />
      </header>
    );
  }
}

export default Header;
