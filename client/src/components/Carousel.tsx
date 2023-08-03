import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import {
  EffectFade,
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
} from 'swiper/modules'
import {Box} from '@mui/material'

export const Carousel = () => {
  return (
    <Box>
      <Swiper
        navigation={true}
        autoplay={true}
        loop={true}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Keyboard, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            src='https://blog.corporacionbi.com/hubfs/Blog_ComprasOnLine_Agosto_17/24_JULIO_LAS_MEJORES_TIENDAS_ONLINE_PARA_RENOVAR_TU_ROPA_DEPORTIVA.jpg'
            // className={style.img}
            style={{
              width: '100%',
              maxHeight: '500px',
              minHeight: '100px',
              objectFit: 'fill',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.studiof.com.co/arquivos/BANNER-HOME-NOCHE-PARISINA-LG.jpg'
            style={{
              width: '100%',
              maxHeight: '500px',
              minHeight: '100px',
              objectFit: 'fill',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.studiof.com.co/arquivos/BANNER-HOME-ADN-JEANS-DITNB-LG.jpg'
            style={{
              width: '100%',
              maxHeight: '500px',
              minHeight: '100px',
              objectFit: 'fill',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.studiof.com.co/arquivos/BANNER-HOME-RETRO-TRIANGULAR-LG.jpg'
            style={{
              width: '100%',
              maxHeight: '500px',
              minHeight: '100px',
              objectFit: 'fill',
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
