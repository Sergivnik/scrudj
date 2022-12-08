import { useState } from "react";
import "./App.css";
import { Section1 } from "./myComponents/section1";
import { Section2 } from "./myComponents/section2";
import { Section3 } from "./myComponents/section3";

function App() {
  const [isSection1Visible, setIsSection1Visible] = useState(false);
  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const handleScroll = (e) => {
    let section1 = document.querySelector("#section1");
    let section2 = document.querySelector("#section2");
    let coords1 = section1.getBoundingClientRect();
    let coords2 = section2.getBoundingClientRect();
    let windowHeight = e.currentTarget.clientHeight;
    let topVisible1 = coords1.top > 0 && coords1.top < windowHeight;
    let topVisible2 = coords2.top > 0 && coords2.top < windowHeight;
    let bottomVisible1 = coords1.bottom < windowHeight && coords1.bottom > 0;
    let bottomVisible2 = coords2.bottom < windowHeight && coords2.bottom > 0;
    setIsSection1Visible(topVisible1 || bottomVisible1);
    setIsSection2Visible(topVisible2 || bottomVisible2);
  };
  return (
    <div className="App" onScroll={handleScroll}>
      <Section1 id="section1" isVisible={isSection1Visible} />
      <Section3 id="section3" isVisible={isSection2Visible} />
      <Section2 id="section2" isVisible={isSection2Visible} />
    </div>
  );
}

export default App;
