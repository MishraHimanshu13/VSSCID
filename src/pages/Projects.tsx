import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      title: "Olympic Training Center",
      category: "Training Facility",
      location: "New Delhi",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      description: "State-of-the-art training facility for Olympic athletes"
    },
    {
      title: "National Stadium",
      category: "Stadium",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1590582767410-39c418aed00d",
      description: "60,000-seat multi-purpose stadium with retractable roof"
    },
    {
      title: "Sports Academy",
      category: "Educational",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e",
      description: "Comprehensive sports education and training complex"
    },
    {
      title: "Community Sports Center",
      category: "Community",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1577223625816-6ffb7a12c5c7",
      description: "Multi-sport facility serving the local community"
    },
    {
      title: "Cricket Stadium",
      category: "Stadium",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
      description: "Modern cricket stadium with advanced facilities"
    },
    {
      title: "Athletic Complex",
      category: "Training Facility",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a",
      description: "Comprehensive athletic training and competition venue"
    }
  ];

  return (
    <div className="pt-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-50 to-green-50 py-20"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl text-center mb-8">Our Projects</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover our portfolio of world-class sports infrastructure projects
            that are transforming the landscape of athletics.
          </p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="project-info">
                  <span className="text-sm text-gray-300">{project.category}</span>
                  <h3 className="text-2xl mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-2">{project.description}</p>
                  <span className="text-sm text-gray-300">{project.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's work together to create the next generation of sports infrastructure.
            Contact us to discuss your vision.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="cta-button">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Projects;