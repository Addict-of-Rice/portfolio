import { type FC } from 'react';
import HeroSection from './HeroSection';
import TechStackSection from './TechStackSection';
import AboutMeSection from './AboutMeSection';
import AlternatorWrapper from '../../components/AlternatorWrapper/AlternatorWrapper';
import { useNavigate } from 'react-router';
import Page from '../../components/Structure/Page';
import AlignSection from '../../components/Structure/Sections/AlignSection';
import ContactsSection from './ContactsSection';

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <HeroSection />
      <ContactsSection />
      <AboutMeSection />
      <TechStackSection />

      <AlternatorWrapper
        targetFC={AlignSection}
        propOverride={[{ align: 'right' }, { align: 'left' }]}
      >
        <AlignSection
          id='projects-section'
          title='Personal Projects'
          description='My own projects which are not part of my official career nor education'
          onClick={() => navigate('/projects')}
        />
        <AlignSection
          id='career-section'
          title='Career'
          description='My contributions to projects during my professional career'
          onClick={() => navigate('/career')}
        />
        <AlignSection
          id='education-section'
          title='Education'
          description='External courses, university projects and results from my educational record'
          onClick={() => navigate('/education')}
        />
      </AlternatorWrapper>
    </Page>
  );
};

export default HomePage;
