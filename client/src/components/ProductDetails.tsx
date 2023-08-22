import {Box, Button} from '@mui/material'
import {NavBar} from './NavBar'
import {Footerr} from './Footer'
import {useAppDispatch, useAppSelector} from '../hooks'
import {useParams} from 'react-router-dom'
import {fetchGetProduct} from '../features/products/productSlice'
import {useEffect} from 'react'
import {clear} from '../features/products/productSlice'

export const ProductDetails = () => {
  const product = useAppSelector((state) => state.product.productDetails)
  const dispatch = useAppDispatch()
  const {id} = useParams()

  useEffect(() => {
    dispatch(fetchGetProduct(id))
    // window.scrollTo({top: 0, behavior: 'smooth'})

    return () => {
      dispatch(clear())
    }
  }, [])

  return (
    <Box>
      <NavBar />

      {product ? (
        <Box maxHeight='950px' display='flex' margin='10px 40px 10px 40px'>
          <img
            src={product.image}
            style={{
              width: '38%',
              height: '700px',
              border: '0.5px solid black',
            }}
          />

          <Box
            width='90%'
            padding='30px'
            maxHeight='500px'
            margin='20px'
            display='column'
          >
            <p style={{fontSize: '30px', fontWeight: 'bold'}}>
              {' '}
              {product.name}
            </p>
            <p style={{fontSize: '20px', fontWeight: 'bold'}}>
              {product.price}
            </p>
            <p style={{fontSize: '20px'}}> {product.description} </p>
            <Box>
              <Box>
                <Button
                  variant='contained'
                  style={{
                    backgroundColor: '#4518D9 ',
                  }}
                >
                  Buy
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}

      <Footerr />
    </Box>
  )
}
