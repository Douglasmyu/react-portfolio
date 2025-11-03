
import './App.css'
import Nav from './components/Nav';
import About from './routes/About';
import Project from './routes/Project';
import Footer from './components/Footer';
import Links from './routes/Links';
import Blogs from './routes/Blogs';
import BlogPage from './routes/BlogPage';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="screen">
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Links" element={<Links />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
