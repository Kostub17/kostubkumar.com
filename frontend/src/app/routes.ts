import { createBrowserRouter } from 'react-router';
import Root from './components/Root';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'experience', Component: Experience },
      { path: 'education', Component: Education },
      { path: 'projects', Component: Projects },
      { path: 'skills', Component: Skills },
      { path: 'interests', Component: Interests },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
