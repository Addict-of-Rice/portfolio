import { useEffect, useRef, useState, type FC } from 'react';
import Column from '../Structure/Column';
import { useThemeContext } from '../../providers/ThemeProvider';
import Row from '../Structure/Row';
import { C_p, C_s } from '../Typography/Typography';
import { Shell } from './Shell';
import { useNavigate } from 'react-router';
import { sleep } from '../../utils/utils';

const Terminal: FC = () => {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const openRef = useRef(false);
  const [text, setText] = useState('');
  const shellRef = useRef<Shell | null>(null);
  const [cursor, setCursor] = useState('_');
  const cursorInstanceRef = useRef(0);
  const flashDelayRef = useRef(100);

  useEffect(() => {
    openRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    const flashCursor = async () => {
      const instance = cursorInstanceRef.current;
      if (flashDelayRef.current > 0) {
        setCursor('_');
        flashDelayRef.current -= 1;
        await sleep(1);
      } else {
        setCursor((prev) => (prev === '_' ? '' : '_'));
        await sleep(500);
      }
      if (instance === cursorInstanceRef.current) flashCursor();
    };

    const delayFlashing = () => {
      flashDelayRef.current = 100;
      cursorInstanceRef.current += 1;
      flashCursor();
    };

    if (shellRef.current === null) {
      shellRef.current = new Shell(setText, navigate);
      flashCursor();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === '`') {
        setIsOpen((prev) => !prev);
      } else if (openRef.current) {
        event.preventDefault();
        delayFlashing();
        if (event.ctrlKey && event.key.toLowerCase() === 'c') {
          shellRef.current!.exit();
        } else if (event.key === 'Enter') {
          shellRef.current!.execute();
        } else if (event.key === 'Backspace') {
          shellRef.current!.backspace();
        } else if (event.key.length === 1) {
          shellRef.current!.type(event.key);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Column
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: isOpen ? '100%' : '140px',
        height: isOpen ? '50vh' : '36px',
      }}
    >
      <Row
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: '140px',
          height: '36px',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopRightRadius: '12px',
          backgroundColor: theme.color.background1,
        }}
      >
        <C_s>Ctrl + `</C_s>
      </Row>

      {isOpen && (
        <Column
          style={{
            backgroundColor: theme.color.background1,
            height: '100%',
            padding: '16px',
            flexDirection: 'column-reverse',
            overflow: 'hidden',
          }}
        >
          <C_p>
            {text}
            {cursor}
          </C_p>
        </Column>
      )}
    </Column>
  );
};

export default Terminal;
