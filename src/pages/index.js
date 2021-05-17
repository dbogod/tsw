import React from "react";
import LayoutMaster from "../components/particles/layoutMaster";
import Hero from '../components/homepage/hero';
import HomepageSections from '../components/homepage/homepageSections';

export default function Home() {
  return (
    <LayoutMaster>
      <Hero/>
      <HomepageSections/>
    </LayoutMaster>
  )
};