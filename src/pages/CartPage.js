import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { addToCart, updateToCart } from '../redux/action/action';
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(useSelector((store) => store.data.cartItems))
    const [subTotal, setSubTotal] = useState(0)
    const [tax, setTax] = useState(10)
    const [coupenCode, setCoupenCode] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)

    //------------- HANDLE INC OR DEC OR ITEM -----------
    function handleQtyButton(value, data, _idx) {
        let temp = [...cartItems]
        if(value == 'inc') {
            temp[_idx] = {id: data.id, price: data.price, image: data.image, name: data.name, qty: ++data.qty }
           
        } else if(value == 'dec' && data.qty > 1) {
            temp[_idx] = {id: data.id, price: data.price, image: data.image, name: data.name, qty: --data.qty }
        } else { }
        dispatch(updateToCart(temp))
        setCartItems(temp)
    }
    //------------- REMOVE ITEM FROM CART -----------
    function handleRemove(row) {
        let temp = [...cartItems]
        let newRes = temp.filter((ele) => ele.id !== row.id)
        dispatch(updateToCart(newRes))
        setCartItems(newRes)
    }
    //------------- HANDLE CHECKOUT -----------
    function handleCheckout() {
        dispatch(updateToCart([]))
        navigate('/')
    }

    useEffect(() => {
        let total = 0
        cartItems.map((ele) => {
            total+= ele?.price * ele?.qty
        })
        setSubTotal(total)
        setGrandTotal(total+tax+coupenCode)
    }, [cartItems])

  return (
    <div className='cart-container'>
        <div className='cart-heading'>
            <h1>You Cart has {cartItems.length} Items</h1>
        </div>
        { cartItems.length > 0 && 
            <div className='cart-table'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { cartItems?.map((row, _idx) => (
                                <TableRow
                                    key={row?.qty}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell scope="row">
                                        <div className='cart-item'>
                                            <img src={row?.image} className='product-image '/>
                                            <p>{ row?.name.length > 60 ?  row?.name.slice(0, 60)+'...' : row?.name} </p>
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">₹{row?.price}</TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => handleQtyButton('inc', row, _idx)} size="large">+</Button>
                                        {row?.qty}
                                        <Button onClick={() => handleQtyButton('dec', row, _idx)} size="large">-</Button>
                                    </TableCell>
                                    <TableCell align="right">₹{row?.price * row?.qty}</TableCell>
                                    <TableCell onClick={() => handleRemove(row)}><i class="fa-solid fa-trash"></i></TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            </div>
        }
        { cartItems.length > 0 && 
            <div className='cart-summary'>
                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row"> {'SubTotal'}</TableCell>
                                <TableCell align="right">₹{subTotal}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row"> {'Tax'}</TableCell>
                                <TableCell align="right">₹{tax}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row"> {'Coupen Code'}</TableCell>
                                <TableCell align="right">₹{coupenCode}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row"> {'Grand Totak'}</TableCell>
                                <TableCell align="right">₹{grandTotal}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='checkout-button'>
                    <Button onClick={handleCheckout} variant="contained" size="large">Checkout</Button>
                </div>
            </div>
        }
    </div>
  )
}

export default CartPage