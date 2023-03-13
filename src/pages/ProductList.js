import * as React from 'react';
import ProductCard from '../components/ProductCard';
import '../pages/styles.css'
import Grid from '@mui/material/Grid';
import { getAllProducts } from '../api';
const ProductList = () => {
    const [items, setItems] = React.useState([
       { id: 1, price: 100, qty: 1, image: 'https://vaspinfotech.biz/wp-content/uploads/2021/05/15.jpg', name: 'Foxin FMS-475 2.0 Speaker - online computer shop'}, 
       { id: 2, price: 100, qty: 1, image: 'https://5.imimg.com/data5/UI/RF/MY-10422114/music-mini-bluetooth-speaker-500x500.jpg', name: 'Music Mini Bluetooth Speaker, Power (Watts)-10-15 at Rs 100/piece in Delhi'}, 
       { id: 3, price: 100, qty: 1, image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/01_8859ee4d-ba1f-4d84-b64f-90aa38a3ca07_1500x.jpg?v=1655373080', name: 'Stone 352 | Wireless Portable Bluetooth Speaker with 10W boAt Signature Sound, Up to 12hrs Nonstop Playback'}, 
       { id: 4, price: 100, qty: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURXg06k0D21MX6TlCsJHSqed9W71saH44HQ&usqp=CAU', name: 'SRS-XP700 Wireless Speaker with Omnidirectional Party Sound | Sony India'}, 
       { id: 5, price: 100, qty: 1, image: 'https://cdn.shopify.com/s/files/1/1676/7297/products/Main-Image_800x.jpg?v=1613022858', name: 'Leaf Bass 2 Bluetooth Wireless Headphones with Mic – Leaf Studios'}, 
       { id: 6, price: 100, qty: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Cr3dJI3AZA23BOhDzxXIcwikqGOZhpyoow&usqp=CAU', name: 'boat rockerZ 450 over the ear wireless headphones'}, 
    ])

  return (
    <div className='product-container'>
        <h1>Products</h1>
        <Grid container spacing={0} className='products-items'>
            { items.map((item) => (
                <Grid item xs={3}>
                    <ProductCard productDetails={item}/>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default ProductList