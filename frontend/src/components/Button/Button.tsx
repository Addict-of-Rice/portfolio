import type { FC, MouseEventHandler } from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';
import { pipe } from 'remeda';
import { on } from '../../css';

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<Props> = ({ text, onClick }) => {
  const { theme } = useThemeContext();

  return (
    <button
      onClick={onClick}
      style={pipe(
        {
          fontFamily: theme.fontFamily.heading,
          fontSize: theme.fontSize.h6,
          color: theme.color.text,
          backgroundColor: theme.color.background1,
          paddingBlock: '12px',
          paddingInline: '16px',
          borderRadius: '12px',
          userSelect: 'none',
        },
        on('&:hover', {
          borderColor: theme.color.text,
        })
      )}
    >
      {text}
    </button>
  );
};

export default Button;
