import { motion } from 'framer-motion';
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Github, 
  ArrowUpRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, url: "#" },
    { icon: <Twitter className="h-5 w-5" />, url: "#" },
    { icon: <Linkedin className="h-5 w-5" />, url: "#" },
    { icon: <Github className="h-5 w-5" />, url: "#" }
  ];

  const footerLinks = [
    { title: "Home", url: "#" },
    { title: "Services", url: "#services" },
    { title: "Projects", url: "#projects" },
    { title: "About", url: "#about" },
    { title: "Contact", url: "#contact" },
    { title: "Careers", url: "#" },
    { title: "Blog", url: "#" },
    { title: "Privacy Policy", url: "#" }
  ];

  return (
    <footer className="bg-muted/30 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's create something amazing together</h2>
            <p className="text-foreground/70 text-lg mb-8 max-w-md">
              Have a project in mind? We'd love to hear about it. Get in touch with us.
            </p>
            <Button size="lg" className="group">
              Start a Project
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-foreground/70 mb-2">hello@cuberto.com</p>
              <p className="text-foreground/70 mb-6">+1 (555) 123-4567</p>
              
              <h4 className="text-lg font-semibold mb-3">Office</h4>
              <p className="text-foreground/70 mb-6">
                123 Design Street, Creative District<br />
                San Francisco, CA 94103
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-border/50 pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-wrap gap-y-4 justify-between">
            <div className="text-2xl font-bold">CUBERTO</div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url}
                  className="footer-link text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-foreground/50 text-sm">
            © {new Date().getFullYear()} Cuberto. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;