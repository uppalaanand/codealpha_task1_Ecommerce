import React,{useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Box, Button, Divider, IconButton, Rating, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCartContext } from '../context/cart_context';
import axios from 'axios';
import { useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';


function SingleProduct() {
    const {addToCart} = useCartContext();
    const { id } = useParams();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const [ product, setProduct ] = useState([]);
    console.log(product);

    useEffect(() => {
      const fetchProduct = async () => {
        const response = await axios.get(`http://localhost:3000/product/${id}`);
        console.log(response);
        setProduct(response.data);
      }
      fetchProduct();
    },[])


    const [ value, setValue ] = useState(1);

    const handleInc = () => {
      if(value <= product.stock)
      setValue(value+1);
    }
    const handleDec = () => {
      if(value > 1)
      setValue(value-1);
    }

  console.log("Product:", product);
  return (
    <Box sx={{ px: 4, mt: 3 }}>
        <Stack direction= {isMobile? 'column':'row'} spacing={4} m={5}>
            <Stack>
                <img src={`http://localhost:3000${product.image}`} alt='pic'/>
            </Stack>
            <Stack direction='column' spacing={3}>
                <Typography variant='h4' align='left'>{product.name}</Typography>
                <Divider />
                <Box>
                  <Stack direction='row' spacing={1}>
                    <Typography sx={{ color: "red", fontWeight: "bold" }}>
                      -{Math.round(((product.old_price - product.new_price) / product.old_price) * 100)}%
                    </Typography>
                    <Typography variant="h6" sx={{  mr: 1, fontSize: '40px' }}>
                      ₹{product.new_price}
                    </Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <Typography variant="body2" sx={{ color: "gray"}}>M.R.P.:</Typography>
                    <Typography variant="body2" sx={{ textDecoration: "line-through", color: "gray" }} > 
                      ₹{product.old_price}
                    </Typography>
                    </Stack>
                    <Stack direction='row' spacing={1} mt={3}>
                    <Typography variant='subtitle2' gutterBottom>Inclusive of all taxes</Typography>
                    </Stack>
                    <Stack direction='row' spacing={1} mt={1}>
                    <Rating name='product_rating' value={Number(product.rating) || 0} precision={0.5} readOnly size='medium'/>
                    </Stack>
                    <Stack direction='row' spacing={1} mt={2}>
                      <Typography variant='subtitle1' align='left'>{product.description}</Typography>
                    </Stack>
                    <Stack direction='row' mt={4} justifyContent='space-between'> 
                        <Stack direction='row' spacing={1}>
                            <IconButton onClick={handleInc}><AddIcon /></IconButton>
                            <Typography variant='h4'>{value}</Typography>
                            <IconButton onClick={handleDec}><RemoveIcon /></IconButton>
                        </Stack>
                        <NavLink to='/cart'>
                        <Button variant='contained' onClick={() => addToCart(product)}>Add to Cart</Button>
                        </NavLink>
                    </Stack>
                  </Box>

            </Stack>
        </Stack>
    </Box>
  )
}

export default SingleProduct