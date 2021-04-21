import React, { Component } from "react";
import HtmlHead from "./htmlHead";
import Header from './header';
import Particles from "react-tsparticles";
import particlesConfig from '../../static/particles.json'

class LayoutMaster extends Component {
  render() {
    const { children } = this.props;
     return (
      <div className="[ overflow-hidden font-body font-light ]">
        <HtmlHead />
        <Header />

        <main className="[ pt-16 pb-20 ]">
          {children}

          <section aria-hidden="true">
            <Particles options={particlesConfig} />
          </section>
        </main>
      </div>
    )
  }
}

export default LayoutMaster;
