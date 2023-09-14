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

const carouselImages = [
  {img1: collection, img2: collectionResponsive},
  {img1: fashion, img2: fashionResponsive},
  {img1: fashionblack, img2: fashionblackResponsive},
  {img1: vogue, img2: vogueResponsive},
  {img1: blackmodern, img2: blackmodernResponsive},
]

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
        {carouselImages.map((img) => (
          <SwiperSlide style={{height: '45rem'}}>
            <picture>
              <source srcSet={img.img2} media='(max-width: 900px)' />
              <source srcSet={img.img1} media='(min-width: 900px)' />
              <img
                src={img.img2}
                alt='MDN'
                style={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                }}
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
