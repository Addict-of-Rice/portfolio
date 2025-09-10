import type { FC } from 'react';
import Section from '../../components/Structure/Section';
import Typography, { C_p } from '../../components/Typography/Typography';
import Column from '../../components/Structure/Column';

const AboutMeSection: FC = () => {
  return (
    <Section>
      <Typography variant='h3' responsiveMin='h6'>
        About Me
      </Typography>

      <Column style={{ maxWidth: '960px' }}>
        <C_p>
          {"I'm a "}
          <C_p color='primary' span>
            Full Stack Developer
          </C_p>
          . My purpose is to write code. I desire to create software that pushes humanity forward,
          and be recognised for my contributions.
        </C_p>
        <br />
        <C_p>
          In my journey as a software developer, striving for excellence has often left me burnt out
          and heartbroken. Due to external factors, projects can get delayed, canceled or stuck in
          development hell. However, I've come to realise that within these experiences I still find
          the opportunity to learn and improve. Furthermore, when a project gets deployed and I
          receive positive feedback it makes the struggle worthwhile.
        </C_p>
        <br />
        <C_p>
          {'I currently reside in '}
          <C_p color='primary' span>
            East London, South Africa
          </C_p>
          {', but am willing to contribute both '}
          <C_p color='primary' span>
            online and in-person
          </C_p>
          . I am grateful to possess a South African, Irish and Taiwanese passport.
        </C_p>
        <br />
      </Column>
    </Section>
  );
};

export default AboutMeSection;
