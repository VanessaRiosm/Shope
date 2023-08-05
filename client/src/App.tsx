import {Routes, Route} from 'react-router-dom'

import {Home} from './components/Home'
import {ProductDetails} from './components/ProductDetails'
import {ProductList} from './components/ProductList'
import {adminHome} from './components/admin/adminHome'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/productdetails' Component={ProductDetails} />
        <Route path='/productlist' Component={ProductList} />
        <Route path='/admin' Component={adminHome} />
      </Routes>
    </div>
  )
}

export default App
