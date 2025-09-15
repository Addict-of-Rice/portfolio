import { useEffect, useRef, useState, type FC } from 'react';
import Column from '../Structure/Column';
import { useThemeContext } from '../../providers/ThemeProvider';
import Row from '../Structure/Row';
import { C_p, C_s } from '../Typography/Typography';
import { Shell } from './Shell';
import { useNavigate } from 'react-router';

const Terminal: FC = () => {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const openRef = useRef(false);
  const [text, setText] = useState('');
  const shellRef = useRef<Shell | null>(null);
  const [cursor, setCursor] = useState('_');

  useEffect(() => {
    openRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (shellRef.current === null) shellRef.current = new Shell(setText, navigate);

    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();

      if (event.ctrlKey && event.key === '`') {
        setIsOpen((prev) => !prev);
      } else if (openRef.current) {
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
