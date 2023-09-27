import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {Box, Button, Typography} from '@mui/material'
import {useAppDispatch} from '../hooks'
import {useState, FormEvent} from 'react'
import {fetchMakePurchase} from '../features/cart/cartSlice'

export const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payment = elements?.getElement(CardElement)

    if (payment) {
      setLoading(true)

      const result: any = await stripe?.createPaymentMethod({
        type: 'card',
        card: payment,
      })

      if (!result.error) {
        const {id} = result.paymentMethod
        dispatch(fetchMakePurchase({id}))
        payment.clear()
        setLoading(true)
      }
    }
  }

  return (
    <Box>
      <Box display='flex' justifyContent='center'>
        <Typography fontSize='18px' mb='25px'>
          Enter your card information
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <Box display='flex' justifyContent='center' mt='30px'>
          <Button
            type='submit'
            disabled={!stripe}
            variant='contained'
            sx={{bgcolor: '#4518D9'}}
          >
            {loading ? (
              <Box>
                <span>Loading...</span>
              </Box>
            ) : (
              'Make Payment'
            )}
          </Button>
        </Box>
      </form>
    </Box>
  )
}
