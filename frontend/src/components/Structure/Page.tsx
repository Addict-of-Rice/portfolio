import type { FC, ReactNode } from 'react';
import Column from './Column';
import { useThemeContext } from '../../providers/ThemeProvider';

type Props = { children: ReactNode };

const Page: FC<Props> = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <Column
      style={{
        flex: 1,
        boxSizing: 'border-box',
        width: '100%',
        paddingBlock: '48px',
        gap: '48px',
        backgroundColor: theme.color.background1,
      }}
    >
      {children}
    </Column>
  );
};

export default Page;
