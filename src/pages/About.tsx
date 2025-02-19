import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaHandshake } from 'react-icons/fa';

function About() {
  return (
    <div className="pt-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-50 to-green-50 py-20"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl text-center mb-8">About VSSCID</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            We are dedicated to creating world-class sports infrastructure that empowers
            athletes and transforms communities through innovative design and sustainable
            development.
          </p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <FaTrophy className="text-5xl text-primary mb-4" />,
                title: "Excellence",
                description: "Committed to delivering exceptional quality in every project"
              },
              {
                icon: <FaUsers className="text-5xl text-primary mb-4" />,
                title: "Team",
                description: "Expert professionals with decades of combined experience"
              },
              {
                icon: <FaHandshake className="text-5xl text-primary mb-4" />,
                title: "Partnership",
                description: "Building lasting relationships with our clients and communities"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {value.icon}
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2015",
                title: "Foundation",
                description: "VSSCID was established with a vision to revolutionize sports infrastructure"
              },
              {
                year: "2018",
                title: "Expansion",
                description: "Completed our first international project and expanded operations"
              },
              {
                year: "2021",
                title: "Innovation",
                description: "Introduced sustainable development practices in all our projects"
              },
              {
                year: "2024",
                title: "Leadership",
                description: "Became the leading sports infrastructure developer in the region"
              }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-8 mb-12"
              >
                <div className="text-3xl font-bold text-primary">{milestone.year}</div>
                <div>
                  <h3 className="text-xl mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;