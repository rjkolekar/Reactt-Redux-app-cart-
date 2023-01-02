import Product from "./Components/Product"
import Navbar from "./Components/Navbar"
import {BrowserRouter as Router,
Routes,Route} from 'react-router-dom'


function App() {


  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Product />}></Route>

      </Routes>
       
    </Router>
    
    </>
  )
}

export default App
