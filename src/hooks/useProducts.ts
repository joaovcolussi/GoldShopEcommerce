import { useState, useEffect } from 'react';
import { Product } from '../types';

export const useProducts = (limit?: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = limit 
          ? `https://dummyjson.com/products?limit=${limit}` 
          : 'https://dummyjson.com/products';
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Falha ao carregar produtos');
        }
        
        const data = await response.json();
        
        // Transformar as categorias para o português
        const productsWithPortugueseCategories = data.products.map((product: Product) => {
          let category = product.category;
          
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
          
          return {
            ...product,
            category
          };
        });
        
        setProducts(productsWithPortugueseCategories);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit]);

  return { products, loading, error };
};