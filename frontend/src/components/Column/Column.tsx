import type { CSSProperties, FC, ReactNode } from 'react';

type Props = {
  style?: CSSProperties;
  children?: ReactNode;
};

const Column: FC<Props> = ({ style, children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Column;
