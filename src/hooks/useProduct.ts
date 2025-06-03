import { useState, useEffect } from 'react';
import { Product } from '../types';

export const useProduct = (id: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        
        if (!response.ok) {
          throw new Error('Falha ao carregar produto');
        }
        
        const data = await response.json();
        
        // Transformar a categoria para o português
        let category = data.category;
        
        if (category === 'smartphones') category = 'smartphones';
        if (category === 'laptops') category = 'laptops';
        if (category === 'fragrances') category = 'perfumes';
        if (category === 'skincare') category = 'cuidados com a pele';
        if (category === 'groceries') category = 'alimentos';
        if (category === 'home-decoration') category = 'decoração';
        if (category === 'furniture') category = 'móveis';
        if (category === 'tops') category = 'blusas';
        if (category === 'womens-dresses') category = 'vestidos';
        if (category === 'womens-shoes') category = 'calçados femininos';
        if (category === 'mens-shirts') category = 'camisas masculinas';
        if (category === 'mens-shoes') category = 'calçados masculinos';
        if (category === 'mens-watches') category = 'relógios masculinos';
        if (category === 'womens-watches') category = 'relógios femininos';
        if (category === 'womens-bags') category = 'bolsas';
        if (category === 'womens-jewellery') category = 'joias';
        if (category === 'sunglasses') category = 'óculos de sol';
        if (category === 'automotive') category = 'automotivo';
        if (category === 'motorcycle') category = 'motocicletas';
        if (category === 'lighting') category = 'iluminação';
        
        setProduct({
          ...data,
          category
        });
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};