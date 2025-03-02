import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = () => setCursorVariant('hover');
    const handleMouseOut = () => setCursorVariant('default');

    const buttons = document.querySelectorAll('button, a, .magnetic-button, .project-card');
    
    buttons.forEach(button => {
      button.addEventListener('mouseover', handleMouseOver);
      button.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseover', handleMouseOver);
        button.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 40,
      width: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      mixBlendMode: 'difference'
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 80,
      width: 80,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      mixBlendMode: 'difference'
    }
  };

  return (
    <motion.div
      className="cursor-follower"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300,
        mass: 0.5
      }}
    />
  );
};

export default CursorFollower;