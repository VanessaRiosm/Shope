import {Box, Typography} from '@mui/material'
import {useAppSelector} from '../hooks'

export const Cart = () => {
  const {currentUser} = useAppSelector((state) => state.user)

  // console.log(currentUser)
  return (
    <Box>
      {currentUser.cart && currentUser.cart.length > 0 ? (
        <Box>
          {currentUser.cart.map((p: any) => (
            <div>{p}</div>
          ))}
        </Box>
      ) : (
        <Typography>
          There are no products in your shopping cart, Continue shopping
        </Typography>
      )}
    </Box>
  )
}
