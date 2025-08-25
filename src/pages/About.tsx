import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Award, Target, Heart, X } from 'lucide-react';

const About = () => {
  const [showCEOModal, setShowCEOModal] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About MDCaps & Clothing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafting premium caps and traditional clothing with passion, authenticity, and unwavering commitment to quality since 2014.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in the heart of Keffi, MDCaps & Clothing began as a small family business with a simple vision: 
                  to create high-quality, authentic African fashion that celebrates our rich cultural heritage while 
                  embracing modern style sensibilities.
                </p>
                <p>
                  What started as a passion project has grown into a trusted brand known for exceptional craftsmanship, 
                  attention to detail, and commitment to preserving traditional African textile arts. Each piece we create 
                  tells a story, blending time-honored techniques with contemporary design.
                </p>
                <p>
                  Today, we serve customers worldwide, bringing the beauty and elegance of African fashion to global markets 
                  while supporting local artisans and maintaining the highest standards of quality and authenticity.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={fadeInUp} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
                <img 
                  src="https://i.imgur.com/vn8Nwmj.jpeg" 
                  alt="Traditional craftsmanship" 
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality",
                description: "We use only the finest materials and traditional craftsmanship techniques to ensure every piece meets our high standards."
              },
              {
                icon: Heart,
                title: "Authenticity",
                description: "Our designs honor African heritage while incorporating modern elements that appeal to contemporary fashion sensibilities."
              },
              {
                icon: Users,
                title: "Community",
                description: "We support local artisans and contribute to the preservation of traditional textile arts in our community."
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We continuously evolve our designs and processes while staying true to our cultural roots and values."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our CEO</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The visionary leader behind MDCaps & Clothing
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div 
                    className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-accent/20 cursor-pointer hover:from-primary/30 hover:to-accent/30 transition-all duration-300 flex items-center justify-center"
                    onClick={() => setShowCEOModal(true)}
                  >
                    <img 
                      src="https://i.imgur.com/QCBXm5d.jpeg" 
                      alt="CEO - MDCaps & Clothing" 
                      className="w-48 h-48 md:w-full md:h-full object-cover rounded-lg md:rounded-none hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Founder & CEO</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      With over a decade of experience in the fashion industry, our CEO has been the driving force 
                      behind MDCaps & Clothing's growth from a small local business to an internationally recognized brand.
                    </p>
                    <p>
                      Their passion for African culture and commitment to quality craftsmanship has shaped our company's 
                      mission to preserve traditional textile arts while creating modern, stylish pieces that celebrate 
                      our heritage.
                    </p>
                    <p>
                      Under their leadership, we've expanded our reach globally while maintaining our core values of 
                      authenticity, quality, and community support.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowCEOModal(true)}
                    className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Modal */}
      {showCEOModal && (
        <motion.div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowCEOModal(false)}
        >
          <motion.div 
            className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setShowCEOModal(false)}
                className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors duration-200 z-10"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <img 
                    src="https://i.imgur.com/QCBXm5d.jpeg" 
                    alt="CEO - MDCaps & Clothing" 
                    className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-primary/20"
                  />
                  <h2 className="text-3xl font-bold mb-2 text-primary">Our Visionary Leader</h2>
                  <p className="text-lg text-muted-foreground">Founder & CEO, MDCaps & Clothing</p>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Our CEO's journey began with a simple dream: to share the beauty and richness of African fashion 
                    with the world. Born and raised in Nigeria, they grew up surrounded by the vibrant colors, intricate 
                    patterns, and time-honored traditions of African textile arts.
                  </p>
                  
                  <p>
                    After studying fashion design and business management, they returned to their hometown of Keffi with 
                    a vision to create a brand that would honor their cultural heritage while appealing to modern sensibilities. 
                    What started as a small workshop has now become a thriving business that serves customers worldwide.
                  </p>
                  
                  <p>
                    Their commitment to quality, authenticity, and community development has been the cornerstone of 
                    MDCaps & Clothing's success. Under their leadership, the company has not only grown commercially 
                    but has also become a champion for preserving traditional craftsmanship and supporting local artisans.
                  </p>
                  
                  <div className="bg-primary/10 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-3">"Our Mission"</h4>
                    <p className="italic">
                      "To create beautiful, authentic pieces that tell the story of our heritage while embracing 
                      the future. Every cap, every garment we make carries with it the spirit of our ancestors 
                      and the hopes of our community."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              To preserve and celebrate African textile traditions while creating contemporary fashion pieces 
              that empower individuals to express their unique style and cultural identity with pride and confidence.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;