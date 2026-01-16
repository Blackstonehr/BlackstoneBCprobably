
import { palette } from '../../system/palette';
import { typography } from '../../system/typography';

// STYLE: VOID (Blackstone's industrial)
// Dashboard Component

export const Dashboard = () => {
  return (
    <div style={{ 
      fontFamily: typography.fonts.industrial,
      color: palette.colors.zinc
    }}>
      {/* Dashboard content */}
      Industrial Dashboard
    </div>
  );
};
