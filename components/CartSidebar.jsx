"use client"
import { Link } from 'react-router-dom';
import './CartSideBar.css'
import Image from 'next/image';
import { useSelector } from 'react-redux';

function CartSidebar() {
    const {loading,cartItems,itemsPrice} = useSelector((state) => state.cart)

    return(
        <div className="cart-side-bar">
            {loading ? (
                <div className="cart-status">
                    Loading...
                </div>
            ) 
            : cartItems.length === 0?(
                <div>
                    Cart is empty !
                </div>
            ) 
            : (
                <div>
                    {cartItems.length}
                </div>
                // <>
                // <div className="cart-side-bar">
                //     <div>subtotal</div>
                //     <div className="item-price-cart">${itemsPrice}</div>
                //     <div>
                //     <Link
                //         href="/cart"
                //         className="go-to-cart-btn"
                //     >
                //         Go to cart
                //     </Link>
                //     </div>
                //     {cartItems.map((item) => (
                //     <div
                //         key={item.id}
                //         className="item-list"
                //     >
                //         <Link
                //         href={`/product/${item.id}`}
                //         className="item-cart"
                //         >
                //         <Image
                //             src={item.image}
                //             alt={item.name}
                //             width={50}
                //             height={50}
                //             className="p-1"
                //         ></Image>
                //         </Link>
                //         <select
                //         value={item.qty}
                //         onChange={(e) =>
                //             addToCartHandler(item, Number(e.target.value))
                //         }
                //         >
                //         {[...Array(item.countInStock).keys()].map((x) => (
                //             <option key={x + 1} value={x + 1}>
                //             {x + 1}
                //             </option>
                //         ))}
                //         </select>
                //         <button
                //         className="delete-btn"
                //         onClick={() => removeFromCartHandler(item.id)}
                //         >
                //         Delete
                //         </button>
                //     </div>
                //     ))}
                // </div>
                // </>
            
            )}
        </div>
        
    ) 
    }

export default CartSidebar;