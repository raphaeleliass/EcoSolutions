import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [MenuOpen, isMenuOpen] = useState(false);

  const toggleMenu = () => {
    isMenuOpen(!MenuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header className="flex items-center justify-center bg-red-50">
      <div className="flex w-full max-w-xs justify-between py-4 md:max-w-3xl lg:max-w-5xl">
        <a
          href="#"
          className="flex flex-row text-2xl font-black md:text-5xl lg:text-4xl"
        >
          <h2 className="text-green-500 ">Eco</h2>
          <h2 className="text-neutral-700">Solutions</h2>
        </a>
        <nav className={`navbar ${MenuOpen ? "active" : ""}`}>
          <ul className="flex flex-col items-end gap-6 lg:flex-row lg:gap-x-1">
            <li className="lg:hodden absolute right-6 top-6 block">
              <button className="p-2 lg:hidden" onClick={toggleMenu}>
                <IoMdClose className="size-6 md:size-12" />
              </button>
            </li>
            <li className="hidden lg:flex">
              <a href="#" className="nav-links">
                Home
              </a>
            </li>
            <li className="flex lg:hidden" onClick={toggleMenu}>
              <a href="#" className="nav-links">
                Home
              </a>
            </li>
            <li className="hidden lg:flex">
              <a href="#" className="nav-links">
                Sobre
              </a>
            </li>
            <li className="flex lg:hidden" onClick={toggleMenu}>
              <a href="#" className="nav-links">
                Sobre
              </a>
            </li>
            <li className="hidden lg:flex">
              <a href="#" className="nav-links">
                Serviços
              </a>
            </li>
            <li className="flex lg:hidden" onClick={toggleMenu}>
              <a href="#" className="nav-links">
                Serviços
              </a>
            </li>
            <li className="hidden lg:flex">
              <a href="#" className="nav-links">
                Contato
              </a>
            </li>
            <li className="flex lg:hidden" onClick={toggleMenu}>
              <a href="#" className="nav-links">
                Contato
              </a>
            </li>
            <li className="hidden lg:flex">
              <button className="">
                <a href="#" className="primary-button">
                  Consultoria
                </a>
              </button>
            </li>
            <li className="flex lg:hidden" onClick={toggleMenu}>
              <button className="">
                <a href="#" className="primary-button">
                  Consultoria
                </a>
              </button>
            </li>
          </ul>
        </nav>
        <button className="p-2 lg:hidden" onClick={toggleMenu}>
          <ImMenu className="size-6 md:size-8" />
        </button>
      </div>
      {MenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-lg"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

export default Header;
