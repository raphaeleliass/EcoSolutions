import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { ImMail2, ImPhone } from "react-icons/im";

function Footer() {
  return (
    <footer className="mx-auto mt-32 flex w-full max-w-xs flex-col overflow-clip rounded-t-2xl md:max-w-3xl md:flex-row md:px-6 lg:max-w-5xl">
      <img
        className="hidden rotate-12 md:flex md:w-96 md:translate-y-44 lg:w-72 lg:translate-y-44"
        src="./mobile-preview.png"
        alt="imagem de um celular exibindo o site ecoSolutions"
      />
      <div className="flex flex-col items-center justify-center gap-8 md:mt-52 md:gap-10 md:pl-24 lg:gap-12">
        <h2 className="text-center text-2xl font-light md:text-3xl lg:text-5xl">
          Nos acompanhe nas redes!
        </h2>
        <div className="flex gap-1 lg:gap-4">
          <a href="" className="p-1 lg:p-0">
            <FaWhatsapp className="size-6 text-green-600 transition-all hover:text-green-400 hover:drop-shadow-xl md:size-6 lg:size-8" />
          </a>
          <a href="" className="p-1 lg:p-0">
            <FaFacebook className="size-6 text-green-600 transition-all hover:text-green-400 hover:drop-shadow-xl md:size-6 lg:size-8" />
          </a>
          <a href="" className="p-1 lg:p-0">
            <FaInstagram className="size-6 text-green-600 transition-all hover:text-green-400 hover:drop-shadow-xl md:size-6 lg:size-8" />
          </a>
          <a href="" className="p-1 lg:p-0">
            <FaTwitter className="size-6 text-green-600 transition-all hover:text-green-400 hover:drop-shadow-xl md:size-6 lg:size-8" />
          </a>
        </div>
        <div className="flex  flex-col gap-1 ">
          <a
            href="#"
            className="flex flex-row items-center gap-2 p-1 text-center text-sm font-light transition-all hover:text-green-500"
          >
            <ImPhone className="" />
            <p>(99) 99999-9999</p>
          </a>
          <a
            href="#"
            className="flex flex-row items-center gap-2 p-1 text-center text-sm font-light transition-all hover:text-green-500"
          >
            <ImMail2 className="" />
            <p>ecosolutions@contato.com</p>
          </a>
        </div>
        <div className="mt-auto">
          <p className="flex flex-row gap-1 text-sm">
            &copy; Criado e desenvolvido por{" "}
            <a
              href="https://raphaelelias.vercel.app"
              className="font-semibold transition-all hover:text-green-500"
            >
              Raphael Elias
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
