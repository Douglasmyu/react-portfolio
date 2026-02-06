
import './App.css'
import { useState } from 'react';
import Nav from './components/Nav';
import About from './sections/About';
import Project from './sections/Project';
import Footer from './components/Footer';
import Blogs from './sections/Blogs';
import BlogPage from './sections/BlogPage';
import { Routes,Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <Nav />
      
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />


      </Routes>
      <Footer />
      
    </div>
    // <div id ="nav" className = "min-h-screen bg-[#F7F0DE] flex">
    //   <div className="fixed">
    //     <Nav />
    //   </div>
    
    //   <div id ="body" className="" >
    //     <main >
          
    //       <Routes>
    //             <Route path="/" element ={
    //               <>
    //               <section id="about" className="min-h-screen bg-[#F7F0DE]">
    //                 <About />
    //               </section>

    //               <section id="projects" className="min-h-screen bg-[#F7F0DE]">
    //                 <Project />
    //               </section>

    //               <section id="blogs" className="min-h-screen bg-[#F7F0DE]">
    //                 <Blogs />
    //               </section>

    //               <Footer />
    //             </>
    //           }
    //           />

    //           <Route path="/blog/:slug" element={<BlogPage />} />
    //       </Routes>

    //   </main>
      
    //   </div>
      
    // </div>
  )
}

export default App;
