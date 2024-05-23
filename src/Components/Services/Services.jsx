import { FaRecycle, FaTree, FaUserGroup } from "react-icons/fa6";
import ServicesCards from "./ServicesCards";

function Services() {
  return (
    <section className="mx-auto mt-32 flex w-full max-w-xs flex-col justify-center gap-12 md:max-w-3xl md:flex-row md:gap-2 lg:max-w-5xl lg:gap-12">
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-tr from-green-400 to-green-700 pt-12 text-white shadow-xl">
        <FaTree className="size-12 text-white" />
        <ServicesCards
          title="Auditoria Ambiental"
          text="Avalie e melhore o impacto ambiental da sua empresa com nossas auditorias detalhadas, identificando áreas de melhoria para um futuro mais verde."
        />
      </div>
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-tr from-green-400 to-green-700 pt-12 text-white shadow-xl">
        <FaUserGroup className="size-12 text-white" />
        <ServicesCards
          title="Treinamento em Equipe"
          text="Capacite sua equipe com treinamentos personalizados, promovendo a conscientização e práticas sustentáveis no dia a dia empresarial."
        />
      </div>
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-tr from-green-400 to-green-700 pt-12 text-white shadow-xl">
        <FaRecycle className="size-12 text-white" />
        <ServicesCards
          title="Práticas Sustentáveis"
          text="Transforme sua operação com a implementação de práticas sustentáveis, garantindo eficiência, economia e responsabilidade ambiental."
        />
      </div>
    </section>
  );
}

export default Services;
