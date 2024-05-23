import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Sobre from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testmonials";

function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Hero />
      <Sobre />
      <Services />
      <Testimonials />
    </div>
  );
}

export default Home;
