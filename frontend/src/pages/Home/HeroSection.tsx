import { type FC } from 'react';
import Row from '../../components/Structure/Row';
import Section from '../../components/Structure/Section';
import Typography from '../../components/Typography/Typography';
import { useThemeContext } from '../../providers/ThemeProvider';
import { useTypewriter } from '../../hooks/useTypewriter';

const HeroSection: FC = () => {
  const { theme } = useThemeContext();

  const { prefix, word, suffix, cursor } = useTypewriter(
    "Let's ",
    ['create', 'innovate', 'design', 'develop', 'build', 'profit'],
    ' together',
    '_'
  );

  return (
    <Section
      style={{
        height: '600px',
        justifyContent: 'space-between',
      }}
    >
      <Row style={{ justifyContent: 'flex-end' }}>GitHub Linkedin Slack Email WhatsApp</Row>
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
