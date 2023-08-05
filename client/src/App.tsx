import {Routes, Route} from 'react-router-dom'

import {Home} from './components/Home'
import {ProductDetails} from './components/ProductDetails'
import {ProductList} from './components/ProductList'
import {AdminHome} from './components/admin/AdminHome'
import {Profile} from './components/Profile'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/productdetails' Component={ProductDetails} />
        <Route path='/productlist' Component={ProductList} />
        <Route path='/admin' Component={AdminHome} />
        <Route path='/profile' Component={Profile} />
      </Routes>
    </div>
  )
}

export default App
