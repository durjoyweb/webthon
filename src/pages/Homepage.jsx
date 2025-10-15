import React from "react";

import LowerNav from "../component/LowerNav";
import { Hero } from "../component/Hero";
import { HeroFirst } from "../component/HeroFirst";

import { HeroThree } from "../component/HeroThree";
import HomeFour from "../component/HomeFourth";
import HomeFourth from "../component/HomeFourth";
import HomeFive from "../component/HomeFive";
import HomeSix from "../component/HomeSix";
import HomeSeven from "../component/HomeSeven";
import HomeNine from "../component/HomeEight";
import LowerFooter from "../component/LowerFooter";
import SocialCard from "../component/SocialCard";
import SocialHub from "../component/SocalHub";
import HomeEight from "../component/HomeEight";
import GroupsSection from "../component/GroupsSection";
import Footer from "../component/Footer";
import StatesSection from "../component/StatesSection";

export default function Homepage() {
  const images = [
    "https://www.mygov.in/sites/all/themes/mygov/images/newletter-collage.png",
    "https://www.mygov.in/sites/all/themes/mygov/images/yuvaam-card.png",
    "https://www.mygov.in/sites/all/themes/mygov/images/bm.png",
    "/image/hero_4.jpg",
  ];

  return (
    <div>
      <LowerNav />

      <Hero />
      <HeroFirst />

      <HeroThree />
      <HomeFourth />
      <HomeFive />
      <HomeSix />
      <HomeSeven />
      <HomeEight />
      <StatesSection />
      <GroupsSection />
      <SocialHub />
      <Footer />
      <LowerFooter />
    </div>
  );
}
