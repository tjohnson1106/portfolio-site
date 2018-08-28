import React, { PureComponent } from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends PureComponent {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Thomas Johnson</strong>, full-stack web
            <br />
            and mobile developer
            <br />
            based in New York City <a href="http://html5up.net">HTML5 UP</a>.
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
