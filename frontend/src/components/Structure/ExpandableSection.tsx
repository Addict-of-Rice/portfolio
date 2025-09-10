import type { FC, ReactNode } from 'react';
import { C_h3, C_h6 } from '../Typography/Typography';
import Column from './Column';
import Section from './Section';
import Row from './Row';

type Props = {
  title: string;
  description: string;
  buttons?: ReactNode;
  children?: ReactNode;
};

const ExpandableSection: FC<Props> = ({ title, description, buttons, children }) => {
  return (
    <Section>
      <Column>
        <C_h3>{title}</C_h3>
        <C_h6>{description}</C_h6>
        {buttons && <Row>{buttons}</Row>}
      </Column>
    </Section>
  );
};

export default ExpandableSection;
