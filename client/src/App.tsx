import {Routes, Route, Navigate} from 'react-router-dom'

import {Home} from './components/Home'
import {ProductDetails} from './components/ProductDetails'
import {ProductList} from './components/ProductList'
import {Profile} from './components/Profile'
import {Login} from './components/Login'
import {Register} from './components/Register'
import {AdminHome} from './components/AdminHome'
import {NotFound} from './components/NotFound'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/product/:id' Component={ProductDetails} />
        <Route path='/productlist' Component={ProductList} />
        <Route path='/profile' Component={Profile} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/admin' Component={AdminHome} />
        <Route path='*' element={<Navigate to='/404' />} />
        <Route path='/404' Component={NotFound} />
      </Routes>
    </div>
  )
}

export default App
