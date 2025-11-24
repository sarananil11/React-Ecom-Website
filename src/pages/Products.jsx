import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Products = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { addToCart } = useCart();

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else if (selectedCategory === 'men' || selectedCategory === 'women') {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of premium skincare products
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setSelectedCategory('men')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedCategory === 'men'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Men's Skincare
          </button>
          <button
            onClick={() => setSelectedCategory('women')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedCategory === 'women'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Women's Skincare
          </button>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gray-200 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      product.category === 'men'
                        ? 'bg-blue-500 text-white'
                        : 'bg-pink-500 text-white'
                    }`}>
                      {product.category === 'men' ? "Men's" : "Women's"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 min-h-[40px]">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">
                      ${product.price}
                    </span>
                    <button 
                      onClick={() => {
                        addToCart(product);
                        // Optional: Show a toast notification or feedback
                      }}
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found in this category.</p>
          </div>
        )}

        {/* Category Info */}
        {selectedCategory !== 'all' && (
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'men' ? "Men's Skincare" : "Women's Skincare"}
            </h2>
            <p className="text-gray-600">
              {selectedCategory === 'men' 
                ? "Our men's skincare line is specifically formulated to address the unique needs of men's skin. From daily cleansers to anti-aging serums, we have everything you need for a complete skincare routine."
                : "Our women's skincare collection features luxurious products designed to nourish, protect, and enhance your natural beauty. Discover our range of cleansers, serums, creams, and more."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

