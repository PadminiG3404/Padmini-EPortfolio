// Animation helper for framer-motion

export function fadeIn(delay = 0) {
  return {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };
}