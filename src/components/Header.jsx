import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Borsattk</h1>
        <span className="status">🔵 Canlı Veri Aktif</span>
      </div>
      <div className="header-right">
        <nav>
          <a href="#">Kripto</a>
          <a href="#">Forex</a>
          <a href="#">Sinyaller</a>
          <a href="#">Haberler</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
