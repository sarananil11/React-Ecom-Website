import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const featuredProducts = products.slice(0, 6);
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-violet-600 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-primary-200">GlowSkin</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Discover premium skincare products designed for men and women. 
              Transform your skincare routine today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GlowSkin?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best skincare solutions for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">
                All our products are made with high-quality, natural ingredients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Formulated</h3>
              <p className="text-gray-600">
                Developed by skincare experts and dermatologists.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">For Everyone</h3>
              <p className="text-gray-600">
                Products designed specifically for both men and women.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our best-selling skincare products
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                      product.category === 'men'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-pink-100 text-pink-800'
                    }`}>
                      {product.category === 'men' ? "Men's" : "Women's"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-2xl font-bold text-primary-600">
                      ${product.price}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium whitespace-nowrap"
                      >
                        Add to Cart
                      </button>
                      <Link
                        to="/products"
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium whitespace-nowrap"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Skincare Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust GlowSkin for their daily skincare needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

