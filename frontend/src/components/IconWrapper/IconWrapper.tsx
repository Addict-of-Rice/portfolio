import type { FC, ReactNode } from 'react';

type Props = {
  size: string;
  bgColor: string;
  border?: string;
  onClick?: () => void;
  children: ReactNode;
};

const IconWrapper: FC<Props> = ({ size, bgColor, border, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        height: size,
        backgroundColor: bgColor,
        borderRadius: '16px',
        border,
        cursor: onClick ? 'pointer' : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
