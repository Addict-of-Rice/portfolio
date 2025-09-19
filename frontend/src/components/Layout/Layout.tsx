import type { FC } from 'react';
import { Outlet } from 'react-router';
import Column from '../Structure/Column';
import Header from './Header';
import Footer from './Footer';
import Terminal from '../Terminal/Terminal';
import MatrixBackground from '../MatrixBackground/MatrixBackground';
import { ToastContainer } from 'react-toastify';
// import { useThemeContext } from '../../providers/ThemeProvider';
import './Toast.css';

const Layout: FC = () => {
  // const { theme } = useThemeContext();

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

      <ToastContainer theme='dark' position='top-center' />
    </Column>
  );
};

export default Layout;
