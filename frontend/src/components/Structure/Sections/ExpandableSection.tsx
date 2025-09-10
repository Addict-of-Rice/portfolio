import { useMemo, type FC, type ReactNode } from 'react';
import { C_h2, C_h3, C_h6, C_p } from '../../Typography/Typography';
import Column from '../Column';
import Section from './Section';
import Row from '../Row';
import { useExpandableWrapperContext } from './ExpandableWrapper';
import { useThemeContext } from '../../../providers/ThemeProvider';

type Props = {
  title: string;
  year?: string;
  description: string;
  buttons?: ReactNode;
  round?: boolean;
  children?: ReactNode;
};

const ExpandableSection: FC<Props> = ({ title, year, description, buttons, round, children }) => {
  const { theme } = useThemeContext();
  const { activeTitle, setActiveTitle } = useExpandableWrapperContext();
  const expanded = useMemo(() => title === activeTitle, [activeTitle]);

  return (
    <Section
      onClick={() => !expanded && setActiveTitle(title)}
      style={{
        position: 'relative',
        gap: '64px',
        cursor: expanded || !children ? 'default' : 'pointer',
        borderRadius: round ? '16px' : 0,
      }}
    >
      <Column>
        <Row style={{ alignItems: 'baseline' }}>
          <C_h2 responsiveMin='h4'>{title}</C_h2>
          {year && <C_h3 responsiveMin='h5'>{` ${year}`}</C_h3>}
        </Row>
        <C_h6 style={{ marginTop: '4px', maxWidth: '800px' }}>{description}</C_h6>
        {buttons && <Row style={{ marginTop: '48px', gap: '24px' }}>{buttons}</Row>}
      </Column>

      {expanded && children && <Column style={{ marginBottom: '40px' }}>{children}</Column>}

      {children && (
        <Row
          onClick={() => setActiveTitle(expanded ? null : title)}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '140px',
            height: '32px',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: '12px',
            backgroundColor: theme.color.background1,
          }}
        >
          <C_p>{expanded ? '-' : '+'}</C_p>
        </Row>
      )}
    </Section>
  );
};

export default ExpandableSection;
