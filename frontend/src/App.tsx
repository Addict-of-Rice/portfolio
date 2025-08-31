import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Career from './pages/Career/Career';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import CommandLine from './pages/CommandLine/CommandLine';
import Summary from './pages/Summary/Summary';
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
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/career' element={<Career />} />
            <Route path='/education' element={<Education />} />
            <Route path='/cmd' element={<CommandLine />} />
            <Route path='/summary' element={<Summary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
