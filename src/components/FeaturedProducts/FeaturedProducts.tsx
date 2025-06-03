import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { useProducts } from '../../hooks/useProducts';

const FeaturedProducts: React.FC = () => {
  const { products, loading, error } = useProducts(4);

  if (loading) {
    return (
      <section className="produtos-destaque">
        <div className="produtos-destaque__container">
          <h2 className="produtos-destaque__titulo">Destaques da Coleção</h2>
          <div className="produtos-destaque__carregando">Carregando produtos...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="produtos-destaque">
        <div className="produtos-destaque__container">
          <h2 className="produtos-destaque__titulo">Destaques da Coleção</h2>
          <div className="produtos-destaque__erro">Não foi possível carregar os produtos.</div>
        </div>
      </section>
    );
  }

  return (
    <section className="produtos-destaque">
      <div className="produtos-destaque__container">
        <h2 className="produtos-destaque__titulo">Destaques da Coleção</h2>
        <div className="produtos-destaque__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="produtos-destaque__rodape">
          <Link to="/colecao" className="produtos-destaque__botao">
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;