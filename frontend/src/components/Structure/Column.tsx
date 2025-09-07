import type { CSSProperties, FC, ReactNode } from 'react';

type Props = {
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: () => void;
};

const Column: FC<Props> = ({ style, children, onClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        cursor: onClick ? 'pointer' : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Column;
