import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {Box, Button} from '@mui/material'
import axios from 'axios'
import {useState, FormEvent} from 'react'

export const CheckoutForm = (props: any) => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('al menos sirve')
    const payment = elements?.getElement(CardElement)

    if (payment) {
      const result: any = await stripe?.createPaymentMethod({
        type: 'card',
        card: payment,
      })
      setLoading(true)

      if (!result.error) {
        const {id} = result.paymentMethod
        try {
          const {data} = await axios.post(
            'http://localhost:3000/purchase/checkout',
            {
              id,
              amount: props.amount,
            }
          )
          console.log(data)

          payment.clear()
        } catch (error) {
          console.log(error)
        }
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
