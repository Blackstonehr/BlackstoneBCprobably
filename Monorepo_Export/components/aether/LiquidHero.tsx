
import { palette } from '../../system/palette';
import { surfaces } from '../../system/surfaces';
import { motion } from '../../system/motion';

// STYLE: UNREAL (Langu's high-fidelity)
// LiquidHero Component

export const LiquidHero = () => {
  return (
    <div 
      className={surfaces.liquid}
      style={{ 
        backgroundColor: palette.colors.midnight
      }}
    >
      {/* Hero content */}
      Liquid Hero
    </div>
  );
};
