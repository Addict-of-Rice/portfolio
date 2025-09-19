import type { FC } from 'react';
import Typography, { C_h6, C_p } from '../../components/Typography/Typography';
import Column from '../../components/Structure/Column';
import Section from '../../components/Structure/Sections/Section';
import Row from '../../components/Structure/Row';
import { toast } from 'react-toastify';
import { copyToClipboard } from '../../utils/utils';

const AboutMeSection: FC = () => {
  const copyText = (text: string) => {
    copyToClipboard(text);
    toast(`"${text}" copied to clipboard`);
  };

  return (
    <Section id='about-me-section'>
      <Row style={{ justifyContent: 'space-between' }}>
        <Column>
          <Typography variant='h3' responsiveMin='h6'>
            About Me
          </Typography>

          <Column style={{ maxWidth: '960px' }}>
            <C_p>
              {"I'm a "}
              <C_p color='primary' span>
                Developer
              </C_p>
              . My purpose is to write code. I desire to create software that pushes humanity
              forward, and be recognised for my contributions.
            </C_p>
            <br />
            <C_p>
              My pursuit for excellence has often left me burnt out and heartbroken. Due to external
              factors, projects can get delayed, canceled or stuck in development hell. However,
              I've come to realise that within these experiences I still find the opportunity to
              learn and improve. Furthermore, once a project is deployed, I receive positive
              feedback. This makes the struggle worthwhile. Through persistence, I overcome.
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
        </Column>

        <Column>
          <Row style={{ flexDirection: 'row-reverse' }}>
            <Column style={{ maxWidth: '680px' }}>
              {/* <C_h3 responsiveMin='h6'>Contacts</C_h3> */}
              <C_h6 style={{ textAlign: 'justify', userSelect: 'text' }}>
                Phone:{' '}
                <C_p color='primary' onClick={() => copyText('+27 66 217 2759')} span>
                  +27 66 217 2759
                </C_p>
              </C_h6>
              <C_h6 style={{ textAlign: 'justify', userSelect: 'text' }}>
                Email:{' '}
                <C_p color='primary' onClick={() => copyText('toddyjasoncollins@gmail.com')} span>
                  toddyjasoncollins@gmail.com
                </C_p>
              </C_h6>
            </Column>
          </Row>
        </Column>
      </Row>
    </Section>
  );
};

export default AboutMeSection;
