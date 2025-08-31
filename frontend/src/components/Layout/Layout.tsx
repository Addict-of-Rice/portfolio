import type { FC } from 'react';
import { Outlet } from 'react-router';
import { useThemeContext } from '../../providers/ThemeProvider';

const Layout: FC = () => {
  const { theme } = useThemeContext();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.color.background,
        minHeight: '100vh',
      }}
    >
      <Outlet />
    </div>
  );
};

export default Layout;
