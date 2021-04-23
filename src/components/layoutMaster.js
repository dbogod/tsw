import React, { Component } from "react";
import HtmlHead from "./htmlHead";
import Header from './header';
import Footer from './footer';
import Particles from "react-tsparticles";
import particlesConfig from '../../static/particles.json'

class LayoutMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isTab: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  componentDidMount() {
    window.addEventListener('keydown', e => {
     if (e.key === 'Tab') {
       this.setState({
         isTab: true
       })
     }
    })

    window.addEventListener('click', () => {
      this.setState({
        isTab: false
      })
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div className={`
      [ overflow-hidden font-body font-light ] 
      ${this.state.isNavOpen ? 'is-nav-open' : ''}
      ${this.state.isTab ? 'is-tab' : ''}
      `}>

        <HtmlHead/>

        <Header clickHandler={this.toggleMenu}/>

        <main className="[ pt-18 pb-20 lg:pt-24 ]">
          {children}

          <section aria-hidden="true">
            <Particles options={particlesConfig}/>
          </section>
        </main>

        <Footer />
      </div>
    )
  }
}

export default LayoutMaster;
