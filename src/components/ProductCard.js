import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../pages/styles.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/action/action';

const ProductCard = ({productDetails} ) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productList = useSelector((store) => store.data.cartItems);

    //---------------- handle cart functionality ---------------
    function handleCart() {
        const id = productList.find((ele) => ele.id == productDetails.id)
        if(!id) {
            dispatch(addToCart({
                productDetails
            }))
        } else {
            alert('Item already added in the cart')
        }
        navigate('/cart')
    }
    
    return (
        <div className='product-card'>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <img src={productDetails?.image} className='product-image'/>
                    <Typography variant="body2">
                        { productDetails?.name.length > 60 ?  productDetails?.name.slice(0, 60)+'...' : productDetails?.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleCart} size="small">Add To Cart</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCard