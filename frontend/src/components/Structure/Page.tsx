import type { FC, ReactNode } from 'react';
import Column from './Column';

type Props = { children: ReactNode };

const Page: FC<Props> = ({ children }) => {
  return (
    <Column
      style={{
        boxSizing: 'border-box',
        width: '100%',
        paddingBlock: '48px',
        gap: '48px',
      }}
    >
      {children}
    </Column>
  );
};

export default Page;
