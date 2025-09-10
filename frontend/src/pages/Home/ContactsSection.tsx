import type { FC } from 'react';
import type { IconWrapperProps } from '../../components/IconWrapper/IconWrapper';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SlackIcon from '../../assets/icons/SlackIcon';
import IconWrapper from '../../components/IconWrapper/IconWrapper';
import Row from '../../components/Structure/Row';
import Section from '../../components/Structure/Sections/Section';
import GmailIcon from '../../assets/icons/GmailIcon';
import WhatsappIcon from '../../assets/icons/WhatsappIcon';

const ContactsSection: FC = () => {
  const techList: IconWrapperProps[] = [
    {
      icon: <FaGithub size={'3rem'} color='white' />,
      title: 'GitHub',
      link: '',
    },
    {
      icon: <FaLinkedin size={'3rem'} color='#126BC4' />,
      title: 'LinkedIn',
      link: '',
    },
    {
      icon: <SlackIcon />,
      title: 'Slack',
      link: '',
    },
    {
      icon: <GmailIcon />,
      title: 'Email',
      link: '',
    },
    {
      icon: <WhatsappIcon />,
      title: 'WhatsApp',
      link: '',
    },
  ];

  return (
    <Section
      style={{
        display: 'inline',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Row
        style={{
          // display: 'flex',
          // justifyContent: 'center',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 6rem)',
          justifyContent: 'space-around',
          alignContent: 'center',
          gap: '20px',
        }}
      >
        {techList.map((tech) => (
          <IconWrapper key={tech.title} {...tech} />
        ))}
      </Row>
    </Section>
  );
};

export default ContactsSection;
