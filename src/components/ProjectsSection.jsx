import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Fintech App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    color: '#3B82F6'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    color: '#10B981'
  },
  {
    id: 3,
    title: 'Health Tracker',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    color: '#F59E0B'
  },
  {
    id: 4,
    title: 'Social Network',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    color: '#EC4899'
  }
];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  
  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="project-card relative rounded-xl overflow-hidden group"
      style={{ backgroundColor: project.color }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-white"
        >
          <p className="text-sm font-medium mb-2">{project.category}</p>
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm">View Project</span>
            <ArrowUpRight size={16} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
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
    <section id="work" ref={sectionRef} className="section-padding bg-white text-black relative overflow-hidden">
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Selected Work</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
            We create digital products that help businesses grow and succeed in the digital age.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="magnetic-button border-2 border-black rounded-full px-8 py-4 font-medium inline-flex items-center gap-2"
          >
            View All Projects <ArrowUpRight size={16} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;