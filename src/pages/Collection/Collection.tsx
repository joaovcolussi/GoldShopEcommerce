import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useProducts } from '../../hooks/useProducts';

const Collection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const category = searchParams.get('categoria') || '';
  const sortBy = searchParams.get('ordenar') || 'recentes';
  const priceRange = searchParams.get('preco') || 'todos';
  
  const { products, loading, error } = useProducts();
  
  const filteredProducts = products
    .filter(product => category ? product.category.toLowerCase() === category.toLowerCase() : true)
    .filter(product => {
      if (priceRange === 'todos') return true;
      if (priceRange === 'ate-100') return product.price <= 100;
      if (priceRange === '100-300') return product.price > 100 && product.price <= 300;
      if (priceRange === '300-500') return product.price > 300 && product.price <= 500;
      if (priceRange === 'acima-500') return product.price > 500;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'recentes') return b.id - a.id;
      if (sortBy === 'preco-menor') return a.price - b.price;
      if (sortBy === 'preco-maior') return b.price - a.price;
      if (sortBy === 'populares') return b.rating - a.rating;
      return 0;
    });
  
  const handleFilterChange = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    setSearchParams(params);
  };
  
  return (
    <div className="pagina">
      <Header />
      <main className="pagina__conteudo">
        <div className="colecao">
          <div className="colecao__cabecalho">
            <div className="colecao__container">
              <h1 className="colecao__titulo">Nossa Coleção</h1>
              <p className="colecao__descricao">
                Descubra nossas peças artesanais em ouro, criadas com atenção aos mínimos detalhes.
              </p>
            </div>
          </div>
          
          <div className="colecao__container">
            <div className="colecao__controles">
              <button
                className="colecao__botao-filtro"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter size={20} />
                <span>Filtros</span>
              </button>
              
              <div className="colecao__visualizacao">
                <button 
                  className={`colecao__visualizacao-botao ${viewMode === 'grid' ? 'colecao__visualizacao-botao--ativo' : ''}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Visualização em grade"
                >
                  <Grid size={20} />
                </button>
                <button 
                  className={`colecao__visualizacao-botao ${viewMode === 'list' ? 'colecao__visualizacao-botao--ativo' : ''}`}
                  onClick={() => setViewMode('list')}
                  aria-label="Visualização em lista"
                >
                  <List size={20} />
                </button>
              </div>
              
              <div className="colecao__ordenacao">
                <label htmlFor="sort" className="colecao__ordenacao-label">Ordenar por:</label>
                <select 
                  id="sort" 
                  className="colecao__ordenacao-select"
                  value={sortBy}
                  onChange={(e) => handleFilterChange('ordenar', e.target.value)}
                >
                  <option value="recentes">Mais recentes</option>
                  <option value="preco-menor">Menor preço</option>
                  <option value="preco-maior">Maior preço</option>
                  <option value="populares">Mais populares</option>
                </select>
              </div>
            </div>
            
            <div className="colecao__conteudo">
              <aside className={`colecao__filtros ${isFilterOpen ? 'colecao__filtros--aberto' : ''}`}>
                <div className="colecao__filtro">
                  <h3 className="colecao__filtro-titulo">Categorias</h3>
                  <div className="colecao__filtro-opcoes">
                    <label className="colecao__filtro-opcao">
                      <input 
                        type="radio" 
                        name="categoria" 
                        value="" 
                        checked={category === ''}
                        onChange={() => handleFilterChange('categoria', '')}
                      />
                      <span>Todas</span>
                    </label>
                    <label className="colecao__filtro-opcao">
                      <input 
                        type="radio" 
                        name="categoria" 
                        value="aneis"
                        checked={category === 'aneis'}
                        onChange={() => handleFilterChange('categoria', 'aneis')}
                      />
                      <span>Anéis</span>
                    </label>
                    <label className="colecao__filtro-opcao">
                      <input 
                        type="radio" 
                        name="categoria" 
                        value="brincos"
                        checked={category === 'brincos'}
                        onChange={() => handleFilterChange('categoria', 'brincos')}
                      />
                      <span>Brincos</span>
                    </label>
                    <label className="colecao__filtro-opcao">
                      <input 
                        type="radio" 
                        name="categoria" 
                        value="colares"
                        checked={category === 'colares'}
                        onChange={() => handleFilterChange('categoria', 'colares')}
                      />
                      <span>Colares</span>
                    </label>
                    <label className="colecao__filtro-opcao">
                      <input 
                        type="radio" 
                        name="categoria" 
                        value="pulseiras"
                        checked={category === 'pulseiras'}
                        onChange={() => handleFilterChange('categoria', 'pulseiras')}
                      />
                      <span>Pulseiras</span>
                    </label>
                  </div>
                </div>
                
                <div className="colecao__filtro">
                  <h3 className="colecao__filtro-titulo">Faixa de Preço</h3>
                  <div className="colecao__filtro-opcoes">
                    <label className="colecao__filtro-opcao">
                      <input 
                        type="radio" 
                        name="preco" 
                        value="todos"
                        checked={priceRange === 'todos'}
                        onChange={() => handleFilterChange('preco', 'todos')}
                      />
                      <span>Todos os preços</span>
                    </label>
                    <label className="colecao__filtro-opcao">
                      <input 
                        type="radio" 
                        name="preco" 
                        value="ate-100"
                        checked={priceRange === 'ate-100'}
                        onChange={() => handleFilterChange('preco', 'ate-100')}
                      />
                      <span>Até R$ 100</span>
                    </label>
                    <label className="colecao__filtro-opcao">
                      <input 
                        type="radio" 
                        name="preco" 
                        value="100-300"
                        checked={priceRange === '100-300'}
                        onChange={() => handleFilterChange('preco', '100-300')}
                      />
                      <span>R$ 100 - R$ 300</span>
                    </label>
                    <label className="colecao__filtro-opcao">
                      <input 
                        type="radio" 
                        name="preco" 
                        value="300-500"
                        checked={priceRange === '300-500'}
                        onChange={() => handleFilterChange('preco', '300-500')}
                      />
                      <span>R$ 300 - R$ 500</span>
                    </label>
                    <label className="colecao__filtro-opcao">
                      <input 
                        type="radio" 
                        name="preco" 
                        value="acima-500"
                        checked={priceRange === 'acima-500'}
                        onChange={() => handleFilterChange('preco', 'acima-500')}
                      />
                      <span>Acima de R$ 500</span>
                    </label>
                  </div>
                </div>
              </aside>
              
              <div className="colecao__produtos">
                {loading ? (
                  <div className="colecao__carregando">Carregando produtos...</div>
                ) : error ? (
                  <div className="colecao__erro">Não foi possível carregar os produtos.</div>
                ) : filteredProducts.length === 0 ? (
                  <div className="colecao__vazio">
                    Nenhum produto encontrado com os filtros selecionados.
                  </div>
                ) : (
                  <div className={`colecao__grade colecao__grade--${viewMode}`}>
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collection;