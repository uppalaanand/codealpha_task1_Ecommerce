//Before backend
// import { Grid, Stack, Typography, Box, TextField, InputAdornment, Card, CardMedia, CardContent } from '@mui/material'
// import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
// import data from '../data/all_product'
// import { useNavigate } from 'react-router-dom';

// function Products() {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ px: 4, mt: 3 }}>
//   <Typography variant='h4' mb={2}>Products</Typography>

//   <Stack direction='row' spacing={4}>
//     {/* Filters */}
//     <Stack direction='column' spacing={3} sx={{ backgroundColor: '#f5f5f5', p: 2, minWidth: '200px' }}>
//       <Typography variant='h6'>Filters</Typography>
//     </Stack>

//     {/* Right Content */}
//     <Stack direction='column' spacing={3} flex={1}>
//       <Box>
//         <TextField
//           fullWidth
//           placeholder="Search the products here..."
//           size="small"
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Box>

//       <Grid container spacing={2}>
//         {data.map((d, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card key={index} sx={{ maxWidth: '100%' }} onClick={() => navigate(`/product/${d.id}`)}>
//               <CardMedia
//                 sx={{ height: 240, width: 240 }}
//                 image={d.image}
//                 title={d.name}
//               />
//               <CardContent>
//                 <Stack direction="row" justifyContent="space-between">
//                   <Typography variant="body2">{d.title}</Typography>
//                   <Typography variant="body2">₹{d.new_price}</Typography>
//                 </Stack>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Stack>
//   </Stack>
// </Box>
//   )
// }

// export default Products


// before filters
// import { Grid, Stack, Typography, Box, TextField, InputAdornment, Card, CardMedia, CardContent, Button, Avatar } from '@mui/material'
// import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios'
// import { useEffect } from 'react';

// function Products() {
//   const navigate = useNavigate();
//   const [ products, setProducts ] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try{
//       const response = await axios.get("http://localhost:3000/products");
//       setProducts(response.data);
//       console.log(response);
//       } catch(err){
//         console.error('Error fetching products:', err);
//       }
//     }
//     fetchProducts();
//   },[])

//   return (
//     <Box sx={{ px: 4, mt: 3 }}>
//   <Typography variant='h4' mb={2}>Products</Typography>

//   <Stack direction='row' spacing={4}>
//     {/* Filters */}
//     <Stack direction='column' spacing={3} sx={{ backgroundColor: '#f5f5f5', p: 2, maxHeight: '100vh',  minWidth: '200px' }}>
//       <Typography variant='h6'>Filters</Typography>
//       {/* Add filter options here if needed */}
//       <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//         <Stack direction='column' spacing={2} alignItems='flex-start' ml={3}>
//         <Typography variant='h6'>Category</Typography>
//         <Stack direction='column' spacing={2} alignItems='flex-start' ml= {3}>
//           <Button variant='text' color='black'><span>All</span></Button>
//           <Button variant='text' color='black'>Men</Button>
//           <Button variant='text' color='black'>Women</Button>
//           <Button variant='text' color='black'>Kids</Button>
//         </Stack>
//         </Stack>
//         <Stack direction='column' spacing={2} alignItems='flex-start' ml={3}>
//           <Typography variant='h6'>Rating</Typography>
//           <Stack direction='row' spacing={1} alignItems='center'>
//             <Avatar sx={{ width: 24, height: 24, bgcolor: 'gold' }}>1</Avatar>
//             <Avatar sx={{ width: 24, height: 24, bgcolor: 'gold' }}>2</Avatar>
//             <Avatar sx={{ width: 24, height: 24, bgcolor: 'gold' }}>3</Avatar>
//             <Avatar sx={{ width: 24, height: 24, bgcolor: 'gold' }}>4</Avatar>
//             <Avatar sx={{ width: 24, height: 24, bgcolor: 'gold' }}>5</Avatar>
//           </Stack>
//         </Stack>
//         <Stack direction='column' spacing={2} alignItems='flex-start' ml={3}>
//           <Typography variant='h6'>Price</Typography>
//           <TextField label='Min Price' type='number' size='small' placeholder='0' />
//           <TextField label='Max Price' type='number' size='small' placeholder='10000' />
//         </Stack>
//         <Button variant='contained' color='primary' type='submit' size='small'>Clear Filters</Button>
//       </form>
//     </Stack>

//     {/* Right Content */}
//     <Stack direction='column' spacing={3} flex={1}>
//       <Box>
//         <TextField
//           fullWidth
//           placeholder="Search the products here..."
//           size="small"
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Box>

