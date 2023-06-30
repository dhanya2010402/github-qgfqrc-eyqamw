import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';

export default function App() {
  return (
    <Router>
      <NavBar />
      <div id="content">
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
    </Router>
  );
}
