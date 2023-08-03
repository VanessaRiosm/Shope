import {Box} from '@mui/material'

const category = [
  {
    title: 'vestidos',
    image:
      'https://images.hola.com/mx/imagenes/moda/2023041147401/blusas-tops-romanticos-tendencia-primavera-verano-2023-rd/0-221-564/blusas-romanticas-tendencia-primavera-verano-2023-t.jpg',
  },
  {
    title: 'zapatos',
    image:
      'https://cdn.baguer.co/uploads/2023/10/zapatos-para-mujer-unicolor-con-cadena-derek-lovely-blanco-829408BL_A.jpg_yIJ5mwZbjntd70Bl7876FtOExMoPCV9qHrSh1gZCzDojWX0gsp.jpg',
  },
  {
    title: 'blusas',
    image:
      'https://studiofco.vteximg.com.br/arquivos/ids/1252434-1000-1071/-stfco-producto-Camisas-blusas-VERDENEON-S172728-1.jpg?v=637650670011070000',
  },
]

export const Categories = (props: any) => {
  return (
    <Box>
      {props.siP === 'si' ? (
        <Box
          margin='60px 20px 60px 20px'
          maxHeight={{xs: '450px', sm: '550px', md: '650px', xl: '700px'}}
          // maxWidth={{xl: '2500px'}}
          display='flex'
        >
          {}
          <img
            src={category[2].image}
            style={{width: '60%', maxHeight: '100%', objectFit: 'cover'}}
          />
          <Box width='40%'>
            <img
              src={category[0].image}
              style={{
                width: '100%',
                maxHeight: '50%',
                minHeight: '50%',
                objectFit: 'cover',
              }}
            />
            <img
              src={category[1].image}
              style={{
                width: '100%',
                maxHeight: '50%',
                minHeight: '50%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      ) : (
        <Box
          margin='60px 20px 60px 20px'
          maxHeight={{xs: '450px', sm: '550px', md: '650px'}}
          display='flex'
        >
          <Box width='40%'>
            <img
              src={category[1].image}
              style={{
                width: '100%',
                maxHeight: '50%',
                minHeight: '50%',
                objectFit: 'cover',
              }}
            />
            <img
              src={category[0].image}
              style={{
                width: '100%',
                maxHeight: '50%',
                minHeight: '50%',
                objectFit: 'cover',
              }}
            />
          </Box>
          <img
            src={category[2].image}
            style={{width: '60%', maxHeight: '100%', objectFit: 'cover'}}
          />
        </Box>
      )}
    </Box>
  )
}
