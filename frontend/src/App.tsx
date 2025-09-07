import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/Home/HomePage';
import CareerPage from './pages/CareerPage/CareerPage';
import EducationPage from './pages/EducationPage/EducationPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import CommandLine from './pages/CommandLine/CommandLine';
import SummaryPage from './pages/SummaryPage/SummaryPage';
import Layout from './components/Layout/Layout';
import ThemeProvider from './providers/ThemeProvider';
import { matrixTheme } from './themes/matrix-theme';
import './fonts/fonts.css';

function App() {
  return (
    <ThemeProvider initialTheme={matrixTheme} darkMode={true}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/career' element={<CareerPage />} />
            <Route path='/education' element={<EducationPage />} />
            <Route path='/cmd' element={<CommandLine />} />
            <Route path='/summary' element={<SummaryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
