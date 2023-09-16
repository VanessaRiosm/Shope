import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {Box, Button} from '@mui/material'
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
      const result: any = await stripe?.createPaymentMethod({
        type: 'card',
        card: payment,
      })
      setLoading(true)

      if (!result.error) {
        const {id} = result.paymentMethod
        dispatch(fetchMakePurchase({id}))
        payment.clear()
        setLoading(false)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button type='submit' disabled={!stripe}>
        {loading ? (
          <Box>
            <span>Loading...</span>
          </Box>
        ) : (
          'Pay'
        )}
      </Button>
    </form>
  )
}
