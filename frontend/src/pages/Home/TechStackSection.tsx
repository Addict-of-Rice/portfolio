import type { FC, ReactNode } from 'react';
import Section from '../../components/Structure/Section';
import Column from '../../components/Structure/Column';
import Typography from '../../components/Typography/Typography';
import { FaGithub, FaReact } from 'react-icons/fa';
import Row from '../../components/Structure/Row';
import IconWrapper from '../../components/IconWrapper/IconWrapper';
import FigmaIcon from '../../assets/icons/FigmaIcon';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { SiNestjs, SiPrisma } from 'react-icons/si';
import { BsStripe } from 'react-icons/bs';
import { openInNewTab } from '../../utils/utils';

const TechStackSection: FC = () => {
  type TechProps = {
    icon: ReactNode;
    title: string;
    link: string;
  };

  const Tech: FC<TechProps> = ({ title, icon, link }) => {
    return (
      <IconWrapper
        bgColor='black'
        size='6rem'
        border='1px white solid'
        onClick={() => openInNewTab(link)}
      >
        <Column style={{ justifyContent: 'center', alignItems: 'center', gap: '4px' }}>
          {icon}
          <Typography variant='small' style={{ textAlign: 'center' }}>
            {title}
          </Typography>
        </Column>
      </IconWrapper>
    );
  };

  const techList: TechProps[] = [
    {
      icon: <FigmaIcon />,
      title: 'Figma',
      link: 'https://www.figma.com/',
    },
    {
      icon: <BiLogoTypescript size={'3rem'} color='#007ACC' />,
      title: 'Typescript',
      link: 'https://www.typescriptlang.org/',
    },
    {
      icon: <FaReact size={'3rem'} color='#00FFFF' />,
      title: 'React',
      link: 'https://react.dev/',
    },
    {
      icon: <SiNestjs size={'3rem'} color='#EA285C' />,
      title: 'NestJS',
      link: 'https://nestjs.com/',
    },
    {
      icon: <SiPrisma size={'3rem'} color='white' />,
      title: 'Prisma',
      link: 'https://www.prisma.io/',
    },
    {
      icon: <BiLogoPostgresql size={'3rem'} color='#396C94' />,
      title: 'PostgreSQL',
      link: 'https://www.postgresql.org/',
    },
    {
      icon: <FaGithub size={'3rem'} color='white' />,
      title: 'GitHub Pages',
      link: 'https://pages.github.com',
    },
    {
      icon: <BsStripe size={'3rem'} color='#6860FF' />,
      title: 'Stripe',
      link: 'https://stripe.com/',
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
          <Tech key={tech.title} {...tech} />
        ))}
      </Row>
    </Section>
  );
};

export default TechStackSection;
