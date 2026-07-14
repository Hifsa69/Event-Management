import Hero from "../../components/Hero/Hero";
import FeaturedEvents from "../../components/FeaturedEvents/FeaturedEvents";
import Highlights from "../../components/Highlights/Highlights";
import Newsletter from "../../components/Newsletter/Newsletter";
import PageTransition from "../../components/PageTransition/PageTransition";

function Home() {
  return (
    <PageTransition>
      <Hero />
      <FeaturedEvents />
      <Highlights />
      <Newsletter />
    </PageTransition>
  );
}

export default Home;