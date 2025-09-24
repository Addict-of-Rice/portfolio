import type { FC } from 'react';
import type { IconWrapperProps } from '../../components/IconWrapper/IconWrapper';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import SlackIcon from '../../assets/icons/SlackIcon';
import IconWrapper from '../../components/IconWrapper/IconWrapper';
import Row from '../../components/Structure/Row';
import Section from '../../components/Structure/Sections/Section';
import GmailIcon from '../../assets/icons/GmailIcon';
import WhatsappIcon from '../../assets/icons/WhatsappIcon';
import { openInNewTab } from '../../utils/utils';

const ContactsSection: FC = () => {
  const techList: IconWrapperProps[] = [
    {
      icon: <FaGithub size={'3rem'} color='white' />,
      title: 'GitHub',
      onClick: () => openInNewTab('https://github.com/Addict-of-Rice'),
    },
    {
      icon: <FaLinkedin size={'3rem'} color='#126BC4' />,
      title: 'LinkedIn',
      onClick: () => openInNewTab('https://www.linkedin.com/in/todd-collins-2278a625a/'),
    },
    // {
    //   icon: <SlackIcon />,
    //   title: 'Slack',
    //   link: '',
    // },
    {
      icon: <GmailIcon />,
      title: 'Email',
      onClick: () => openInNewTab('mailto:toddyjasoncollins@gmail.com'),
    },
    {
      icon: <WhatsappIcon />,
      title: 'WhatsApp',
      onClick: () => {},
    },
  ];

  return (
    <Section
      id='contacts-section'
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
