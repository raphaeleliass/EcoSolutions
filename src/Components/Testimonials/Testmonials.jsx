import { FaQuoteLeft } from "react-icons/fa6";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="mx-auto mt-32 max-w-xs md:max-w-3xl lg:max-w-5xl ">
      <div className="flex pb-6 justify-center">
        <h2 className="text-4xl ">Depoimentos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <FaQuoteLeft className="absolute -ml-2 mt-4 size-8" />
        <TestimonialCard
          textCard="A consultoria foi essencial para nos tornarmos uma empresa mais sustentável. A equipe é incrível e as soluções oferecidas realmente fizeram a diferença."
          imgCard="https://images.pexels.com/photos/20229631/pexels-photo-20229631/free-photo-of-homem-oculos-escuros-oculos-de-sol-modelo.jpeg?auto=compress&cs=tinysrgb&w=600"
          clientName="João S."
          clientOccupation="CEO de EcoFashion"
        />
        <TestimonialCard
          textCard="A consultoria foi essencial para nos tornarmos uma empresa mais sustentável. A equipe é incrível e as soluções oferecidas realmente fizeram a diferença."
          imgCard="https://images.pexels.com/photos/20144196/pexels-photo-20144196/free-photo-of-oculos-escuros-oculos-de-sol-mulher-modelo.jpeg?auto=compress&cs=tinysrgb&w=600"
          clientName="Marília E."
          clientOccupation="Diretora da NaturaPlus"
        />
        <TestimonialCard
          textCard="A consultoria foi essencial para nos tornarmos uma empresa mais sustentável. A equipe é incrível e as soluções oferecidas realmente fizeram a diferença."
          imgCard="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=600"
          clientName="Marcos B."
          clientOccupation="Fundador da AgroVerde"
        />
        <TestimonialCard
          textCard="A consultoria foi essencial para nos tornarmos uma empresa mais sustentável. A equipe é incrível e as soluções oferecidas realmente fizeram a diferença."
          imgCard="https://images.pexels.com/photos/20272960/pexels-photo-20272960/free-photo-of-mulher-modelo-retrato-cabelo-longo.jpeg?auto=compress&cs=tinysrgb&w=600"
          clientName="Ana S."
          clientOccupation="CEO da CleanEnergy"
        />
      </div>
    </section>
  );
}

export default Testimonials;
