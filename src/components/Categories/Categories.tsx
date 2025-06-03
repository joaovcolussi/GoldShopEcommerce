import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Anéis',
    image: '../img/aneis.jpg',
    path: '/aneis'
  },
  {
    id: 2,
    name: 'Brincos',
    image: '../img/brincos.jpg',
    path: '/brincos'
  },
  {
    id: 3,
    name: 'Colares',
    image: '../img/colares.jpg',
    path: '/colares'
  },
  {
    id: 4,
    name: 'Pulseiras',
    image: '../img/pulseiras.jpg',
    path: '/pulseiras'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="categorias">
      <div className="categorias__container">
        <h2 className="categorias__titulo">Nossas Categorias</h2>
        <div className="categorias__grid">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.path}
              className="categoria-card"
            >
              <div className="categoria-card__imagem">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="categoria-card__img" 
                />
              </div>
              <h3 className="categoria-card__titulo">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;