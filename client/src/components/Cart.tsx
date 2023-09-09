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
            <hr />
            {currentUser.cart[0].products.map((p: any) => (
              <Box
                key={p.productId}
                margin='4px 10px'
                display='flex'
                justifyContent='center'
                height='100%'
                bgcolor='#EEEEEE'
              >
                <Link
                  to={`/product/${p.productId}`}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <Box mt='4px' ml='10px' display='flex' color='black'>
                    <Box>
                      <img
                        src={p.image}
                        style={{width: '120px', height: '170px'}}
                      />
                    </Box>
                    <Typography
                      display='flex'
                      flexDirection='column'
                      ml='10px'
                      gap='15px'
                      width='180px'
                    >
                      <Typography fontWeight='bold'>{p.name}</Typography>
                      <Typography>${p.price}</Typography>
                      <Typography>Qty: {p.quantity}</Typography>
                    </Typography>
                  </Box>
                </Link>

                <Box
                  sx={{
                    color: '#4518D9',
                    display: 'flex',
                    alignItems: 'end',
                  }}
                >
                  <BsTrash3
                    style={{
                      cursor: 'pointer',
                      marginLeft: '-30px',
                      marginBottom: '10px',
                    }}
                    onClick={() =>
                      dispatch(
                        fetchRemoveFromCart({
                          userId: currentUser.id,
                          productId: p.productId,
                        })
                      )
                    }
                  />
                </Box>
              </Box>
            ))}
          </Box>

          {currentUser.cart[0].subTotal > 0 ? (
            <Box display='flex'>
              <Typography color='black' mt='40px' ml='17%' mb='20px'>
                {'TOTAL: $'}
                {currentUser.cart[0].subTotal}
              </Typography>

              <Button
                variant='contained'
                sx={{
                  bgcolor: '#4518D9',
                  color: 'white',
                  height: '30px',
                  mt: '36px',
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
