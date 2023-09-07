import {Box} from '@mui/material'
import bannerknitted from '../images/bannerknitted.png'
import responsiveknitted from '../images/responsivebannerknitted.png'
import banneroffer from '../images/banneroffer.png'
import responsiveoffer from '../images/responsivebanneroffer.png'

export const Promotion = (props: any) => {
  return (
    <Box>
      {props.knit === 'no' ? (
        <Box height='700px' mt='40px'>
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
      ) : (
        <Box height='700px' mt='40px'>
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
      )}
    </Box>
  )
}
