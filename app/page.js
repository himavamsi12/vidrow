import Hero from "./components/Hero";
import HeroCurtain from "./components/HeroCurtain";
import FeaturedWork from "./components/FeaturedWork";
import FeaturedWorkMobile from "./components/FeaturedWorkMobile";
import WhereYouAreNow from "./components/WhereYouAreNow";
import Levers from "./components/Levers";
import SelectedWork from "./components/SelectedWork";
import CaseStudies from "./components/CaseStudies";
import Founders from "./components/Founders";
import Partnership from "./components/Partnership";
import News from "./components/News";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCurtain />
      {/* two Featured Work layouts share the one anchor: the stacked cards on
          desktop, the original expanding rows on mobile (swapped in CSS) */}
      <div id="featured">
        <FeaturedWork />
        <FeaturedWorkMobile />
      </div>
      <WhereYouAreNow />
      <Levers />
      <SelectedWork />
      <Founders />
      <Partnership />
      <CaseStudies />
      <News />
      <Footer />
    </>
  );
}
