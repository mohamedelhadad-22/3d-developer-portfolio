import { useState } from "react";
import { motion } from "motion/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex item-center justify-between py-2">
          <a className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
            My Portfolio
          </a>
          <button
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img
              src={isMenuOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt=""
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isMenuOpen ? (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100dvh" }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, x: -10 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      ) : null}
    </div>
  );
}

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="" className="nav-link">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a href="" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
