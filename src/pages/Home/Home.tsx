import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div className="pagina">
      <Header />
      <main className="pagina__conteudo">
        <Banner />
        <FeaturedProducts />
        <div className="pagina__destaque">
          <div className="destaque">
            <div className="destaque__container">
              <div className="destaque__conteudo">
                <h2 className="destaque__titulo">Coleção Exclusiva</h2>
                <p className="destaque__descricao">
                  Conheça nossa nova coleção de ouro 18k inspirada na beleza da natureza brasileira.
                  Peças únicas e artesanais com acabamento impecável.
                </p>
                <a href="/colecao" className="destaque__botao">Descubra Agora</a>
              </div>
              <div className="destaque__imagem">
                <img 
                  src="https://images.pexels.com/photos/10876202/pexels-photo-10876202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Coleção exclusiva de joias" 
                  className="destaque__img"
                />
              </div>
            </div>
          </div>
        </div>
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;