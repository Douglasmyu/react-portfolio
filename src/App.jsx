
import './App.css'
import Nav from './components/Nav';
import About from './routes/About';
import Project from './routes/Project';
import Footer from './components/Footer';
import Blogs from './routes/Blogs';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div id ="nav" className = "min-h-screen flex bg-background">
      <div className='sidebar'>
        <Nav />
      </div>
    
      <div id ="body" className="fcontent" >
        <main className = "p-10 space-y-16">
          <section id = "about">
            <About />
          </section>
          <section id = "projects">
            <Project />
          </section>
          <section id = "blogs">
            <Blogs />
              <Routes>
                <Route path="/Blogs" element={<Blogs />} />
              </Routes>
          </section>

        <Footer />
      </main>
      
      </div>
      
    </div>
  )
}

export default App;
