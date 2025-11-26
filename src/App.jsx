
import './App.css'
import Nav from './components/Nav';
import About from './routes/About';
import Project from './routes/Project';
import Footer from './components/Footer';
import Blogs from './routes/Blogs';
import BlogPage from './routes/BlogPage';
import { Routes,Route } from 'react-router-dom';

// // take out border of navbar to be transparent with the container or whole component

function App() {
  return (
    <div className = "flex min-h-screen bg-[#F7F0DE]">
      <Nav />
      <main className = "flex-1 ml-56 p-10 bg-[#F7F0DE] min-h-screen">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
        </Routes>
        <Footer />
      </main>
      
    </div>
  )
}

export default App;
