import type { FC } from 'react';
import ExpandableSection from '../../components/Structure/ExpandableSection';
import Page from '../../components/Structure/Page';

const ProjectsPage: FC = () => {
  return (
    <Page>
      <ExpandableSection
        title='Ever Young'
        description="The official website for my mother's fitness business."
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

export default ProjectsPage;
