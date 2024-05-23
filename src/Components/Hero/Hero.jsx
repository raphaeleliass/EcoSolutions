import { ImLeaf } from "react-icons/im";
import InputComponent from "../InputComponent/InputComponent";

function Hero() {
  return (
    <section className="mx-auto flex w-full flex-col gap-4 pt-8  md:flex-row md:pt-12 ">
      <div className="h-[300px] flex-col content-center items-center justify-center rounded-2xl bg-Hero_Leaf bg-cover bg-center text-center text-3xl font-black uppercase text-white md:static md:flex md:h-auto md:w-1/2 md:rounded-r-full md:text-4xl lg:text-6xl">
        <h2 className="md:w-1/2">seja o futuro.</h2>
        <div className="flex items-center justify-center text-xl font-black lowercase text-green-400">
          eco
          <h2 className="capitalize text-white">Solutions</h2>
          <ImLeaf />
        </div>
      </div>
      <div className=" mx-auto ml-auto flex max-w-xs flex-col justify-center gap-2 rounded-2xl p-2 md:mr-12 md:w-1/2 md:max-w-max  lg:mr-32">
        <h1 className=" py-4 text-center font-Inter text-3xl font-bold text-black md:text-left md:text-4xl lg:text-6xl">
          Transforme sua empresa em uma referência em sustentabilidade.
        </h1>
        <form
          className="flex flex-col items-center gap-6 rounded-2xl border bg-gradient-to-t from-green-800 to-green-400 p-6 shadow-xl md:bg-white md:p-8 lg:p-8"
          action=""
        >
          <h2 className="font-Inter text-lg font-black text-white md:text-xl">
            Entre em contato conosco!
          </h2>
          <div className="flex flex-col gap-2">
            <InputComponent
              placeholder={"Digite seu nome"}
              inputType={"text"}
            />
            <InputComponent
              placeholder={"Digite seu e-mail"}
              inputType={"text"}
            />
          </div>
          <button
            className="m-auto rounded-full bg-gradient-to-r from-green-400 to-green-500 px-6 py-2 font-semibold text-white"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
