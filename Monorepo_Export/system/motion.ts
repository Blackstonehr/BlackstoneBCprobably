export const motion = {
  spring: {
    stiff: { type: "spring", stiffness: 300, damping: 30 },
    soft: { type: "spring", stiffness: 100, damping: 20 },
    bouncy: { type: "spring", stiffness: 400, damping: 15 },
  },
  
  stagger: {
    container: {
      animate: { transition: { staggerChildren: 0.1 } }
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    }
  }
};
