import type { FC } from 'react';
import Row from '../Structure/Row';
import Typography from '../Typography/Typography';
import { useThemeContext } from '../../providers/ThemeProvider';
import Navbar from './Navbar';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import { useNavigate } from 'react-router';

const Header: FC = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();

  return (
    <Row
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBlock: '16px',
        paddingInline: '48px',
        borderBottom: `1px ${theme.color.text} solid`,
      }}
    >
      <Row style={{ alignItems: 'baseline' }} onClick={() => navigate('/')}>
        <Typography variant='h5'>Todd Collins - </Typography>
        <Typography variant='h4' style={{ color: theme.color.primary }}>
          Full Stack Dev
        </Typography>
      </Row>

      <Row style={{ alignItems: 'center' }}>
        <Navbar />
        <Typography variant='h5'> | </Typography>
        <SettingsIcon />
      </Row>
    </Row>
  );
};

export default Header;
