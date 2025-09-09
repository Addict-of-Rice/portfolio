import { type FC } from 'react';
import Column from '../../components/Structure/Column';
import HeroSection from './HeroSection';

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
      <HeroSection />
    </Column>
  );
};

export default HomePage;
