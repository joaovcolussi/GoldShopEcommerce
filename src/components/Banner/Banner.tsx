import React from 'react';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__conteudo">
          <h1 className="banner__titulo">Elegância em Ouro que Transcende o Tempo</h1>
          <p className="banner__descricao">
            Descubra peças exclusivas criadas com o mais puro ouro, 
            combinando design contemporâneo e técnicas tradicionais.
          </p>
          <div className="banner__acoes">
            <Link to="/colecao" className="banner__botao banner__botao--primario">
              Explorar Coleção
            </Link>
            <Link to="/sobre" className="banner__botao banner__botao--secundario">
              Nossa História
            </Link>
          </div>
        </div>
        <div className="banner__imagem">
          <img 
            src="../img/banner.jpg" 
            alt="Peças de ouro elegantes" 
            className="banner__img"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;