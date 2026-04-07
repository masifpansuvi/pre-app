import { useEffect, useState } from "react";
import MenuItems from "./MenuItems";

const Cart = () => {
    const [firstItem, setFirstItem] = useState({
        name: "Biryani",
        quantity: 2
    })

    useEffect(()=>{
        setTimeout(() => {
            setFirstItem((item) => {
                return {
                    ... item,
                    quantity: 10
                }
            } )
        }, 4000);
    })


    return <>
    
    <section className="mx-w-sm mx-auto">
        <h1 className="text-xl">CART</h1>
        <ul>
            <MenuItems item={firstItem}/>
         <MenuItems item={{
            name: "Chicken Handi",
            quantity: 2
        }}/>
         <MenuItems item={{
            name: "Halva Poris",
            quantity: 2
        }}/>
        </ul>
    </section>
    </>
}

export default Cart;