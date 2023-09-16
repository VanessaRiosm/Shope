import {Box, Button, Modal, Typography} from '@mui/material'
import {useAppDispatch, useAppSelector} from '../hooks'
import {useEffect, useState} from 'react'
import {fetchCurrentUser} from '../features/users/userSlice'
import {fetchRemoveFromCart} from '../features/cart/cartSlice'
import {BsTrash3} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {CheckoutForm} from './CheckoutForm'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const stripePromise = loadStripe(
  'pk_test_51NqhokKKnhStKev8133Y6f9ae70Rx3hDKikmOOzHybSitgh2AGdlGTSk8OhMnAcfYzLlo1ouaCFxC2k0wBZTTRfz00epIr74r2'
)

export const Cart = () => {
  const {currentUser} = useAppSelector((state) => state.user)
  const {refresh} = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
                    <Box
                      display='flex'
                      flexDirection='column'
                      ml='10px'
                      gap='15px'
                      width='180px'
                    >
                      <Typography fontWeight='bold'>{p.name}</Typography>
                      <Typography>${p.price}</Typography>
                      <Typography>Qty: {p.quantity}</Typography>
                    </Box>
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

              <Elements stripe={stripePromise}>
                <Button
                  variant='contained'
                  sx={{
                    bgcolor: '#4518D9',
                    color: 'white',
                    height: '30px',
                    mt: '36px',
                    ml: '10px',
                  }}
                  onClick={handleOpen}
                >
                  CheckOut
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby='modal-modal-title'
                  aria-describedby='modal-modal-description'
                >
                  <Box sx={style}>
                    <CheckoutForm />
                  </Box>
                </Modal>
              </Elements>
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
