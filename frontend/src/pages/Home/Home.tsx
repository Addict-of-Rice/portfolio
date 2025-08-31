import type { FC } from 'react';
import Column from '../../components/Column/Column';
import Typography from '../../components/Typography/Typography';
import { useThemeContext } from '../../providers/ThemeProvider';
import SplitContent from '../../components/SplitContent/SplitContent';
import Neo from '../../assets/neo.jpg';
import SplitAlternator from '../../components/SplitContent/SplitAlternator';

const Home: FC = () => {
  // const navigate = useNavigate();
  const { theme } = useThemeContext();

  return (
    <Column
      style={{
        boxSizing: 'border-box',
        width: '100%',
        padding: '48px',
        gap: '24px',
      }}
    >
      <Column>
        <Typography variant='h1'>Todd Collins - </Typography>
        <Typography variant='h2' style={{ color: theme.color.primary }}>
          Full Stack Software Developer
        </Typography>
      </Column>
      <Typography variant='h4'>Hi, I like to write code, create sofware and make money.</Typography>

      <Column>
        <Typography variant='h3'>Tech Stack</Typography>
      </Column>

      <SplitAlternator initialImgFirst>
        <SplitContent imgSrc={Neo}>
          <Typography variant='h3'>Projects</Typography>
          <Typography variant='p'>Personal projects which are not mentioned in Career and Education</Typography>
        </SplitContent>

        <SplitContent imgSrc={Neo}>
          <Typography variant='h3'>Career</Typography>
          <Typography variant='p'>Company projects and my professional journey as a developer.</Typography>
        </SplitContent>

        <SplitContent imgSrc={Neo}>
          <Typography variant='h3'>Education</Typography>
          <Typography variant='p'>Courses, University and School results + projects.</Typography>
        </SplitContent>

        <SplitContent imgSrc={Neo}>
          <Typography variant='h3'>CMD</Typography>
        </SplitContent>

        <SplitContent imgSrc={Neo}>
          <Typography variant='h3'>Summary (download)</Typography>
        </SplitContent>
      </SplitAlternator>

      <Column>
        <Typography variant='h3'>Footer</Typography>
      </Column>
    </Column>
  );
};

export default Home;
