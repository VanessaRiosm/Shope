import {Routes, Route} from 'react-router-dom'

import {Home} from './components/Home'
import {ProductDetails} from './components/ProductDetails'
import {ProductList} from './components/ProductList'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/productdetails' Component={ProductDetails} />
        <Route path='/productlist' Component={ProductList} />
      </Routes>
    </div>
  )
}

export default App
