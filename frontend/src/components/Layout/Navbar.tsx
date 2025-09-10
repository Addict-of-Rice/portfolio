import { Fragment, useMemo, type FC } from 'react';
import Row from '../Structure/Row';
import Typography from '../Typography/Typography';
import { useLocation, useNavigate } from 'react-router';
import { useThemeContext } from '../../providers/ThemeProvider';

const Navbar: FC = () => {
  const { theme } = useThemeContext();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = useMemo(() => location.pathname === '/', [location.pathname]);

  const getPathColour = (pathname: string) =>
    location.pathname === pathname ? theme.color.primary : theme.color.text;

  const paths = [
    {
      heading: 'About Me',
      pathname: '/',
      homeAction: () => {},
    },
    {
      heading: 'Projects',
      pathname: '/projects',
      homeAction: () => {},
    },
    {
      heading: 'Career',
      pathname: '/career',
      homeAction: () => {},
    },
    {
      heading: 'Education',
      pathname: '/education',
      homeAction: () => {},
    },
  ];

  return (
    <Row>
      {paths.map((path, index) => (
        <Fragment key={path.heading}>
          <Typography
            variant='h6'
            onClick={isHome ? () => path.homeAction : () => navigate(path.pathname)}
            style={{ color: getPathColour(path.pathname) }}
            responsiveMin='tiny'
          >
            {path.heading}
          </Typography>
          {index < paths.length - 1 && (
            <Typography variant='h6' responsiveMin='tiny'>
              {' | '}
            </Typography>
          )}
        </Fragment>
      ))}
    </Row>
  );
};

export default Navbar;
