import {Box, Typography} from '@mui/material'
import {useAppDispatch, useAppSelector} from '../hooks'
import {useEffect} from 'react'
import {fetchCurrentUser} from '../features/users/userSlice'

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
              <div key={p.productId} style={{backgroundColor: 'red'}}>
                <img src={p.image} style={{width: '160px', height: '160px'}} />
                {p.name}
                {p.price} <br />
                {p.quantity}
              </div>
            ))}
          </Box>
          <Box style={{backgroundColor: 'red'}}>
            {' Total'}
            {currentUser.cart[0].subTotal}{' '}
          </Box>
        </Box>
      ) : (
        <Typography>
          There are no products in your shopping cart, Continue shopping
        </Typography>
      )}
    </Box>
  )
}
