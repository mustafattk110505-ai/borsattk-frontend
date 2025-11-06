import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-md flex justify-between items-center rounded-2xl mb-4">
      <h1 className="text-2xl font-bold text-blue-400">💹 Borsattk</h1>
      <nav className="space-x-4">
        <button className="hover:text-blue-400">Kripto</button>
        <button className="hover:text-blue-400">Forex</button>
        <button className="hover:text-blue-400">Haberler</button>
      </nav>
    </header>
  );
};

export default Header;
