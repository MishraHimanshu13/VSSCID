import { motion } from 'framer-motion';
import { FaBuilding, FaRunning, FaLightbulb, FaTree, FaTools, FaChartLine } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaBuilding className="text-5xl mb-4 text-primary" />,
      title: "Stadium Construction",
      description: "State-of-the-art stadium design and construction with focus on sustainability and spectator experience."
    },
    {
      icon: <FaRunning className="text-5xl mb-4 text-primary" />,
      title: "Training Facilities",
      description: "Professional training facilities designed for peak athletic performance and development."
    },
    {
      icon: <FaLightbulb className="text-5xl mb-4 text-primary" />,
      title: "Lighting Solutions",
      description: "Advanced sports lighting systems for optimal visibility and energy efficiency."
    },
    {
      icon: <FaTree className="text-5xl mb-4 text-primary" />,
      title: "Sustainable Development",
      description: "Eco-friendly infrastructure solutions that minimize environmental impact."
    },
    {
      icon: <FaTools className="text-5xl mb-4 text-primary" />,
      title: "Maintenance",
      description: "Comprehensive maintenance services to ensure long-term facility performance."
    },
    {
      icon: <FaChartLine className="text-5xl mb-4 text-primary" />,
      title: "Consulting",
      description: "Expert consulting services for sports infrastructure projects of all scales."
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
          <h1 className="text-5xl md:text-6xl text-center mb-8">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive sports infrastructure solutions designed to meet the highest
            standards of performance, sustainability, and innovation.
          </p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to understand your requirements and vision"
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed project planning and feasibility analysis"
              },
              {
                step: "03",
                title: "Design",
                description: "Creative design solutions tailored to your needs"
              },
              {
                step: "04",
                title: "Execution",
                description: "Professional construction and implementation"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-8 mb-12"
              >
                <div className="text-4xl font-bold text-primary">{step.step}</div>
                <div>
                  <h3 className="text-2xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;