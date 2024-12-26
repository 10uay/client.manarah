import Portfolio_Hero from "./components/Portfolio_Hero";
import First_Slider from "./components/First_Slider";
import Portfolio_Section from "./components/Portfolio_Section";
import "./components/Portfolio_Hero.css";
import Second_Slider from "./components/Second_Slider";
import Technologies from "./components/Technologies";
import Portfolio_Get_A_Service from "./components/Portfolio_Get_A_Service";

export default function Work({ info, domain }) {
  return (
    <div className="space-y-11 lg:space-y-20 lg:mt-20 mt-14">
      <Portfolio_Hero info={info} domain={domain} />
      <First_Slider info={info} domain={domain} />
      <Portfolio_Section info={info} domain={domain} />
      <Second_Slider info={info} domain={domain} />
      <Technologies info={info} domain={domain} />
      <Portfolio_Get_A_Service domain={domain} />
    </div>
  );
}
