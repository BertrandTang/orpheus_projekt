export default function Dish({title, price, img}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Price : {price}€</p> <br />
            <img src={img} alt={title} /> <br />
        </div>
    )
};
