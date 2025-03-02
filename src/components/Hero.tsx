import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };


  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-10">
      <motion.div 
        className="container mx-auto px-4 z-10 flex flex-col items-center"
        style={{ y, opacity }}
      >
        <motion.h1 
          className="hero-text text-center mb-6 font-bold"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <div className="overflow-hidden">
            <motion.div variants={titleVariants}>
              We create
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={titleVariants}>
              digital experiences
            </motion.div>
          </div>
        </motion.h1>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["Creative", "Innovative", "Responsive", "Interactive"].map((word, i) => (
            <motion.span
              key={word}
              className="text-xl md:text-2xl text-foreground/70"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
            >
              {i > 0 ? ' • ' : ''}{word}
            </motion.span>
          ))}
        </div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          whileHover="hover"
        >
          <Button className="group text-lg px-8 py-6 rounded-full">
            Get in touch
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 w-full py-6 bg-gradient-to-r from-primary/20 to-primary/10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        
      </motion.div>
    </section>
  );
};

export default Hero;