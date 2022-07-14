import Background from "../Components/Background";
import Header from "../Components/Header";
import Features from "../Components/Home/Features";
import Hero from "../Components/Home/Hero";
import Qualities from "../Components/Home/Qualities";
import Work from "../Components/Home/Work";

import "../Styles/figures.scss";

function Home() {
  return (
    <>
      <div className="bg-dark position-relative overflow-hidden home">
        <Background section="home" />
        <Header dark />
        <Hero />
      </div>
      <Qualities />
      <Features />
      <Work />
    </>
  );
}

export default Home;
