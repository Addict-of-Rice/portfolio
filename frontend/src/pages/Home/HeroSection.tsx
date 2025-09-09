import { useRef, type FC } from 'react';
import Row from '../../components/Structure/Row';
import Section from '../../components/Structure/Section';
import Typography from '../../components/Typography/Typography';
import { useThemeContext } from '../../providers/ThemeProvider';
import { useTypewriter } from '../../hooks/useTypewriter';

const HeroSection: FC = () => {
  const { theme } = useThemeContext();
  const heroTextRef = useRef<HTMLDivElement>(null);

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
      <Row ref={heroTextRef}>
        <Typography className='prefix' variant='h2'>
          {prefix}
        </Typography>
        <Typography className='word' variant='h2' style={{ color: theme.color.primary }} span>
          {word}
        </Typography>
        <Typography className='suffix' variant='h2'>
          {suffix}
        </Typography>
        <Typography className='cursor' variant='h2'>
          {cursor}
        </Typography>
      </Row>
    </Section>
  );
};

export default HeroSection;
