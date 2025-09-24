import type { FC, ReactNode } from 'react';
import Column from '../Structure/Column';
import Typography from '../Typography/Typography';
import { pipe } from 'remeda';
import { on } from '../../css';
import { useThemeContext } from '../../providers/ThemeProvider';
// import GradientBorder from '../GradientBorder/GradientBorder';

export type IconWrapperProps = {
  icon: ReactNode;
  title: string;
  onClick: () => void;
};

const IconWrapper: FC<IconWrapperProps> = ({ icon, title, onClick: onClick }) => {
  const { theme } = useThemeContext();

  

  return (
    <Column
      onClick={onClick}
      style={pipe(
        {
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '6em',
          height: '6em',
          backgroundColor: 'black',
          borderRadius: '16px',
          border: `1px ${theme.color.primary} solid`,
          cursor: 'pointer',
          gap: '4px',
          transition: 'border-color 0.5s',
        },
        on('&:hover', {
          borderColor: theme.color.primary,
          // transform: 'scale(1.01)',
        })
      )}
    >
      {icon}
      <Typography variant='small' style={{ textAlign: 'center' }}>
        {title}
      </Typography>

      {/* <GradientBorder padding={'4px'} /> */}
    </Column>
  );
};

export default IconWrapper;
