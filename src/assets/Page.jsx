import { useCart } from "react-use-cart";

 export default function Page() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Malm",
      img:"https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
      price: 9900,
      
    },
    {
      id: 2,
      name: "Nordli",
      img:"https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
      price: 16500,
      
    },
    {
      id: 3,
      name: "Kullen",
      img:"https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
      price: 4500,
      
    },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id} style={{display:"flex"}}>
          <h1>{p.name}</h1>
          <h2>{p.price}</h2>
          <img src={p.img} alt="" style={{width:"100px"}} />
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}



