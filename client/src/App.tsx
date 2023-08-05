import {Routes, Route} from 'react-router-dom'

import {Home} from './components/Home'
import {ProductDetails} from './components/ProductDetails'
import {ProductList} from './components/ProductList'
import {Profile} from './components/Profile'
// import {AdminHome} from './components/admin/AdminHome'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/productdetails' Component={ProductDetails} />
        <Route path='/productlist' Component={ProductList} />
        <Route path='/profile' Component={Profile} />
        {/* <Route path='/admin' Component={AdminHome} /> */}
      </Routes>
    </div>
  )
}

export default App
