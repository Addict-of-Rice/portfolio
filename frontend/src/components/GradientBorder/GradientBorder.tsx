import { type FC } from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';
import { pipe } from 'remeda';
import { on } from '../../css';

type Props = {
  padding: string;
};

const GradientBorder: FC<Props> = ({ padding }) => {
  const { theme } = useThemeContext();

  return (
    <div
      style={pipe(
        {
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '12px',
          padding,
        },
        on('&:hover', {
          backgroundImage: `conic-gradient(${theme.color.text}, ${theme.color.primary}, ${theme.color.text})`,
          animation: '3s spin linear infinite',
        })
      )}
    />
  );
};

export default GradientBorder;
