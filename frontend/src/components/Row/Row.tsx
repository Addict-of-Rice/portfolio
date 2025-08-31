import type { CSSProperties, FC, ReactNode } from 'react';

type Props = {
  style?: CSSProperties;
  children?: ReactNode;
};

const Row: FC<Props> = ({ style, children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Row;
