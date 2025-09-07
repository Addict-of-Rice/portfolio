import type { CSSProperties, FC, ReactNode } from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';
import Column from './Column';

type Props = {
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: () => void;
};

const Section: FC<Props> = (props) => {
  const { theme } = useThemeContext();
  const { style, ...rest } = props;

  return (
    <Column
      style={{
        padding: '48px',
        backgroundColor: theme.color.background2,
        ...style,
      }}
      {...rest}
    />
  );
};

export default Section;
