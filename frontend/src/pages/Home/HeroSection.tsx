import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
} from 'react';
import Row from '../../components/Structure/Row';
import Section from '../../components/Structure/Section';
import Typography from '../../components/Typography/Typography';
import { useThemeContext } from '../../providers/ThemeProvider';
import { sleep } from '../../utils/utils';

const HeroSection: FC = () => {
  const { theme } = useThemeContext();
  const heroTextRef = useRef<HTMLDivElement>(null);

  const [initialLoad, setInitialLoad] = useState(true);

  const words = ['create', 'innovate', 'design', 'develop', 'build', 'profit'];
  const [wordIndex, setWordIndex] = useState(0);
  const currentWord = useMemo(() => words[wordIndex], [wordIndex]);

  const [prefix, setPrefix] = useState('');
  const [word, setWord] = useState('');
  const [suffix, setSuffix] = useState('');
  const [cursor, setCursor] = useState('_');

  const type = async (setValue: Dispatch<SetStateAction<string>>, result: string, delay = 100) => {
    for (let i = 0; i < result.length; i++) {
      setValue((prev) => prev + result[i]);
      await sleep(delay);
    }
  };

  const backspace = async (setValue: Dispatch<SetStateAction<string>>, delay = 100) => {
    let done = false;
    while (!done) {
      setValue((prev) => {
        if (prev.length > 0) return prev.slice(0, -1);
        done = true;
        return '';
      });
      await sleep(delay);
    }
  };

  const runRef = useRef<boolean>(false);

  useEffect(() => {
    let isActive = true;

    const run = async () => {
      while (isActive) {
        for (const word of words) {
          if (!runRef.current) {
            runRef.current = true;
            await type(setPrefix, "Let's ", 100);
          }
          await type(setWord, word, 120);
          await type(setSuffix, ' together', 100);

          await sleep(1000); // pause before backspace

          await backspace(setSuffix, 60);
          await backspace(setWord, 60);
        }
        run();
      }
    };

    if (!runRef.current) {
      run();
    }

    return () => {
      isActive = false; // stop loop if component unmounts
    };
  }, []);

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
