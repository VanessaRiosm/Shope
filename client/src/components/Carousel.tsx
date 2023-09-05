import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {Box} from '@mui/material'

export const Carousel = () => {
  return (
    <Box>
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
        <SwiperSlide>
          <img
            src='https://blog.corporacionbi.com/hubfs/Blog_ComprasOnLine_Agosto_17/24_JULIO_LAS_MEJORES_TIENDAS_ONLINE_PARA_RENOVAR_TU_ROPA_DEPORTIVA.jpg'
            // className={style.img}
            style={{
              width: '100%',
              maxHeight: '500px',
              minHeight: '100px',
              objectFit: 'fill',
              marginTop: '65px',
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
              marginTop: '65px',
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
              marginTop: '65px',
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
              marginTop: '65px',
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
