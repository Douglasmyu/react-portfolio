
import './App.css'
import Nav from './components/Nav';
import About from './routes/About';
import Project from './routes/Project';
import Footer from './components/Footer';
import Blogs from './routes/Blogs';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div id ="nav" className = "bg-[#F7F0DE] min-h-screen">
      <Nav />
      <div id ="body" className="flex-1 pl-56" >
        <main className = " ml-56 p-10 bg-[#F7F0DE] space-y-16">
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
