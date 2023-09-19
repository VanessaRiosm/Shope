import {Box, Typography} from '@mui/material'
import bannerknitted from '../images/bannerknitted.png'
import responsiveknitted from '../images/responsivebannerknitted.png'
import banneroffer from '../images/banneroffer.png'
import responsiveoffer from '../images/responsivebanneroffer.png'
import {GiAmpleDress} from 'react-icons/gi'
import {GrDeliver} from 'react-icons/gr'
import visa from '../images/visa.png'
import mastercard from '../images/mastercard.png'
import maestro from '../images/maestro.png'
import paypal from '../images/paypal.png'
import american from '../images/american-express.png'
import mercadopago from '../images/mercadoPago.png'
import {Link} from 'react-router-dom'

export const Promotion = (props: any) => {
  return (
    <Box>
      {props.knit === 'no' ? (
        <Link
          to={`/categories/bigsale`}
          style={{textDecoration: 'none', color: 'black'}}
        >
          <Box height='700px' mt='40px' style={{cursor: 'pointer'}}>
            <picture>
              <source srcSet={responsiveoffer} media='(max-width: 900px)' />
              <source srcSet={banneroffer} media='(min-width: 900px)' />
              <img
                src={responsiveoffer}
                alt='MDN'
                style={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                }}
              />
            </picture>
          </Box>
        </Link>
      ) : props.knit === 'si' ? (
        <Link
          to={`/categories/threads`}
          style={{textDecoration: 'none', color: 'black'}}
        >
          <Box height='700px' mt='40px' style={{cursor: 'pointer'}}>
            <picture>
              <source srcSet={responsiveknitted} media='(max-width: 900px)' />
              <source srcSet={bannerknitted} media='(min-width: 900px)' />
              <img
                src={responsiveknitted}
                alt='MDN'
                style={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                }}
              />
            </picture>
          </Box>
        </Link>
      ) : (
        <Box>
          <Box
            height='150px'
            mt='40px'
            mb='30px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            bgcolor='#F7F7F8'
            gap='20%'
          >
            <Box display='flex' alignItems='center' gap='15px'>
              <GiAmpleDress size='28px' />
              <Typography fontSize='20px' fontWeight='bold'>
                New Styles Everyday
              </Typography>
            </Box>
            <Box display='flex' alignItems='center' gap='15px'>
              <GrDeliver size='30px' />
              <Typography fontSize='20px' fontWeight='bold'>
                Express Delivery
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              display={{xs: 'grid', sm: 'flex'}}
              justifyContent='center'
              alignContent='center'
              gap={{xs: '3px', sm: '40px'}}
              mb='10px'
            >
              <img src={visa} height='50px' />
              <img src={mastercard} height='40px' style={{marginTop: '5px'}} />
              <img src={paypal} height='70px' style={{marginTop: '-10px'}} />
              <img src={maestro} height='35px' style={{marginTop: '7px'}} />
              <img src={american} height='55px' />
              <img
                src={mercadopago}
                height='55px'
                style={{marginTop: '-1px'}}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}
