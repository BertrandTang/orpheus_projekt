export function Dish({number, title, description, price, img, slug, stock}) {
    return (
        <div>
            <h2>{number}. {title}</h2>
            <p>Description : {description}</p> <br />
            <p>Price : {price}€</p> <br />
            <img src={img} alt={title} /> <br />
            <p>Slug : {slug}</p> <br />
            <p>Stock : {stock}</p> <br />
        </div>
    )
};

export default function Dishes() {
    return (
        <div>
            <Dish
                name="Tacos"
                number={1}
                title={"Tacos à l'unité"}
                description={
                    "Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique."
                }
                price={3}
                img={
                    "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
                }
                slug={"tacos-a-l-unite"}
                stock={12}
            />
            <Dish
                name="Enchiladas"
                number={2}
                title={"Enchiladas"}
                description={
                    "Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus."
                }
                price={12}
                img={
                    "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
                }
                slug={"enchiladas"}
                stock={0}
            />
            <Dish
                name="Mole poblano"
                number={3}
                title={"Mole poblano"}
                description={
                    "Découvrez la richesse de la cuisine mexicaine avec notre mole poblano. Cette sauce complexe et riche en saveurs est préparée avec une combinaison d'épices, de chocolat et de piments, offrant une expérience culinaire unique et exquise."
                }
                price={15}
                img={
                    "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
                }
                slug={"mole-poblano"}
                stock={5}
            />
        </div>
    )
};



