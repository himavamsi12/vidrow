import Hero from "./components/Hero";
import HeroCurtain from "./components/HeroCurtain";
import FeaturedWork from "./components/FeaturedWork";
import WhereYouAreNow from "./components/WhereYouAreNow";
import Levers from "./components/Levers";
import SelectedWork from "./components/SelectedWork";
import CaseStudies from "./components/CaseStudies";
// import Founders from "./components/Founders";
import Partnership from "./components/Partnership";
import News from "./components/News";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCurtain />
      <FeaturedWork />
      <WhereYouAreNow />
      <Levers />
      <SelectedWork />
      <CaseStudies />
      {/* founders section hidden for now — restore by uncommenting this and
          its import above, plus the "Founders" link in SiteNav.jsx */}
      {/* <Founders /> */}
      <Partnership />
      <News />
      <Footer />
    </>
  );
}
