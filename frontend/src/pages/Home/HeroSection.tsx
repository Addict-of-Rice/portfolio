import { type FC } from 'react';
import Row from '../../components/Structure/Row';
import Typography from '../../components/Typography/Typography';
import { useThemeContext } from '../../providers/ThemeProvider';
import { useTypewriter } from '../../hooks/useTypewriter';
import Section from '../../components/Structure/Sections/Section';

const HeroSection: FC = () => {
  const { theme } = useThemeContext();

  const { prefix, word, suffix, cursor } = useTypewriter(
    "Let's ",
    ['create', 'innovate', 'design', 'develop', 'build', 'implement', 'succeed', 'profit'],
    ' together',
    '_'
  );

  return (
    <Section
      id='hero-section'
      style={{
        height: '600px',
        justifyContent: 'space-between',
      }}
    >
      <Row style={{ justifyContent: 'flex-end' }}></Row>
      <Row>
        <Typography className='prefix' variant='h2' responsiveMin='p'>
          {prefix}
        </Typography>
        <Typography
          className='word'
          variant='h2'
          style={{ color: theme.color.primary }}
          responsiveMin='p'
        >
          {word}
        </Typography>
        <Typography className='suffix' variant='h2' responsiveMin='p'>
          {suffix}
        </Typography>
        <Typography className='cursor' variant='h2' responsiveMin='p'>
          {cursor}
        </Typography>
      </Row>
    </Section>
  );
};

export default HeroSection;
