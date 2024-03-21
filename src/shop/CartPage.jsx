import React, { useEffect, useState } from 'react';
import PageHeader from '../Components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png"

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, []);

    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    const handleIncrease = (item) => {
        const updatedItems = cartItems.map(cartItem => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        });
        setCartItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));
    }

    const handleDecrease = (item) => {
        const updatedItems = cartItems.map(cartItem => {
            if (cartItem.id === item.id && cartItem.quantity > 1) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        });
        setCartItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));
    }

    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0);

    const orderTotal = cartSubtotal;

    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
            <div className='shop-cart padding-tb'>
                <div className='container'>
                    <div className='section-wrapper'>
                        <div className='cart-top'>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>
                                            Product
                                        </th>
                                        <th className='cat-price'>
                                            Price
                                        </th>
                                        <th className='cat-quantity'>
                                            Quantity
                                        </th>
                                        <th className='cat-toprice'>
                                            Total
                                        </th>
                                        <th className='cat-edit'>
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, indx) => (
                                        <tr key={indx}>
                                            <td className='product-item cat-product'>
                                                <div className='p-thumb'>
                                                    <Link to="/shop"> <img src={item.img} alt={item.name} /></Link>
                                                </div>
                                                <div className='p-content'>
                                                    <Link to="/shop">{item.name}</Link>
                                                </div>
                                            </td>

                                            <td className='cat-price'>
                                                ${item.price}
                                            </td>
                                            <td className='cat-quantity'>
                                                <div className='cart-plus-minus'>
                                                    <div className='dec qtybutton' onClick={() => handleDecrease(item)}>
                                                        -
                                                    </div>
                                                    <input type='text' className='cart-plus-minus-box' name='qtybutton' value={item.quantity}></input>
                                                    <div className='inc qtybutton' onClick={() => handleIncrease(item)}>
                                                        +
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='cat-topprice'>
                                                ${calculateTotalPrice(item)}
                                            </td>
                                            <td className='cat-edit'>
                                                <a href='#' onClick={() => handleRemoveItem(item)}>
                                                    <img src={delImgUrl} />
                                                </a>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className='cart-buttom'>
                            <div className='cart-checkout-box'>
                                <form className='coupon'>
                                    <input className='cart-page-input-text' type='text' name='coupon' id='coupon' placeholder='Coupon Code...'>
                                    </input>
                                    <input type='submit' value="Apply Coupon" />
                                </form>
                                <form className='cart-checkout'>
                                    <input type="submit" value="Update Cart" />
                                    <div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
