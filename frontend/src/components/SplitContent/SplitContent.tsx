import type { FC, ReactNode } from 'react';
import Row from '../Structure/Row';
import Column from '../Structure/Column';
import { useThemeContext } from '../../providers/ThemeProvider';

export type SplitContentProps = {
  imgSrc: string;
  imgFirst?: boolean;
  children: ReactNode;
};

const SplitContent: FC<SplitContentProps> = ({ children, imgSrc, imgFirst }) => {
  const { theme } = useThemeContext();

  const Image: FC = () => (
    <img
      src={imgSrc}
      style={{
        objectFit: 'contain',
        width: '100%',
        height: '100%',
      }}
    />
  );

  return (
    <Row
      style={{
        boxSizing: 'border-box',
        width: '100%',
        padding: '24px',
        gap: '24px',
        backgroundColor: imgFirst ? theme.color.secondary : theme.color.background1,
      }}
    >
      <Column style={{ flex: 1 }}>{imgFirst ? <Image /> : children}</Column>
      <Column style={{ flex: 1 }}>{imgFirst ? children : <Image />}</Column>
    </Row>
  );
};

export default SplitContent;
