import { useEffect, useRef, type FC } from 'react';
import { sleep } from '../../utils/utils';

const MatrixBackground: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instanceRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d')!;
    context.fillStyle = 'rgba(0, 0, 0, 1)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    const katakana =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const english = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const glyphs = katakana + english + numbers;
    const fontSize = 16;

    const resize = () => {
      const instance = ++instanceRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = canvas.width / fontSize;
      const rainDrops: number[] = [];

      for (let i = 0; i < columns; i++) {
        rainDrops[i] = 1;
      }

      const draw = async () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.15)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';

        for (let i = 0; i < columns; i++) {
          const text = glyphs.charAt(Math.floor(Math.random() * glyphs.length));
          context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }

        if (instance === instanceRef.current) {
          await sleep(60);
          draw();
        }
      };
      draw();
    };
    resize();
    window.addEventListener('resize', resize);

    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default MatrixBackground;
