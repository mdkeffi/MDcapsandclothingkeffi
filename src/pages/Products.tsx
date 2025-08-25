import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const products = [
    {
      id: 1,
      name: "Traditional African Cap",
      category: "caps",
      price: "$45",
      image: "https://i.imgur.com/5lWiyPc.jpeg",
      description: "Handcrafted traditional cap with authentic African patterns"
    },
    {
      id: 2,
      name: "Modern Style Cap",
      category: "caps", 
      price: "$38",
      image: "https://i.imgur.com/sslD8O3.jpeg",
      description: "Contemporary design with traditional elements"
    },
    {
      id: 3,
      name: "Premium Embroidered Cap",
      category: "caps",
      price: "$52",
      image: "https://i.imgur.com/94mEN77.jpeg", 
      description: "Luxurious cap with intricate embroidery work"
    },
    {
      id: 4,
      name: "Classic African Cap",
      category: "caps",
      price: "$42",
      image: "https://i.imgur.com/J6jBBPv.jpeg",
      description: "Timeless design perfect for any occasion"
    },
    {
      id: 5,
      name: "Royal Blue Agbada",
      category: "clothing",
      price: "$185",
      image: "https://i.imgur.com/FwF504Q.jpeg",
      description: "Elegant traditional agbada for special occasions"
    },
    {
      id: 6,
      name: "Classic White Agbada", 
      category: "clothing",
      price: "$165",
      image: "https://i.imgur.com/vn8Nwmj.jpeg",
      description: "Pure white agbada with traditional embellishments"
    },
    {
      id: 7,
      name: "Ceremonial Agbada",
      category: "clothing", 
      price: "$220",
      image: "https://i.imgur.com/HP8KH5P.jpeg",
      description: "Premium agbada for weddings and ceremonies"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'caps', name: 'Caps' },
    { id: 'clothing', name: 'Traditional Clothing' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our collection of premium caps and traditional clothing, each piece crafted with care and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and View Toggle */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'list'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Products Grid/List */}
          <motion.div 
            className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-6'
            }`}
            layout
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                layout
              >
                <div className={`${viewMode === 'list' ? 'sm:w-64 sm:flex-shrink-0' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full object-cover ${
                      viewMode === 'list' ? 'h-48 sm:h-full' : 'h-64'
                    }`}
                  />
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
                      Add to Cart
                    </button>
                    <button className="flex-1 border border-border px-4 py-2 rounded-lg font-medium hover:bg-accent transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your filters to see more products.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Custom Orders Welcome</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't see exactly what you're looking for? We offer custom designs tailored to your preferences.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
              Contact Us for Custom Orders
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;