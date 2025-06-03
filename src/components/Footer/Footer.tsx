import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="rodape">
      <div className="rodape__container">
        <div className="rodape__conteudo">
          <div className="rodape__coluna rodape__coluna--principal">
            <div className="rodape__logo">GOLD SHOP</div>
            <p className="rodape__descricao">
              Elegância e sofisticação em cada peça de ouro. Desde 2010 criando joias exclusivas 
              que combinam tradição e design contemporâneo.
            </p>
            <div className="rodape__social">
              <a href="https://instagram.com" className="rodape__social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="rodape__social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="rodape__social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="rodape__coluna">
            <h3 className="rodape__titulo">Links Rápidos</h3>
            <ul className="rodape__links">
              <li className="rodape__item">
                <Link to="/" className="rodape__link">Início</Link>
              </li>
              <li className="rodape__item">
                <Link to="/colecao" className="rodape__link">Coleção</Link>
              </li>
              <li className="rodape__item">
                <Link to="/sobre" className="rodape__link">Sobre Nós</Link>
              </li>
              <li className="rodape__item">
                <Link to="/contato" className="rodape__link">Contato</Link>
              </li>
            </ul>
          </div>
          
          <div className="rodape__coluna">
            <h3 className="rodape__titulo">Categorias</h3>
            <ul className="rodape__links">
              <li className="rodape__item">
                <Link to="/aneis" className="rodape__link">Anéis</Link>
              </li>
              <li className="rodape__item">
                <Link to="/brincos" className="rodape__link">Brincos</Link>
              </li>
              <li className="rodape__item">
                <Link to="/colares" className="rodape__link">Colares</Link>
              </li>
              <li className="rodape__item">
                <Link to="/pulseiras" className="rodape__link">Pulseiras</Link>
              </li>
            </ul>
          </div>
          
          <div className="rodape__coluna">
            <h3 className="rodape__titulo">Contato</h3>
            <address className="rodape__endereco">
              <p className="rodape__info">Rua das Joias, 123</p>
              <p className="rodape__info">São Paulo, SP</p>
              <p className="rodape__info">CEP: 01234-567</p>
              <p className="rodape__info">Tel: (11) 1234-5678</p>
              <p className="rodape__info">Email: contato@goldshop.com</p>
            </address>
          </div>
        </div>
        
        <div className="rodape__direitos">
          <p className="rodape__copyright">
            &copy; {new Date().getFullYear()} GOLD SHOP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;