//       <Grid container spacing={2}>
//         {products.map((d, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card key={index} sx={{ maxWidth: '100%' }} onClick={() => navigate(`/product/${d._id}`)}>
//               <CardMedia
//                 sx={{ height: 240, width: 240 }}
//                 image={`http://localhost:3000${d.image}`}
//                 title={d.name}
//               />
//               <CardContent>
//                 <Stack direction="row" justifyContent="space-between">
//                   <Typography variant="body2">{d.title}</Typography>
//                   <Typography variant="body2">₹{d.new_price}</Typography>
//                 </Stack>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Stack>
//   </Stack>
// </Box>
//   )
// }

// export default Products


// before filters fixed same position
import {
  Grid, Stack, Typography, Box, TextField, InputAdornment,
  Card, CardMedia, CardContent, Button, Avatar
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMediaQuery, useTheme } from '@mui/material';

function Products() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [ratingFilter, setRatingFilter] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
        setFilteredProducts(response.data); // initially show all
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (categoryFilter !== 'All') {
      filtered = filtered.filter(p => p.category?.toLowerCase() === categoryFilter.toLowerCase());
    }

    // Rating filter
    if (ratingFilter) {
      filtered = filtered.filter(p => p.rating >= ratingFilter);
    }

    // Price filter
    if (minPrice) {
      filtered = filtered.filter(p => p.new_price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter(p => p.new_price <= parseFloat(maxPrice));
    }

    // Search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, categoryFilter, minPrice, maxPrice, ratingFilter, products]);

  const handleClearFilters = () => {
    setCategoryFilter('All');
    setMinPrice('');
    setMaxPrice('');
    setRatingFilter(null);
    setSearchQuery('');
  };

  return (
    <Box sx={{ px: isMobile? 1: 10, mt: 3 }}>
      <Typography variant='h4' mb={2}>Products</Typography>

      <Stack direction='row' spacing={4}>
        {/* Filters */}
        <Stack direction='column' spacing={3} sx={{ backgroundColor: '#f5f5f5', p: 2, maxHeight: '100vh', minWidth: isMobile? '100px':'200px'  }}>
          <Typography variant='h6'>Filters</Typography>

          <Stack spacing={2} ml={3}>
            {/* Category */}
            <Typography variant='h6' alignSelf='start' pl={2}>Category</Typography>
            <Stack direction='column' spacing={1}>
              {['All', 'Men', 'Women', 'Kid'].map((cat) => (
                <Button
                  key={cat}
                  variant={categoryFilter === cat ? 'outlined' : 'text'}
                  sx={{ justifyContent: 'flex-start', width: '100%', pl: 2 }} 
                  onClick={() => setCategoryFilter(cat)}
                >
                  {cat}
                </Button>
              ))}
            </Stack>

            {/* Rating */}
            <Typography variant='h6' mt={2} alignSelf='start' pl={2}>Rating</Typography>
            <Stack direction='row' spacing={1}>
              {[1, 2, 3, 4, 5].map(r => (
                <Avatar
                  key={r}
                  sx={{
                    width: isMobile? 16: 24,
                    height: isMobile? 16: 24,
                    bgcolor: ratingFilter === r ? 'darkorange' : 'gold',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                  onClick={() => setRatingFilter(r)}
                >
                  {r}
                </Avatar>
              ))}
            </Stack>

            {/* Price */}
            <Typography variant='h6' mt={2} alignSelf='start' pl={2}>Price</Typography>
            <TextField
              label='Min Price'
              type='number'
              size='small'
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <TextField
              label='Max Price'
              type='number'
              size='small'
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />

            <Button
              variant='contained'
              color='primary'
              size='small'
              onClick={handleClearFilters}
              sx={{ mt: 1 }}
            >
              Clear Filters
            </Button>
          </Stack>
        </Stack>

        {/* Right Content */}
        <Stack direction='column' spacing={3} flex={1}>
          <TextField
            fullWidth
            placeholder="Search the products here..."
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <Grid container spacing={2}>
            {filteredProducts.length === 0 ? (
              <Typography variant="h6" mt={2} ml={2}>No products found.</Typography>
            ) : (
              filteredProducts.map((d, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{ maxWidth: '100%', cursor: 'pointer' }}
                    onClick={() => navigate(`/product/${d._id}`)}
                  >
                    <CardMedia
                      sx={{ height: 260, width: 250 }}
                      image={`http://localhost:3000${d.image}`}
                      title={d.name}
                    />
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2">{d.title}</Typography>
                        <Typography variant="body2">₹{d.new_price}</Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Products;
