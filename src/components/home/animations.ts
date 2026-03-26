export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
};
