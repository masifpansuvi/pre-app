// typescript part -> 
type props = {
    item: {
        name: string,
        quantity: number
    }
}

const MenuItems = (props: props) =>{
    return <>
    <li className="flex gap-4 mx-auto justify-between text-lg ">
        <h1>{props.item.name}</h1>
        <span>{props.item.quantity}</span>
    </li>
    </>
}

export default MenuItems;