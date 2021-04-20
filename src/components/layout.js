import React, { Component } from "react";
import HtmlHead from "./htmlHead";
import { Link } from "gatsby";
import Particles from "react-tsparticles";
import particlesConfig from '../../static/particles.json'

class Layout extends Component {
  render() {
    const { children } = this.props;
     return (
      <div className="[ overflow-hidden font-body font-light ]">
        <HtmlHead />
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/faq">Frequently Asked Questions</Link>
          </nav>
        </header>

        <main className="[ pt-16 pb-20 ]">
          {children}
        </main>

        <Particles options={particlesConfig} />

      </div>
    )
  }
}

export default Layout;
