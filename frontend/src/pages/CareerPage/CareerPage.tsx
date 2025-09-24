import type { FC } from 'react';
import Page from '../../components/Structure/Page';
import ExpandableSection from '../../components/Structure/Sections/ExpandableSection';
import { ExpandableWrapperProvider } from '../../components/Structure/Sections/ExpandableWrapper';
import Button from '../../components/Button/Button';
import { C_p } from '../../components/Typography/Typography';
import { openInNewTab } from '../../utils/utils';

const CareerPage: FC = () => {
  return (
    <Page>
      <ExpandableWrapperProvider initialActiveTitle='AvoChoc'>
        <ExpandableSection
          title='AvoChoc'
          year='(2023-2025)'
          description='Software Development Company'
          buttons={<Button text='Visit' onClick={() => openInNewTab('https://avochoc.com/')} />}
        >
          <ExpandableWrapperProvider showPadding>
            <ExpandableSection
              title='Inqaku'
              description='MySAFA Soccer League (Admin Portal)'
              round
            >
              <C_p>
                In my first project working for Avocado Chocolate I was the{' '}
                <C_p color='primary' span>
                  sole
                </C_p>{' '}
                front-end developer for an admin portal for Inqaku. Inqaku helps manage soccer
                leagues for countries in Southern Africa. In this project I learned to create a
                website with{' '}
                <C_p color='primary' span>
                  React
                </C_p>{' '}
                according to the specifications of designers shown in{' '}
                <C_p color='primary' span>
                  Figma
                </C_p>{' '}
                as well as integration with the backend server using{' '}
                <C_p color='primary' span>
                  RESTful APIs
                </C_p>
                . The site functioned well. Unfortunately the project was canceled.
              </C_p>
            </ExpandableSection>
            <ExpandableSection
              title='WALL-E'
              description='Wallbox Service (Frontend and Mobile App)'
              buttons={
                <Button text='Visit' onClick={() => openInNewTab('https://www.wall-e.works/')} />
              }
              round
            >
              <C_p>
                WALL-E is a German company which offers wallboxes. The wallboxes track charging
                information for electric vehicles and can be managed by a website or an app. Here I
                used{' '}
                <C_p color='primary' span>
                  React
                </C_p>{' '}
                (frontend website),{' '}
                <C_p color='primary' span>
                  Kotlin
                </C_p>{' '}
                (Android app) for development. As part of a bigger team we used{' '}
                <C_p color='primary' span>
                  Jira
                </C_p>{' '}
                (ticket/sprint management),{' '}
                <C_p color='primary' span>
                  Postman
                </C_p>{' '}
                (endpoint testing),
                <C_p color='primary' span>
                  Google Meets
                </C_p>{' '}
                (morning stand up) and{' '}
                <C_p color='primary' span>
                  Slack
                </C_p>{' '}
                (quick communication). Also assisted with backend which used{' '}
                <C_p color='primary' span>
                  NestJS
                </C_p>
                .
              </C_p>
            </ExpandableSection>
            <ExpandableSection
              title='Tangibles'
              description='Coding Game (Progressive Web App)'
              buttons={
                <Button
                  text='Visit'
                  onClick={() => openInNewTab('https://tangible-games.com/games')}
                />
              }
              round
            >
              <C_p>
                I was assigned to a small team to help Tangibles recreate and improve an existing
                mobile game as a customisable web app. Tangibles, which already had multiple titles
                such as Boats and Rangers, needed a system where new titles could be created without
                rewriting a new game as well as be accessible on a website. These games are meant to
                be an affordable solution to teach children to think with a programmer's mindset.
              </C_p>
              <br />
              <C_p>
                The games include physical tokens which are placed by the player on any flat surface
                and then scanned with a camera to determine the player's actions. The project
                writing a game engine, and creating a custom algorithm and data structure to handle
                processing the user's tokens. PixiJS was used to help with smooth entity movement. I
                created a flexible frontend for different games to be played. The administrators
                would configure the game's assets, mechanics and level structures on a separate
                admin portal.
              </C_p>
              <br />
              <C_p>
                Later I implemented the website as a{' '}
                <C_p color='primary' span>
                  Progressive Web App
                </C_p>{' '}
                as we needed offline functionality provided by the precache. The{' '}
                <C_p color='primary' span>
                  PWA
                </C_p>{' '}
                also has the added benefit of behaving like a native mobile app. Different caching
                strategies were used along with cookies, cached storage, local storage and{' '}
                <C_p color='primary' span>
                  IndexedDB
                </C_p>{' '}
                in order to find a balance between performance and accuracy from the backend.
              </C_p>
            </ExpandableSection>
            <ExpandableSection
              title='Elyvate'
              description='Vehicle Manufacturing Collaboration (Frontend)'
              buttons={
                <Button text='Visit' onClick={() => openInNewTab('https://www.elyvate.ai/')} />
              }
              round
            >
              <C_p>
                Elyvate is a German Company which offers a website to help car manufacturers
                efficiently collaborate on resolving issues regarding their production line. This
                was a production environment with legacy code which needed new features, designs and
                maintenance. Heavy emphasis was placed on documentation, testing and coding
                standards due to many developers with different practices having worked on the
                project. Here I made use of{' '}
                <C_p color='primary' span>
                  Storybook
                </C_p>{' '}
                for managing front-end components,{' '}
                <C_p color='primary' span>
                  Cypress
                </C_p>{' '}
                for end-to-end testing and{' '}
                <C_p color='primary' span>
                  Jest
                </C_p>{' '}
                for unit testing.
              </C_p>
            </ExpandableSection>
            <ExpandableSection
              title='HR System'
              description='In-House System for HR (Frontend and Backend)'
              buttons={<Button text='Visit' onClick={() => openInNewTab('https://avochoc.com/')} />}
              round
            >
              <C_p>
                The HR System is an AvoChoc in-house employee management system. It serves as an
                alternative to{' '}
                <C_p color='primary' span>
                  Keka
                </C_p>
                . The system allows for admins to view and manage projects and employees. Employees
                are able to apply for leave. My most outstanding contribution to the project was the
                review form creator which allows an Admin to create a new review format which can
                then be assigned to employees for review by managers and peers. I assisted in
                creating and modifying{' '}
                <C_p color='primary' span>
                  RESTful API
                </C_p>{' '}
                endpoints between frontend and backend which used{' '}
                <C_p color='primary' span>
                  NestJS
                </C_p>{' '}
                and{' '}
                <C_p color='primary' span>
                  Prisma
                </C_p>
                .
              </C_p>
            </ExpandableSection>
          </ExpandableWrapperProvider>
        </ExpandableSection>
      </ExpandableWrapperProvider>
    </Page>
  );
};

export default CareerPage;
