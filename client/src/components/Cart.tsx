import {Box, Typography} from '@mui/material'
import {useAppDispatch, useAppSelector} from '../hooks'
import {useEffect} from 'react'
import {fetchCurrentUser} from '../features/users/userSlice'
import {BsTrash3} from 'react-icons/bs'

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
        <Box>
          <Box>
            {currentUser.cart[0].products.map((p: any) => (
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

                <Box color='black'>
                  <BsTrash3 style={{marginBottom: '12px'}} />
                </Box>
              </Box>
            ))}
          </Box>
          <Box color='black'>
            {' Total'}
            {currentUser.cart[0].subTotal}{' '}
          </Box>
        </Box>
      ) : (
        <Typography color='black'>
          There are no products in your shopping cart, Continue shopping
        </Typography>
      )}
    </Box>
  )
}
