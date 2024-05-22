import { useState } from "react";
import { ImLeaf, ImMenu3 } from "react-icons/im";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [MenuOpen, isMenuOpen] = useState(false);

  const toggleMenu = () => {
    isMenuOpen(!MenuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header className="sticky inset-0 flex items-center justify-center lg:static">
      <div className="flex w-full max-w-xs items-center justify-between py-4  md:max-w-3xl md:py-6 lg:max-w-5xl">
        <a
          href="#"
          className="flex flex-row items-center gap-1 text-2xl font-black md:text-4xl"
        >
          <div className="flex">
            <h2 className="text-green-500 ">eco</h2>
            <h2 className="text-neutral-700">Solutions</h2>
          </div>
          <ImLeaf className="size-4 text-green-500 md:size-6 lg:size-6" />
        </a>
        <nav className={`navbar ${MenuOpen ? "active" : ""}`}>
          <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-x-1">
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
          <ImMenu3 className="size-6 md:size-8" />
        </button>
      </div>
      {MenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-md"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

export default Header;
