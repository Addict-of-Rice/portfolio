import { useRef, useState, type FC } from 'react';
import Row from '../../components/Structure/Row';
import Section from '../../components/Structure/Section';
import Typography from '../../components/Typography/Typography';
import { useGSAP } from '@gsap/react';
import { useThemeContext } from '../../providers/ThemeProvider';
import gsap from 'gsap';

const HeroSection: FC = () => {
  const { theme } = useThemeContext();
  const heroTextRef = useRef<HTMLDivElement>(null);

  const [initialLoad, setInitialLoad] = useState(true);
  const words = ['create', 'innovate', 'design', 'develop', 'build', 'profit'];
  const [wordIndex, setWordIndex] = useState(0);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setWordIndex((prev) => (prev + 1) % words.length);
        },
      });

      const duration = undefined;
      const speed = 0.6;

      const type = (target: string, value: string, rtl = false, delay = 0) =>
        tl.add(
          gsap.to(target, {
            ease: 'none',
            duration,
            text: {
              value,
              speed,
              preserveSpaces: true,
              rtl,
            },
            delay,
          })
        );

      const wait = () =>
        tl.add(
          gsap.fromTo(
            '.cursor',
            {
              opacity: 1,
            },
            {
              opacity: 1,
              duration: 3,
            }
          )
        );

      if (initialLoad) {
        tl.add(
          gsap.fromTo(
            '.prefix',
            {
              text: '',
            },
            {
              ease: 'none',
              duration,
              text: {
                value: "Let's ",
                speed,
                preserveSpaces: true,
              },
            }
          )
        );
        setInitialLoad(false);
      }

      type('.word', words[wordIndex]);
      type('.suffix', ' together');
      wait();
      type('.suffix', '', true);
      type('.word', '', true);
      wait();
    },
    { scope: heroTextRef, dependencies: [wordIndex] }
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
          {"Let's "}
        </Typography>
        <Typography className='word' variant='h2' style={{ color: theme.color.primary }} span>
          {''}
        </Typography>
        <Typography className='suffix' variant='h2'>
          {''}
        </Typography>
        <Typography className='cursor' variant='h2'>
          {'_'}
        </Typography>
      </Row>
    </Section>
  );
};

export default HeroSection;
