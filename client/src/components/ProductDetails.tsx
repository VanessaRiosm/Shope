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
  Typography,
} from '@mui/material'
import {NavBar} from './NavBar'
import {Footerr} from './Footer'
import {useAppDispatch, useAppSelector} from '../hooks'
import {useParams} from 'react-router-dom'
import {fetchGetProduct} from '../features/products/productSlice'
import {fetchAddToCart} from '../features/cart/cartSlice'
import {useEffect, useState} from 'react'
import {clear} from '../features/products/productSlice'
import 'react-toastify/dist/ReactToastify.css'
import {toast} from 'react-toastify'

export const ProductDetails = () => {
  const product = useAppSelector((state) => state.product.productDetails)
  const {rol, currentUser} = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const {id} = useParams()

  const addToCart = (data: any) => {
    if (rol === 'user' || rol === 'admin') {
      dispatch(fetchAddToCart(data))
    } else {
      notifyRegister()
    }
  }

  const notifyRegister = () => {
    toast.error('🦄 Wow so easy!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  useEffect(() => {
    dispatch(fetchGetProduct(id))
    window.scrollTo({top: 0, behavior: 'smooth'})
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
        <Box display='flex' justifyContent='center'>
          <Box
            maxHeight='650px'
            maxWidth='1100px'
            display='flex'
            justifyContent='center'
            margin='80px 40px 10px 40px'
          >
            <img
              src={product.image}
              style={{
                width: '40%',
                height: '650px',
              }}
            />

            <Box
              width='35%'
              padding='20px'
              maxHeight='650px'
              display='flex'
              flexDirection='column'
            >
              <p style={{fontSize: '30px', fontWeight: 'bold'}}>
                {' '}
                {product.name}
              </p>
              <p style={{fontSize: '20px', fontWeight: 'bold'}}>
                USD ${product.price}
              </p>

              <Box>
                <FormControl variant='standard' sx={{m: 1, minWidth: 160}}>
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
                <Box mt='40px'>
                  <Button
                    fullWidth
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
              <Box mt='40px'>
                <Typography fontSize='20px'> Description: </Typography>
                <Typography fontSize='15px'> {product.description} </Typography>
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
