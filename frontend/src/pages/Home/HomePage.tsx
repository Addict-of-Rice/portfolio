import { type FC } from 'react';
import HeroSection from './HeroSection';
import TechStackSection from './TechStackSection';
import AboutMeSection from './AboutMeSection';
import AlternatorWrapper from '../../components/AlternatorWrapper/AlternatorWrapper';
import { useNavigate } from 'react-router';
import Page from '../../components/Structure/Page';
import AlignSection from '../../components/Structure/Sections/AlignSection';

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <HeroSection />
      <TechStackSection />
      <AboutMeSection />

      <AlternatorWrapper
        targetFC={AlignSection}
        propOverride={[{ align: 'right' }, { align: 'left' }]}
      >
        <AlignSection
          title='Personal Projects'
          description='My own projects which are not part of my official career nor education'
          onClick={() => navigate('/projects')}
        />
        <AlignSection
          title='Career'
          description='My contributions to projects during my professional career'
          onClick={() => navigate('/career')}
        />
        <AlignSection
          title='Education'
          description='External courses, university projects and results from my educational record'
          onClick={() => navigate('/education')}
        />
      </AlternatorWrapper>
    </Page>
  );
};

export default HomePage;
