import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '50+', label: 'Team Members' },
  { value: '30+', label: 'Awards Won' }
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  
  const [statsRef, statsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const titleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white text-black relative overflow-hidden">
      <motion.div 
        style={{ y }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <motion.div
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-xl text-gray-600">
              Founded in 2015, we are a team of passionate designers, developers, and strategists who love creating exceptional digital experiences. We believe in the power of design and technology to transform businesses and improve people's lives.
            </p>
            <p className="text-xl text-gray-600">
              Our approach combines strategic thinking, creative design, and technical expertise to deliver digital products that not only look great but also perform exceptionally well. We work closely with our clients to understand their needs and create solutions that exceed their expectations.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 md:mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={statsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={statsInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-5xl md:text-6xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="aspect-[16/9] rounded-xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Our team" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;