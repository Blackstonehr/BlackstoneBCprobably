import { motion, colors, spring } from '@liquid/tokens';

export const Spotlight = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="relative"
    animate={{
      boxShadow: [
        `0 0 0 ${colors.bonewhite}00`,
        `0 0 20px ${colors.bonewhite}33`,
        `0 0 0 ${colors.bonewhite}00`,
      ],
    }}
    transition={{
      ...spring.liquid,
      repeat: Infinity,
      duration: 4
    }}
  >
    {children}
  </motion.div>
);
