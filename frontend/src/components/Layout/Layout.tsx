import type { FC } from 'react';
import { Outlet } from 'react-router';
import { useThemeContext } from '../../providers/ThemeProvider';
import Column from '../Structure/Column';
import Header from './Header';
import Footer from './Footer';
import Terminal from '../Terminal/Terminal';

const Layout: FC = () => {
  const { theme } = useThemeContext();

  return (
    <Column
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.color.background1,
        minHeight: '100vh',
        minWidth: '100vw',
        maxWidth: '100vw',
        overflowX: 'hidden',
        scrollbarWidth: 'thin'
      }}
    >
      <Column>
        <Header />
        <Outlet />
      </Column>

      <Footer />
      <Terminal />
    </Column>
  );
};

export default Layout;
