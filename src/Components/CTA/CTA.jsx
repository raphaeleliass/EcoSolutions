import { ImLeaf } from "react-icons/im";
import InputComponent from "../InputComponent/InputComponent";

function CTA() {
  return (
    <section className="mx-auto mt-32 flex w-full max-w-xs flex-col items-center justify-center rounded-2xl bg-gradient-to-t from-green-700 to-green-400 shadow-xl md:h-[500px] md:max-w-3xl md:flex-row lg:h-[500px] lg:max-w-5xl">
      <div className="bg-CTA_SolarPanel flex h-[400px] flex-col justify-center gap-2 rounded-t-2xl bg-red-400 bg-cover bg-center p-6 md:h-full md:rounded-l-2xl md:rounded-t-none">
        <h2 className="text-center text-5xl font-black text-white md:text-6xl lg:text-7xl">
          o futuro agora.
        </h2>
        <div className="flex items-center justify-center text-xl font-black lowercase text-green-400">
          eco
          <h2 className="capitalize text-white">Solutions</h2>
          <ImLeaf />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 p-12 md:h-full md:w-1/2 md:p-12">
        <h2 className="text-center text-4xl font-black text-white md:text-left md:text-5xl lg:text-6xl">
          Agende sua consultoria hoje
        </h2>
        <p className="text-center font-Inter text-sm font-light text-white">
          Agende sua consultoria e dê um passo para o futuro!
        </p>
        <form className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-2">
            <InputComponent inputType="text" placeholder={"Digite seu nome"} />
            <InputComponent inputType="text" placeholder={"Digite seu email"} />
          </div>
          <button className="rounded-full bg-green-400 px-4 py-1 font-bold text-white">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default CTA;
