import {Box, Typography} from '@mui/material'
import bannerknitted from '../images/bannerknitted.png'
import responsiveknitted from '../images/responsivebannerknitted.png'
import banneroffer from '../images/banneroffer.png'
import responsiveoffer from '../images/responsivebanneroffer.png'
import {GiAmpleDress} from 'react-icons/gi'
import {GrDeliver} from 'react-icons/gr'

export const Promotion = (props: any) => {
  return (
    <Box>
      {props.knit === 'no' ? (
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
      ) : props.knit === 'si' ? (
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
      ) : (
        <Box>
          <Box
            height='150px'
            mt='40px'
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
        </Box>
      )}
    </Box>
  )
}
