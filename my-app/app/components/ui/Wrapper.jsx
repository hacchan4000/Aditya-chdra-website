'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SectionWrapper({
  children,
  delay = 0,
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render placeholder transparan lebih smooth
  if (!hasMounted) {
    return (
      <div
        style={{
          opacity: 0,
          transform: 'translateY(40px)',
          transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay,
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
