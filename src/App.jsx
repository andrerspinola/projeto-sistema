import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Error from './routes/Error'
import Home from './routes/Home'
import Cliente from './routes/Cliente'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <main>
      <Routes>
        <Route path="*" element={<Error/>}/>

     
        <Route path="/" element={<Home/>}/>

        
        <Route path="/cliente" element={<Cliente/>}/>

      </Routes>
    </main>
    <Footer/>
      
    </BrowserRouter>
  )
}

export default App
