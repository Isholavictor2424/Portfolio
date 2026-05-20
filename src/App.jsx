import './App.css'
import Navbar from './component/nav.jsx'
import Section1 from './component/Section1.jsx'
import About from './component/about.jsx'
import Skill from './component/skill.jsx'
import Contact from './component/contact.jsx'
import Portfolio from './component/portfolio.jsx'
import Footer from './component/Footer.jsx'

function App() {

  return (
<div className="scroll-smooth">
  <Navbar />
  <Section1 />
  <About />
  <Skill />
  <Portfolio />
  <Contact />
  <Footer />
</div>
)
}

export default App
