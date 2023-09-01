import {Box, Button, Typography} from '@mui/material'
import {useAppDispatch, useAppSelector} from '../hooks'
import {useEffect} from 'react'
import {fetchCurrentUser} from '../features/users/userSlice'
import {BsTrash3} from 'react-icons/bs'

export const Cart = () => {
  // const {currentUser} = useAppSelector((state) => state.user)
  const {refresh, cartItems, cartTotalAmount} = useAppSelector(
    (state) => state.cart
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [refresh])

  return (
    <Box>
      {cartItems && cartTotalAmount ? (
        <Box overflow={'auto'}>
          <Box>
            {cartItems.map((p: any) => (
              <Box
                key={p.productId}
                mt='4px'
                ml='4px'
                display='flex'
                color='black'
              >
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

                <Box color='#4518D9'>
                  <BsTrash3 style={{marginBottom: '12px'}} />
                </Box>
              </Box>
            ))}
          </Box>
          <Box display='flex'>
            <Box color='black' mt='40px' ml='20%'>
              {'TOTAL: '}
              {cartTotalAmount}
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
