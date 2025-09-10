import type { FC, ReactNode } from 'react';
import Column from '../Column';
import { useThemeContext } from '../../../providers/ThemeProvider';
import { createContext, useContext, useState } from 'react';

type ExpandableWrapperContextProps = {
  activeTitle: string | null;
  setActiveTitle: (index: string | null) => void;
};

const ExpandableWrapperContext = createContext<ExpandableWrapperContextProps | undefined>(
  undefined
);

export const useExpandableWrapperContext = () => {
  const context = useContext(ExpandableWrapperContext);
  if (!context)
    throw new Error('useExpandableWrapperContext must be used within a ExpandableWrapperProvider');
  return context;
};

type Props = {
  showPadding?: boolean;
  children: ReactNode;
};

export const ExpandableWrapperProvider: FC<Props> = ({ showPadding, children }) => {
  const { theme } = useThemeContext();
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  return (
    <ExpandableWrapperContext.Provider value={{ activeTitle, setActiveTitle }}>
      <Column
        style={
          showPadding
            ? {
                backgroundColor: theme.color.background1,
                borderRadius: '16px',
                paddingBlock: '40px',
                paddingInline: '24px',
                gap: '40px',
                cursor: 'default',
              }
            : { gap: '48px' }
        }
      >
        {children}
      </Column>
    </ExpandableWrapperContext.Provider>
  );
};
