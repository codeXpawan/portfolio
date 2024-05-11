import './App.css'
import './styles/header.scss'
import Header  from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {

  return (
    <div className='flex h-screen px-8 py-4 flex-col justify-between'>
    <Header />
    <Home />
    <Footer />
    </div>
  )
}


export default App
