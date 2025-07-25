import Navbar from './components/NavBar';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import StarBackground from './components/StarBackground';




function App() {

  return (
    <>
      <StarBackground />
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <section id="home"><Home /></section>
          <section id="projects"><Projects /></section>
          <section id="education"><Education /></section>
          <section id="experience"><Experience /></section>
          <section id="contact"><Contact /></section>
        </main>
      </div>
    </>
  );
}

export default App;