import type { FC, ReactNode } from 'react';
import Column from './Column';
import { useThemeContext } from '../../providers/ThemeProvider';

type Props = {
  children: ReactNode;
};

const SectionWrapper: FC<Props> = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <Column
      style={{
        backgroundColor: theme.color.background1,
        borderRadius: '16px',
        paddingBlock: '40px',
        gap: '40px',
      }}
    >
      {children}
    </Column>
  );
};

export default SectionWrapper;
