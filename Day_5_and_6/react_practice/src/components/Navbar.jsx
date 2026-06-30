import { Search } from "lucide-react";

const links = ["Home", "Product", "Service", "About", "Contact"];

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-8 ">
      <h1 className="text-3xl font-light tracking-[0.4rem] uppercase">
        Porsche
      </h1>

      <nav className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm font-light tracking-wide transition-colors duration-300 hover:text-gray-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <form className="flex items-center w-full rounded-md bg-white pe-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent px-2 py-1 text-black outline-none placeholder:text-gray-500"
          />
          <button type="submit">
            <Search className="h-5 w-5 text-gray-600 cursor-pointer" />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Navbar;
