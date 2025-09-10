import type { FC } from 'react';
import Page from '../../components/Structure/Page';
import ExpandableSection from '../../components/Structure/ExpandableSection';

const CareerPage: FC = () => {
  return (
    <Page>
      <ExpandableSection
        title='AvoChoc (2023-2025)'
        description="Software Development Company"
      />
      <ExpandableSection
        title='React useHandleState'
        description='Custom React Hook for using handleChange with complex objects.'
      />
      <ExpandableSection
        title='React AlternatorWrapper'
        description="Custom wrapper component which allows a specific child's props to be overridden in order."
      />
    </Page>
  );
};

export default CareerPage;
