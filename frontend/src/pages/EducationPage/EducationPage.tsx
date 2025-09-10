import type { FC } from 'react';
import Button from '../../components/Button/Button';
import Page from '../../components/Structure/Page';
import ExpandableSection from '../../components/Structure/Sections/ExpandableSection';
import { ExpandableWrapperProvider } from '../../components/Structure/Sections/ExpandableWrapper';
import { C_p } from '../../components/Typography/Typography';

const EducationPage: FC = () => {
  return (
    <Page>
      <ExpandableWrapperProvider>
        <ExpandableSection
          title='Courses'
          description='from the Internet'
          buttons={<Button text='Visit' onClick={() => {}} />}
        >
          <ExpandableWrapperProvider showPadding>
            <ExpandableSection
              title='Learn React'
              year='(2023)'
              description='Srimba'
              buttons={<Button text='Visit' onClick={() => {}} />}
              round
            />
            <ExpandableSection
              title='Flutter Bootcamp'
              year='(2020)'
              description='The App Brewery'
              buttons={<Button text='Visit' onClick={() => {}} />}
              round
            />
          </ExpandableWrapperProvider>
        </ExpandableSection>
        <ExpandableSection
          title='Bachelor of Commerce: Computer Science and Information Systems'
          year='(2019-2022)'
          description='Nelson Mandela University'
          buttons={
            <>
              <Button text='Visit' onClick={() => {}} />
              <Button text='Download Record' onClick={() => {}} />
            </>
          }
        >
          <ExpandableWrapperProvider showPadding>
            <ExpandableSection
              title='Home and Away'
              description='House Sitting Flutter App'
              round
            >
              <C_p>
                During my 3rd year project, I was tasked to work in a team of 3 where we needed to
                design, implement and document a system utilising our learned skills. My team
                decided to take advantage of my prior experience with{' '}
                <C_p color='primary' span>
                  Flutter
                </C_p>{' '}
                to create a mobile application for House Sitting called “Home and Away”. The concept
                is to bring house sitters and home owners together. Depending on the user type, the
                house sitter or home owner would have appropriate options and layouts. We used{' '}
                <C_p color='primary' span>
                  SQLite
                </C_p>{' '}
                for our relational database.
              </C_p>
            </ExpandableSection>
            <ExpandableSection
              title='Quirkle'
              description='Android App with Java Server'
              round
            >
              <C_p>
                My final semester project for advanced programming required me to create an{' '}
                <C_p color='primary' span>
                  Android
                </C_p>{' '}
                mobile application implementation of the board game - “Quirkle”. The game is to be
                played on a local network with multiple players using their own Android devices.
                This required the creation of a{' '}
                <C_p color='primary' span>
                  Java backend server
                </C_p>{' '}
                as well as utilisation of user interface design, networking, multi-threading,
                efficient design patterns, and game logic.
              </C_p>
            </ExpandableSection>
          </ExpandableWrapperProvider>
        </ExpandableSection>
      </ExpandableWrapperProvider>
    </Page>
  );
};

export default EducationPage;
