import { motion } from 'framer-motion';
import { FaBasketballBall, FaFutbol, FaRunning } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero-section bg-gradient-to-r from-blue-50 to-green-50">
        <FaBasketballBall className="sports-icon text-8xl absolute top-20 left-20 rotate-animation" />
        <FaFutbol className="sports-icon text-8xl absolute bottom-20 right-20 bounce-animation" />
        <FaRunning className="sports-icon text-8xl absolute top-40 right-40" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-7xl mb-6">
            Building the Future of Sports Infrastructure
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Creating world-class sports facilities that inspire athletes and
            transform communities.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/projects" className="cta-button">
              Explore Our Projects
            </Link>
            <Link to="/contact" className="cta-button bg-transparent border-2 border-primary text-primary hover:bg-primary/10">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Olympic Stadium',
                image: 'https://images.unsplash.com/photo-1590582767410-39c418aed00d',
                description: 'State-of-the-art Olympic stadium with sustainable design',
              },
              {
                title: 'Sports Complex',
                image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
                description: 'Multi-purpose sports complex with modern facilities',
              },
              {
                title: 'Training Center',
                image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e',
                description: 'High-performance athletic training center',
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="project-info text-white">
                  <h3 className="text-2xl mb-2">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-12">
            Why Choose VSSCID?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBasketballBall className="text-4xl mb-4 text-primary" />,
                title: 'Expert Team',
                description: 'Dedicated professionals with years of experience',
              },
              {
                icon: <FaFutbol className="text-4xl mb-4 text-primary" />,
                title: 'Innovation',
                description: 'Cutting-edge technology and sustainable solutions',
              },
              {
                icon: <FaRunning className="text-4xl mb-4 text-primary" />,
                title: 'Quality',
                description: 'Uncompromising standards in every project',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                {feature.icon}
                <h3 className="text-2xl mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;