import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share2, ChevronLeft } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useProduct } from '../../hooks/useProduct';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useProduct(id ? parseInt(id) : 0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (loading) {
    return (
      <div className="pagina">
        <Header />
        <main className="pagina__conteudo">
          <div className="produto-detalhe">
            <div className="produto-detalhe__container">
              <div className="produto-detalhe__carregando">
                Carregando produto...
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="pagina">
        <Header />
        <main className="pagina__conteudo">
          <div className="produto-detalhe">
            <div className="produto-detalhe__container">
              <div className="produto-detalhe__erro">
                Produto não encontrado ou ocorreu um erro ao carregar os dados.
              </div>
              <Link to="/colecao" className="produto-detalhe__voltar">
                <ChevronLeft size={20} />
                Voltar para a coleção
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    // Implementar lógica de adicionar ao carrinho
    alert(`${quantity} unidade(s) de ${product.title} adicionado(s) ao carrinho`);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="pagina">
      <Header />
      <main className="pagina__conteudo">
        <div className="produto-detalhe">
          <div className="produto-detalhe__container">
            <div className="produto-detalhe__navegacao">
              <Link to="/" className="produto-detalhe__navegacao-link">Início</Link>
              <span className="produto-detalhe__navegacao-separador">/</span>
              <Link to="/colecao" className="produto-detalhe__navegacao-link">Coleção</Link>
              <span className="produto-detalhe__navegacao-separador">/</span>
              <span className="produto-detalhe__navegacao-atual">{product.title}</span>
            </div>
            
            <div className="produto-detalhe__conteudo">
              <div className="produto-detalhe__galeria">
                <div className="produto-detalhe__imagem-principal">
                  <img 
                    src={product.images[selectedImage] || product.thumbnail} 
                    alt={product.title} 
                    className="produto-detalhe__img" 
                  />
                </div>
                <div className="produto-detalhe__miniaturas">
                  {product.images.map((image, index) => (
                    <button 
                      key={index}
                      className={`produto-detalhe__miniatura ${selectedImage === index ? 'produto-detalhe__miniatura--ativo' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image} alt={`${product.title} - imagem ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="produto-detalhe__info">
                <h1 className="produto-detalhe__titulo">{product.title}</h1>
                
                <div className="produto-detalhe__avaliacao">
                  <div className="produto-detalhe__estrelas">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        size={16} 
                        className={`produto-detalhe__estrela ${index < Math.round(product.rating) ? 'produto-detalhe__estrela--preenchida' : ''}`} 
                      />
                    ))}
                  </div>
                  <span className="produto-detalhe__pontuacao">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                
                <div className="produto-detalhe__preco">
                  {product.discountPercentage > 0 ? (
                    <>
                      <span className="produto-detalhe__preco-atual">
                        R$ {(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                      </span>
                      <span className="produto-detalhe__preco-original">
                        R$ {product.price.toFixed(2)}
                      </span>
                      <span className="produto-detalhe__desconto">
                        {Math.round(product.discountPercentage)}% OFF
                      </span>
                    </>
                  ) : (
                    <span className="produto-detalhe__preco-atual">
                      R$ {product.price.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <div className="produto-detalhe__descricao">
                  <p>{product.description}</p>
                </div>
                
                <div className="produto-detalhe__categoria">
                  <span className="produto-detalhe__categoria-titulo">Categoria:</span>
                  <span className="produto-detalhe__categoria-valor">{product.category}</span>
                </div>
                
                <div className="produto-detalhe__estoque">
                  <span className="produto-detalhe__estoque-titulo">Disponibilidade:</span>
                  <span className={`produto-detalhe__estoque-valor ${product.stock > 0 ? 'produto-detalhe__estoque-valor--disponivel' : 'produto-detalhe__estoque-valor--indisponivel'}`}>
                    {product.stock > 0 ? `Em estoque (${product.stock} unidades)` : 'Fora de estoque'}
                  </span>
                </div>
                
                <div className="produto-detalhe__quantidade">
                  <label htmlFor="quantity" className="produto-detalhe__quantidade-label">
                    Quantidade:
                  </label>
                  <div className="produto-detalhe__quantidade-controle">
                    <button 
                      className="produto-detalhe__quantidade-botao"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      id="quantity"
                      value={quantity} 
                      onChange={handleQuantityChange}
                      min="1"
                      max={product.stock}
                      className="produto-detalhe__quantidade-input" 
                    />
                    <button 
                      className="produto-detalhe__quantidade-botao"
                      onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="produto-detalhe__acoes">
                  <button 
                    className="produto-detalhe__botao produto-detalhe__botao--comprar"
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0}
                  >
                    Adicionar ao Carrinho
                  </button>
                  
                  <button className="produto-detalhe__botao produto-detalhe__botao--favorito">
                    <Heart size={20} />
                  </button>
                  
                  <button className="produto-detalhe__botao produto-detalhe__botao--compartilhar">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;