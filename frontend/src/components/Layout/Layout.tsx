import type { FC } from 'react';
import { Outlet } from 'react-router';
import Column from '../Structure/Column';
import Header from './Header';
import Footer from './Footer';
import Terminal from '../Terminal/Terminal';
import MatrixBackground from '../MatrixBackground/MatrixBackground';
import { useThemeContext } from '../../providers/ThemeProvider';

const Layout: FC = () => {
  const { theme } = useThemeContext();

  return (
    <Column
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: theme.color.background1,
        minHeight: '100vh',
        minWidth: '100vw',
        maxWidth: '100vw',
        overflowX: 'hidden',
        scrollbarWidth: 'thin',
      }}
    >
      <Column style={{ flex: 1 }}>
        <Header />
        <Outlet />
      </Column>

      <Footer />
      <MatrixBackground />
      <Terminal />
    </Column>
  );
};

export default Layout;
