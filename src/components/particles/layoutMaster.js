import React, { useState, useRef, useEffect } from "react";
import debounce from 'lodash/debounce';
import Particles from "react-tsparticles";

import particlesConfig from '../../../static/particles.json';

import HtmlHead from "./htmlHead";

import Header from '../organisms/header';
import Footer from '../organisms/footer';


const LayoutMaster = ({ props, children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const toggleMenu = useRef(null);

  useEffect(() => {
    if (toggleMenu.current) {
      toggleMenu.current = null;
    }

    toggleMenu.current = e => {
      const isEscKeyEvent = e?.key && e.key === 'Escape';
      const isMenuOpen = isNavOpen;

      setIsNavOpen(isEscKeyEvent ? false : !isMenuOpen)

      // Give body overflow-hidden
      document.body.setAttribute('data-nav-open', `${!isMenuOpen}`);
    }

    const clickHandler = e => {
      setIsTab(false);

      if (
        e.target.hasAttribute('data-main-nav-link') &&
        e.target.classList.contains('active') &&
        isNavOpen &&
        toggleMenu.current) {
        toggleMenu.current(e)
      }
    };

    const keydownHandler = e => {
      e.key === 'Tab' && setIsTab(true);

      if (e.key === 'Escape' && isNavOpen && toggleMenu.current) {
        toggleMenu.current(e);
      }
    };

    const resizeHandler = debounce(e => {
      if (isNavOpen && toggleMenu.current) {
        toggleMenu.current(e)
      }
    }, 100);

    document.body.setAttribute('data-nav-open', `${isNavOpen}`);

    window.addEventListener('keydown', keydownHandler);
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('keydown', keydownHandler);
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('click', clickHandler);
    }
  }, [isNavOpen, toggleMenu, isTab])

  return (
    <div className={`
      [ overflow-hidden font-body font-light ] 
      ${isNavOpen ? 'is-nav-open' : ''}
      ${isTab ? 'is-tab' : ''}
      `}>

      <HtmlHead seo={props?.pageContext?.seo}/>

      <Header
        isNavOpen={isNavOpen}
        clickHandler={toggleMenu}/>

      <main className="[ pt-16 pb-20 sm:pt-18 md:pt-22 ]">
        {children}

        <section aria-hidden="true">
          <Particles options={particlesConfig}/>
        </section>
      </main>

      <Footer/>
    </div>
  )
};

export default LayoutMaster;
