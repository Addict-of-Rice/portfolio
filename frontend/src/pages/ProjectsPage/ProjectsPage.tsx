import type { FC } from 'react';
import Page from '../../components/Structure/Page';
import ExpandableSection from '../../components/Structure/Sections/ExpandableSection';
import { ExpandableWrapperProvider } from '../../components/Structure/Sections/ExpandableWrapper';
import Button from '../../components/Button/Button';

const ProjectsPage: FC = () => {
  return (
    <Page>
      <ExpandableWrapperProvider>
        <ExpandableSection
          title='Ever Young'
          description="The official website for my mother's fitness business."
          buttons={<Button text='Visit' onClick={() => {}} />}
          children="remove me"
        />
        <ExpandableSection
          title='npm'
          description='Projects for Node Package Manager'
        >
          <ExpandableWrapperProvider showPadding>
            <ExpandableSection
              title='React useHandleState'
              description='Custom React Hook for using handleChange with complex objects.'
              buttons={<Button text='Visit' onClick={() => {}} />}
            />
            <ExpandableSection
              title='React AlternatorWrapper'
              description="Custom wrapper component which allows a specific child's props to be overridden in order."
              buttons={<Button text='Visit' onClick={() => {}} />}
            />
          </ExpandableWrapperProvider>
        </ExpandableSection>
      </ExpandableWrapperProvider>
    </Page>
  );
};

export default ProjectsPage;
