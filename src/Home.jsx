import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Sobre from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testmonials";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";

function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Hero />
      <Sobre />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
