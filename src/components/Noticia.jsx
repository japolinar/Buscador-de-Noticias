import React  from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, Link, Grid, Backdrop } from '@mui/material'

const Noticia = ({noticia}) => {

    const {url, urlToImage, title, description, source} = noticia

  return (
    <Grid 
        item
        md={6}
        lg={4}
    >
        <Card>
            {urlToImage && (
                <CardMedia
                component={'img'}
                alt={`Imagen de la noticia ${title} `}
                image={urlToImage}
                height={'250px'}
            />
            )}

            <CardContent>
                <Typography
                    variant='body1' 
                    color={'error'}
                >
                    {source.name}
                </Typography>

                <Typography
                    variant='h5' 
                    color={'black'}
                    component={'div'}
                    //webkit-line-clamp={3}
                >
                    {title}
                </Typography>

                <Typography
                    variant='body2' 
                    color={'black'}                    
                >
                    {description}
                </Typography>
            </CardContent>

            <CardActions>
                <Link
                    href={url}
                    target='_blank'
                    variant='button'
                    width={'100%'}
                    textAlign={'center'}
                    sx={{
                        textDecoration: 'none'                        
                    }}                    
                >
                    Leer Noticia
                </Link>
            </CardActions>

        </Card>
    </Grid>
  )
}

export default Noticia
