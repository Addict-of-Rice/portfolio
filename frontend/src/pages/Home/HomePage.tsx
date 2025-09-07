import type { FC } from 'react';
import Column from '../../components/Structure/Column';
import Row from '../../components/Structure/Row';
import Typography from '../../components/Typography/Typography';
import Section from '../../components/Structure/Section';

const HomePage: FC = () => {

  return (
    <Column
      style={{
        boxSizing: 'border-box',
        width: '100%',
        paddingBlock: '48px',
        gap: '48px',
      }}
    >
      <Section
        style={{
          height: '600px',
          justifyContent: 'space-between',
        }}
      >
        <Row style={{ justifyContent: 'flex-end' }}>GitHub Linkedin Slack Email WhatsApp</Row>
        <Row>
          {/* create, innovate, design, develop, build, profit */}
          <Typography className="HeroText" variant='h2'>Let's _______ together</Typography>
        </Row>
      </Section>
    </Column>
  );
};

export default HomePage;
