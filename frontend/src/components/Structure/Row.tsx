import type { CSSProperties, FC, ReactNode } from 'react';

type Props = {
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: () => void;
};

const Row: FC<Props> = ({ style, children, onClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        cursor: onClick ? 'pointer' : undefined,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Row;
