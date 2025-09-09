import type { CSSProperties, FC, ReactNode, Ref } from 'react';

type Props = {
  ref?: Ref<HTMLDivElement>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: () => void;
};

const Column: FC<Props> = ({ ref, className, style, children, onClick }) => {
  return (
    <div
      ref={ref}
      className={className}
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
