import React, { useState, useEffect } from "react";
import { Navigationnew} from "./components/navigationnew";
import { Music } from "./components/music";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Submit } from "./components/submit";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigationnew />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Music data={landingPageData.Music} />
      <Gallery data={landingPageData.Gallery} />
      
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
/**
 * <Team data={landingPageData.Team} />
 */