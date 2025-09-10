import { useEffect, useMemo, useRef, useState, type FC } from 'react';
import Column from '../Structure/Column';
import { useThemeContext } from '../../providers/ThemeProvider';
import Row from '../Structure/Row';
import { C_p, C_s } from '../Typography/Typography';

const Console: FC = () => {
  const { theme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const lineRef = useRef('');
  const [text, setText] = useState('> ');
  const [cursor, setCursor] = useState('_');

  const print = () => {};

  useEffect(() => {
    console.log('line: ', lineRef.current);
    console.log('text: ', text);
  }, [text]);

  const type = (key: string) => {
    setText((prev) => prev + key);
    lineRef.current = lineRef.current + key;
  };

  const backspace = () => {
    if (lineRef.current.length > 0) {
      setText((prev) => prev.slice(0, -1));
      lineRef.current = lineRef.current.slice(0, -1);
    }
  };

  const enter = () => {
    setText((prev) => prev + '\n');
    lineRef.current = '';
    
    setText((prev) => prev + '> ');
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();

      if (event.ctrlKey && event.key === '`') {
        setIsOpen((prev) => !prev);
      } else if (event.key === 'Enter') {
        enter();
      } else if (event.key === 'Backspace') {
        backspace();
      } else if (event.key.length === 1) {
        type(event.key);
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
          style={{ backgroundColor: theme.color.background1, height: '100%', padding: '16px' }}
        >
          <C_p>Type "help"</C_p>
          <C_p>
            {text}
            {cursor}
          </C_p>
        </Column>
      )}
    </Column>
  );
};

export default Console;
