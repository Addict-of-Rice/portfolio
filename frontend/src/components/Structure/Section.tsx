import type { CSSProperties, FC, ReactNode, Ref } from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';
import Column from './Column';

type Props = {
  ref?: Ref<HTMLDivElement>;
  className?: string;
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
        cursor: props.onClick ? 'pointer' : undefined,
        ...style,
      }}
      {...rest}
    />
  );
};

export default Section;
