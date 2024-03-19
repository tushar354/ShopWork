import React, { useState } from 'react'
import { Link, json } from 'react-router-dom'

const desc = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, mollitia!"

const ProductDisplay = ({ item }) => {
    const { name, id, price, seller, ratingscount, quantity, img } = item

    const [prequantity, setQuantity] = useState(quantity)
    const [coupon, setcoupon] = useState("")
    const [size, setSize] = useState("Select Size")
    const [color, setColor] = useState("Select Color")

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const hadleDecrease = () => {
        if (prequantity > 1) {
            setQuantity(prequantity - 1)
        }
    }

    const hadleincrease = () => {
        setQuantity(prequantity + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupon: coupon
        }
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductsIndex = existingCart.findIndex((item) => item.id === id)
        if (existingProductsIndex !== -1) {
            existingCart[existingProductsIndex].quantity += prequantity
        } else {
            existingCart.push(product)
        }

        localStorage.setItem("cart", JSON.stringify(existingCart))

        setQuantity(1)
        setSize("Select Size")
        setColor("Select Color")
        setcoupon("")
    }
    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span>
                        {ratingscount} review
                    </span>
                </p>
                <h4>{price}$</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className='select-product size'>
                        <select value={size} onChange={handleSizeChange}>
                            <option >Select Size</option>
                            <option >SM</option>
                            <option >MD</option>
                            <option >XL</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    <div className='select-product color'>
                        <select value={color} onChange={handleColorChange}>
                            <option >Select color</option>
                            <option >Pink</option>
                            <option >Blue</option>
                            <option >Red</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>

                    <div className='cart-plus-minus'>
                        <div className='dec qtybutton' onClick={hadleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type='text' name='qtybutton' id='qtybutton' value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))}></input>
                        <div className='inc qtybutton' onClick={hadleincrease}>+</div>
                    </div>
                    <div className='discount-code mb-2'>
                        <input type='text' placeholder='Enter Discount Code' onChange={(e) => setcoupon(e.target.value)}></input>
                    </div>
                    <button type='submit' className='lab-btn'>
                        <span>AddToCart</span>
                    </button>
                    <Link to="/cart-page" className='lab-btn bg-primary'>
                        <span>Check Out</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay
