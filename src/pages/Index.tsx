import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const capsImages = {
  left: ["https://i.imgur.com/5lWiyPc.jpeg", "https://i.imgur.com/sslD8O3.jpeg"],
  right: ["https://i.imgur.com/94mEN77.jpeg", "https://i.imgur.com/J6jBBPv.jpeg"]
};

const agbadaImages = [
  "https://i.imgur.com/FwF504Q.jpeg",
  "https://i.imgur.com/vn8Nwmj.jpeg",
  "https://i.imgur.com/HP8KH5P.jpeg"
];

export default function Index() {
  const [currentCapsIndex, setCurrentCapsIndex] = useState({
    left: 0,
    right: 0
  });
  const [currentAgbadaIndex, setCurrentAgbadaIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCapsIndex(prev => ({
        left: (prev.left + 1) % capsImages.left.length,
        right: (prev.right + 1) % capsImages.right.length
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAgbadaIndex(prev => (prev + 1) % agbadaImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Premium Caps & Clothing
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Discover our exclusive collection of handcrafted caps, traditional agbada, and modern fashion pieces that blend style with comfort.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 group"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border border-border rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of premium caps and traditional clothing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Caps Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">Premium Caps Collection</h3>
                <p className="text-muted-foreground mb-6">
                  Handcrafted caps with authentic African designs and modern comfort
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 h-80">
                <motion.div 
                  className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center w-full h-full p-2">
                    <img
                      src={capsImages.left[currentCapsIndex.left]}
                      alt="Cap Style 1"
                      className="w-full h-full object-cover rounded-xl border-4 border-primary/30 shadow-medium"
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center w-full h-full p-2">
                    <img
                      src={capsImages.right[currentCapsIndex.right]}
                      alt="Cap Style 2"
                      className="w-full h-full object-cover rounded-xl border-4 border-primary/30 shadow-medium"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Agbada Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">Traditional Agbada</h3>
                <p className="text-muted-foreground mb-6">
                  Elegant traditional wear for special occasions and cultural celebrations
                </p>
              </div>
              
              <motion.div 
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-80"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center w-full h-full p-4">
                  <img
                    src={agbadaImages[currentAgbadaIndex]}
                    alt="Traditional Agbada"
                    className="w-full h-full object-cover rounded-xl border-4 border-accent/30 shadow-medium"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">5000+</h3>
              <p className="text-primary-foreground/80">Happy Customers</p>
            </div>
            <div className="space-y-4">
              <ShoppingBag className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-primary-foreground/80">Products Sold</p>
            </div>
            <div className="space-y-4">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-primary-foreground/80">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Read testimonials from our satisfied customers worldwide
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {[
              {
                name: "Adebayo Johnson",
                role: "Fashion Enthusiast",
                content: "The quality of their caps is exceptional. I've ordered multiple pieces and each one exceeds my expectations.",
                rating: 5
              },
              {
                name: "Fatima Al-Hassan",
                role: "Cultural Event Organizer",
                content: "Their agbada collection is authentic and beautifully crafted. Perfect for our cultural celebrations.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Retail Buyer",
                content: "Outstanding customer service and fast delivery. The traditional designs are truly unique.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Elevate Your Style?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Browse our complete collection and find the perfect piece for your wardrobe
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200 group"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}