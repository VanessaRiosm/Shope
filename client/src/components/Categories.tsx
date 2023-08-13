import {Box} from '@mui/material'

const category = [
  {
    title: 'vestidos',
    image:
      'https://www.studiof.com.co/arquivos/Categoria-Ropa-Pantalones-100423.jpg?v=638167331724970000',
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
        //box principal
        <Box
          margin='60px 20px 60px 20px'
          maxHeight={{xs: '450px', sm: '550px', md: '650px', xl: '800px'}}
          display='flex'
        >
          {/* primer imagen */}
          <Box marginRight='2px' width='60%' maxHeight='100%'>
            <img
              src={category[2].image}
              style={{
                maxHeight: '100%',
                minHeight: '100%',
                objectFit: 'cover',
                width: '99.5%',
              }}
            />
          </Box>

          {/* Box de segunda y tercer imagen */}
          <Box width='40%' maxHeight='100%'>
            {/* Segunda imagen */}
            <Box height='50%' width='100%'>
              <img
                src={category[0].image}
                style={{
                  objectFit: 'cover',
                  maxWidth: '100%',
                  minWidth: '100%',
                  maxHeight: '100%',
                  minHeight: '100%',
                }}
              />
            </Box>

            {/* tercer imagen */}
            <Box height='50%' width='100%' paddingTop='4px'>
              <img
                src={category[1].image}
                style={{
                  objectFit: 'cover',
                  maxWidth: '100%',
                  minWidth: '100%',
                  maxHeight: '99.10%',
                  minHeight: '99.10%',
                }}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        //box principal
        <Box
          margin='60px 20px 60px 20px'
          maxHeight={{xs: '450px', sm: '550px', md: '650px', xl: '800px'}}
          display='flex'
        >
          {/* Box de segunda y tercer imagen */}
          <Box width='40%' maxHeight='100%'>
            {/* Segunda imagen */}
            <Box height='50%' width='100%'>
              <img
                src={category[1].image}
                style={{
                  objectFit: 'cover',
                  maxWidth: '100%',
                  minWidth: '100%',
                  maxHeight: '100%',
                  minHeight: '100%',
                }}
              />
            </Box>

            {/* tercer imagen */}
            <Box height='50%' width='100%' paddingTop='4px'>
              <img
                src={category[0].image}
                style={{
                  objectFit: 'cover',
                  maxWidth: '100%',
                  minWidth: '100%',
                  maxHeight: '99.10%',
                  minHeight: '99.10%',
                }}
              />
            </Box>
          </Box>
          {/* primer imagen */}
          <Box marginLeft='3px' width='60%' maxHeight='100%'>
            <img
              src={category[2].image}
              style={{
                maxHeight: '100%',
                minHeight: '100%',
                objectFit: 'cover',
                width: '99.5%',
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  )
}
