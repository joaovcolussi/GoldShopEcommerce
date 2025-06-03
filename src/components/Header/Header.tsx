import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="cabecalho">
      <div className="cabecalho__container">
        <div className="cabecalho__logo">
          <Link to="/" className="cabecalho__logo-link">
            GOLD SHOP
          </Link>
        </div>
        
        <button 
          className="cabecalho__menu-botao"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu principal"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className={`cabecalho__navegacao ${isMenuOpen ? 'cabecalho__navegacao--aberto' : ''}`}>
          <ul className="cabecalho__lista">
            <li className="cabecalho__item">
              <Link to="/" className="cabecalho__link">Início</Link>
            </li>
            <li className="cabecalho__item">
              <Link to="/colecao" className="cabecalho__link">Coleção</Link>
            </li>
            <li className="cabecalho__item">
              <Link to="/aneis" className="cabecalho__link">Anéis</Link>
            </li>
            <li className="cabecalho__item">
              <Link to="/brincos" className="cabecalho__link">Brincos</Link>
            </li>
            <li className="cabecalho__item">
              <Link to="/colares" className="cabecalho__link">Colares</Link>
            </li>
            <li className="cabecalho__item">
              <Link to="/contato" className="cabecalho__link">Contato</Link>
            </li>
          </ul>
        </nav>
        
        <div className="cabecalho__acoes">
          <button className="cabecalho__acao" aria-label="Pesquisar">
            <Search size={20} />
          </button>
          <Link to="/carrinho" className="cabecalho__acao cabecalho__acao--carrinho">
            <ShoppingBag size={20} />
            <span className="cabecalho__contador">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;