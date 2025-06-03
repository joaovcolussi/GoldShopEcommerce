import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="produto-card">
      <div className="produto-card__imagem">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="produto-card__img" 
        />
        <button className="produto-card__favorito" aria-label="Adicionar aos favoritos">
          <Heart size={20} />
        </button>
      </div>
      
      <div className="produto-card__conteudo">
        <h3 className="produto-card__titulo">
          <Link to={`/produto/${product.id}`} className="produto-card__link">
            {product.title}
          </Link>
        </h3>
        
        <div className="produto-card__categoria">
          {product.category}
        </div>
        
        <div className="produto-card__preco">
          {product.discountPercentage > 0 ? (
            <>
              <span className="produto-card__preco-atual">
                R$ {(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>
              <span className="produto-card__preco-original">
                R$ {product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="produto-card__preco-atual">
              R$ {product.price.toFixed(2)}
            </span>
          )}
        </div>
        
        <div className="produto-card__acoes">
          <button className="produto-card__botao produto-card__botao--comprar">
            Adicionar ao Carrinho
          </button>
          <Link to={`/produto/${product.id}`} className="produto-card__botao produto-card__botao--detalhes">
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;