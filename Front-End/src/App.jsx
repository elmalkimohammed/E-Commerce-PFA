import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import './App.css'

import ProductDetails from './pages/productDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="api/productdetails/:id" element={ <ProductDetails/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
