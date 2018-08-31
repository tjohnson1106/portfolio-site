import React, { PureComponent } from "react";

class Footer extends PureComponent {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/MediaBrackets"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tjohnson1106"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bracketfactory/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="tjohnson1106@gmail.com" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
