
import './App.css'
import Nav from './components/Nav';
import About from './routes/About';
import Project from './routes/Project';
import Footer from './components/Footer';
import Blogs from './routes/Blogs';
import BlogPage from './routes/BlogPage';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div id ="nav" className = "min-h-screen bg-[#F7F0DE] flex">
      <div className="fixed">
        <Nav />
      </div>
    
      <div id ="body" className="content" >
        <main className = "p-10 space-y-16 pt-50">
          
          <Routes>
                <Route path="/" element ={
                  <>
                  <section id="about" className="min-h-screen bg-[#F7F0DE]">
                    <About />
                  </section>

                  <section id="projects" className="min-h-screen bg-[#F7F0DE]">
                    <Project />
                  </section>

                  <section id="blogs" className="min-h-screen bg-[#F7F0DE]">
                    <Blogs />
                  </section>

                  <Footer />
                </>
              }
              />

              <Route path="/blog/:slug" element={<BlogPage />} />
          </Routes>

      </main>
      
      </div>
      
    </div>
  )
}

export default App;
