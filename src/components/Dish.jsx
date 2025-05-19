export default function Dish({number, title, price, img}) {
    return (
        <div>
            <h2>{number}. {title}</h2>
            <p>Price : {price}€</p> <br />
            <img src={img} alt={title} /> <br />
        </div>
    )
};
