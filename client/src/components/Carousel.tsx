import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Box} from '@mui/material'
import vogue from '../images/carouselBanner/liceriaVogue.png'
import vogueResponsive from '../images/carouselBanner/liceriaVogueResponsive.png'
import fashion from '../images/carouselBanner/fashion.png'
import fashionResponsive from '../images/carouselBanner/fashionResponsive.png'
import fashionblack from '../images/carouselBanner/fashionblack.png'
import fashionblackResponsive from '../images/carouselBanner/fashionblackresponsive.png'
import collection from '../images/carouselBanner/collection.png'
import collectionResponsive from '../images/carouselBanner/collectionResponsive.png'
import blackmodern from '../images/carouselBanner/blackmodern.png'
import blackmodernResponsive from '../images/carouselBanner/blackmodernResponsive.png'

export const Carousel = () => {
  return (
    <Box marginTop='65px'>
      <Swiper
        navigation={true}
        autoplay={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide style={{height: '620px'}}>
          <picture>
            <source srcSet={collectionResponsive} media='(max-width: 900px)' />
            <source srcSet={collection} media='(min-width: 900px)' />
            <img
              src={collectionResponsive}
              alt='MDN'
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
              }}
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide style={{height: '620px'}}>
          <picture>
            <source srcSet={fashionResponsive} media='(max-width: 900px)' />
            <source srcSet={fashion} media='(min-width: 900px)' />
            <img
              src={fashionResponsive}
              alt='MDN'
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
              }}
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide style={{height: '620px'}}>
          <picture>
            <source
              srcSet={fashionblackResponsive}
              media='(max-width: 900px)'
            />
            <source srcSet={fashionblack} media='(min-width: 900px)' />
            <img
              src={fashionblackResponsive}
              alt='MDN'
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
              }}
            />
          </picture>
        </SwiperSlide>

        <SwiperSlide style={{height: '620px'}}>
          <picture>
            <source srcSet={vogueResponsive} media='(max-width: 900px)' />
            <source srcSet={vogue} media='(min-width: 900px)' />
            <img
              src={vogueResponsive}
              alt='MDN'
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
              }}
            />
          </picture>
        </SwiperSlide>

        <SwiperSlide style={{height: '620px'}}>
          <picture>
            <source srcSet={blackmodernResponsive} media='(max-width: 900px)' />
            <source srcSet={blackmodern} media='(min-width: 900px)' />
            <img
              src={blackmodernResponsive}
              alt='MDN'
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
              }}
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
