import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import About from './pages/About'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
