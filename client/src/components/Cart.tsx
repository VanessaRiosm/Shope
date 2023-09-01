import {Box, Button, Typography} from '@mui/material'
import {useAppDispatch, useAppSelector} from '../hooks'
import {useEffect} from 'react'
import {fetchCurrentUser} from '../features/users/userSlice'
import {fetchRemoveFromCart} from '../features/cart/cartSlice'
import {BsTrash3} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export const Cart = () => {
  const {currentUser} = useAppSelector((state) => state.user)
  const {refresh} = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [refresh])

  return (
    <Box>
      {currentUser && currentUser.cart && currentUser.cart[0] ? (
        <Box overflow={'auto'}>
          <Box>
            {currentUser.cart[0].products.map((p: any) => (
              <Box key={p.productId} mt='4px' ml='4px' display='flex'>
                <Link
                  to={`/product/${p.productId}`}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <Box mt='4px' ml='4px' display='flex' color='black'>
                    <Box>
                      <img
                        src={p.image}
                        style={{width: '160px', height: '200px'}}
                      />
                    </Box>
                    <Box display='grid' ml='10px'>
                      <Typography>{p.name}</Typography>
                      <Box>${p.price}</Box>
                      <Box>Color: red</Box>
                      <Box>Qty: {p.quantity}</Box>
                    </Box>
                  </Box>
                </Link>
                <Button
                  sx={{color: '#4518D9'}}
                  onClick={() =>
                    dispatch(
                      fetchRemoveFromCart({
                        userId: currentUser.id,
                        productId: p.productId,
                      })
                    )
                  }
                >
                  <BsTrash3 style={{marginBottom: '12px'}} />
                </Button>
              </Box>
            ))}
          </Box>

          {currentUser.cart[0].subTotal > 0 ? (
            <Box display='flex'>
              <Box color='black' mt='40px' ml='20%'>
                {'TOTAL: '}
                {currentUser.cart[0].subTotal}
              </Box>

              <Button
                variant='contained'
                sx={{
                  bgcolor: '#4518D9',
                  color: 'white',
                  height: '30px',
                  mt: '34px',
                  ml: '10px',
                }}
              >
                CheckOut
              </Button>
            </Box>
          ) : (
            <Box display='flex' justifyContent='center' mt='30%'>
              <Typography color='black'>
                There are no products in your shopping cart
              </Typography>
            </Box>
          )}
        </Box>
      ) : (
        <Box display='flex' justifyContent='center' mt='30%'>
          <Typography color='black'>
            There are no products in your shopping cart
          </Typography>
        </Box>
      )}
    </Box>
  )
}
