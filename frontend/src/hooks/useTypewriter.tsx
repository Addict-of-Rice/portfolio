import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import { sleep } from '../utils/utils';

export const useTypewriter = (
  prefixResult: string,
  words: string[],
  suffixResult: string,
  cursorResult: string
) => {
  const runRef = useRef<boolean>(false);
  const [prefix, setPrefix] = useState('');
  const [word, setWord] = useState('');
  const [suffix, setSuffix] = useState('');
  const [cursor, setCursor] = useState(cursorResult);

  const type = async (setValue: Dispatch<SetStateAction<string>>, result: string, delay = 60) => {
    for (let i = 0; i < result.length; i++) {
      setValue((prev) => prev + result[i]);
      await sleep(delay);
    }
  };

  const backspace = async (setValue: Dispatch<SetStateAction<string>>, delay = 30) => {
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

  const flashCursor = async (times: number = 1, delay = 500) => {
    for (let i = 0; i < times; i++) {
      setCursor('');
      await sleep(delay);
      setCursor(cursorResult);
      await sleep(delay);
    }
  };

  useEffect(() => {
    const run = async () => {
      for (const word of words) {
        if (!runRef.current) {
          runRef.current = true;
          await type(setPrefix, prefixResult);
        }
        await type(setWord, word);
        await type(setSuffix, suffixResult);

        await flashCursor(4);

        await backspace(setSuffix);
        await backspace(setWord);

        await flashCursor(1);
      }
      run();
    };

    if (!runRef.current) {
      run();
    }
  }, []);

  return {
    prefix,
    word,
    suffix,
    cursor,
  };
};
