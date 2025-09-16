import type { FC } from 'react';
import { C_h3, C_h6 } from '../../Typography/Typography';
import Column from '../Column';
import Section from './Section';
import Button from '../../Button/Button';
import Row from '../Row';

type Props = {
  id?: string;
  title: string;
  description: string;
  align?: 'left' | 'right';
  onClick: () => void;
};

const AlignSection: FC<Props> = ({ id, title, description, align = 'left', onClick }) => {
  return (
    <Section
      id={id}
      // onClick={onClick}
      style={{
        flexDirection: align === 'left' ? 'row' : 'row-reverse',
        minHeight: '400px',
      }}
    >
      <Column style={{ maxWidth: '680px' }}>
        <C_h3>{title}</C_h3>
        <C_h6 style={{ textAlign: 'justify' }}>{description}</C_h6>
        <Row style={{ marginTop: '36px' }}>
          <Button text='Explore' onClick={onClick} />
        </Row>
      </Column>
    </Section>
  );
};

export default AlignSection;
