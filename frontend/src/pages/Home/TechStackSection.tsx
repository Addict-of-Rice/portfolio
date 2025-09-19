import type { FC } from 'react';
import Section from '../../components/Structure/Sections/Section';
import { FaGithub, FaReact } from 'react-icons/fa';
import Row from '../../components/Structure/Row';
import IconWrapper, { type IconWrapperProps } from '../../components/IconWrapper/IconWrapper';
import FigmaIcon from '../../assets/icons/FigmaIcon';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { SiNestjs, SiPrisma } from 'react-icons/si';
import { BsStripe } from 'react-icons/bs';
import { openInNewTab } from '../../utils/utils';

const TechStackSection: FC = () => {
  const techList: IconWrapperProps[] = [
    {
      icon: <FigmaIcon />,
      title: 'Figma',
      onClick: () => openInNewTab('https://www.figma.com/'),
    },
    {
      icon: <BiLogoTypescript size={'3rem'} color='#007ACC' />,
      title: 'Typescript',
      onClick: () => openInNewTab('https://www.typescriptlang.org/'),
    },
    {
      icon: <FaReact size={'3rem'} color='#00FFFF' />,
      title: 'React',
      onClick: () => openInNewTab('https://react.dev/'),
    },
    {
      icon: <SiNestjs size={'3rem'} color='#EA285C' />,
      title: 'NestJS',
      onClick: () => openInNewTab('https://nestjs.com/'),
    },
    {
      icon: <SiPrisma size={'3rem'} color='white' />,
      title: 'Prisma',
      onClick: () => openInNewTab('https://www.prisma.io/'),
    },
    // {
    //   icon: <BiLogoPostgresql size={'3rem'} color='#396C94' />,
    //   title: 'PostgreSQL',
    //   link: 'https://www.postgresql.org/',
    // },
    {
      icon: <FaGithub size={'3rem'} color='white' />,
      title: 'GitHub Pages',
      onClick: () => openInNewTab('https://pages.github.com'),
    },
    // {
    //   icon: <BsStripe size={'3rem'} color='#6860FF' />,
    //   title: 'Stripe',
    //   link: 'https://stripe.com/',
    // },
  ];

  return (
    <Section
      id='tech-stack-section'
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

export default TechStackSection;
