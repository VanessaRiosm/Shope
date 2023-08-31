import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  FormControl,
  Stack,
  SelectChangeEvent,
} from '@mui/material'
import {NavBar} from './NavBar'
import {Footerr} from './Footer'
import {useAppDispatch, useAppSelector} from '../hooks'
import {useParams} from 'react-router-dom'
import {fetchGetProduct} from '../features/products/productSlice'
import {fetchAddToCart} from '../features/cart/cartSlice'
import {useEffect, useState} from 'react'
import {clear} from '../features/products/productSlice'

export const ProductDetails = () => {
  const product = useAppSelector((state) => state.product.productDetails)
  const {rol, currentUser} = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const {id} = useParams()

  const addToCart = (data: any) => {
    if (rol === 'user' || rol === 'admin') {
      dispatch(fetchAddToCart(data))
    } else console.log('tienes que registrarte')
  }

  useEffect(() => {
    dispatch(fetchGetProduct(id))

    return () => {
      dispatch(clear())
    }
  }, [])

  const [Size, setSize] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value)
  }

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
              <FormControl variant='standard' sx={{m: 1, minWidth: 120}}>
                <InputLabel id='demo-simple-select-standard-label'>
                  Size
                </InputLabel>
                <Select
                  labelId='demo-simple-select-standard-label'
                  id='demo-simple-select-standard'
                  value={Size}
                  onChange={handleChange}
                  label='Size'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>xs</MenuItem>
                  <MenuItem value={20}>sm</MenuItem>
                  <MenuItem value={30}>lg</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Box>
                <Button
                  variant='contained'
                  style={{
                    backgroundColor: '#4518D9 ',
                  }}
                  onClick={() =>
                    addToCart({
                      userId: currentUser.id,
                      productId: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                      image: product.image,
                    })
                  }
                >
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          maxHeight='950px'
          display='flex'
          margin='10px 40px 10px 40px'
          gap='30px'
        >
          <Skeleton
            sx={{bgcolor: 'grey.900'}}
            variant='rectangular'
            width='30%'
            height='700px'
          />

          <Stack spacing={1} margin='10px 40px 10px 40px'>
            <Skeleton variant='text' sx={{fontSize: '2rem'}} />
            <Skeleton variant='rectangular' width={100} height={20} />
            <Skeleton variant='rectangular' width={210} height={60} />
            <Skeleton variant='rectangular' width={100} height={20} />
          </Stack>
        </Box>
      )}

      <Footerr />
    </Box>
  )
}
