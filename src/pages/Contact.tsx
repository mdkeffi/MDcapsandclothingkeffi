import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 (0) 803 123 4567", "+234 (0) 806 987 6543"],
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["info@mdcapsandclothing.com", "orders@mdcapsandclothing.com"],
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Keffi, Nasarawa State", "Nigeria"],
      description: "Visit our showroom"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "Sunday: Closed"
    }
  ];

  return (
    <div className="min-h-screen">
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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us for orders, custom designs, or any questions about our products and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-foreground font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Send us a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200 bg-background"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200 bg-background"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200 bg-background"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Information</option>
                      <option value="custom">Custom Design Request</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="support">Customer Support</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200 bg-background resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map/Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card p-8 rounded-xl shadow-lg h-full">
                <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Main Showroom</h3>
                    <p className="text-muted-foreground">
                      Our main showroom is located in the heart of Keffi, where you can see our full 
                      collection of caps and traditional clothing. Our friendly staff will be happy 
                      to assist you with measurements, custom orders, and styling advice.
                    </p>
                  </div>
                  
                  {/* Placeholder for map */}
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 text-center h-64 flex items-center justify-center">
                    <div>
                      <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h4 className="text-lg font-semibold mb-2">Keffi, Nasarawa State</h4>
                      <p className="text-muted-foreground">Interactive map coming soon</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <h4 className="font-semibold text-primary mb-1">Parking</h4>
                      <p className="text-sm text-muted-foreground">Free parking available</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4 text-center">
                      <h4 className="font-semibold text-accent-foreground mb-1">Fittings</h4>
                      <p className="text-sm text-muted-foreground">By appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Do you offer international shipping?",
                answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by location. Contact us for specific rates."
              },
              {
                question: "How long does it take to create a custom piece?",
                answer: "Custom orders typically take 2-4 weeks depending on complexity. We'll provide an estimated timeline when you place your order."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept major credit cards, bank transfers, and mobile money payments. Full payment is required for custom orders."
              },
              {
                question: "Do you offer size exchanges?",
                answer: "Yes, we offer size exchanges within 14 days of delivery for unworn items in original condition."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;