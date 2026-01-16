export const spring = {
  gentle: { type: "spring", stiffness: 100, damping: 20 },
  snappy: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
  liquid: { type: "spring", stiffness: 50, damping: 10 }, // Use for the "Bridge" transition
};

export const transition = {
  main: "cubic-bezier(0.16, 1, 0.3, 1)", // Apple-style fluid easing
};