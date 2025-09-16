import type { FC } from 'react';
import Row from '../Structure/Row';
import { useThemeContext } from '../../providers/ThemeProvider';
import Navbar from './Navbar';

const Footer: FC = () => {
  const { theme } = useThemeContext();

  return (
    <Row
      style={{
        // backgroundColor: theme.color.background1,
        justifyContent: 'center',
        paddingBlock: '24px',
        borderTop: `1px ${theme.color.text} solid`,
      }}
    >
      <Navbar />
    </Row>
  );
};

export default Footer;
