import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Layers, Code, Paintbrush, Smartphone, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: <Layers size={32} />,
    title: 'Strategy',
    description: 'We develop comprehensive digital strategies that align with your business goals and target audience needs.'
  },
  {
    icon: <Paintbrush size={32} />,
    title: 'UI/UX Design',
    description: 'Our design team creates intuitive, engaging user experiences that delight your customers and strengthen your brand.'
  },
  {
    icon: <Code size={32} />,
    title: 'Development',
    description: 'We build robust, scalable applications using the latest technologies and best practices in software development.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that provide seamless experiences across all devices.'
  },
  {
    icon: <Globe size={32} />,
    title: 'Web Development',
    description: 'Responsive, high-performance websites and web applications that work flawlessly on any device or browser.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Animation',
    description: 'Engaging motion design and animations that bring your digital products to life and enhance user engagement.'
  }
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        className="text-black dark:text-white mb-4"
      >
        {service.icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  
  
  return (
    <section id="services" ref={sectionRef} className="section-padding bg-black text-white relative overflow-hidden">
      <motion.div 
        style={{ y }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <motion.div
          ref={titleRef}
          initial={{ y: 100, opacity: 0 }}
          animate={titleInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </motion.div>
      
      <div className="absolute -z-10 inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default ServicesSection;