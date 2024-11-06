import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css";


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



function Title() {
  const currentHour = new Date().getHours();
    return (
        <div className="container">
            <h1 style={{color: "orange" , fontSize: "48px" , textTransform: "uppercase"}}>Fang Rong's Pizza Co.</h1>
            <br></br><br></br>
            <h2>{currentHour >=10 && currentHour <= 22 ? "Authentic Italian Cuisine" : ""}</h2>
        
        </div>
    );
}

function Menu() {
  
  return (
    <div className="menu">
      <h2>
        Our Menu
      </h2>
      {/* <Pizza pizzaData/> */}
      {pizzaData.map(Pizza)}
      <br></br><br></br>
      {/* <h2>Sold Out</h2>
      {pizzaData.map(SoldOutPizza)} */}
    </div>
  );
  
}






function Pizza({name, ingredients, price, photoName, soldOut}) {
  if (soldOut === false) {
    return(
        <div className="pizza">
            <img src={photoName} height="400" width="400"></img><br></br><br></br>
            <h2>Name: {name}</h2> <br></br><br></br>
            <h3>Ingredients: {ingredients}</h3>
            <h3>Price: ${price}</h3>
        </div>
  )
  } else {
    return (
      <div className="pizza sold-out">
        <img src={photoName} height="400" width="400"></img><br></br><br></br>
        <h2>Name: {name}</h2> <br></br><br></br>
        <h3>Ingredients: {ingredients}</h3>
        <h3>Price: ${price}</h3>
      </div>
      )
  };
}

// function SoldOutPizza({name, ingredients, price, photoName, soldOut}) {
//   if (soldOut === true) {
//   return(
//         <div className="pizza.sold-out">
//             <img src={photoName} height="400" width="400"></img><br></br><br></br>
//             <h2>Name: {name}</h2> <br></br><br></br>
//             <h3>Ingredients: {ingredients}</h3>
//             <h3>Price: ${price}</h3>
//         </div>
//   )};
// }

// function Pizza1() {
//     return (
//         <div>
//             <img src="pizzas/spinaci.jpg" height="400" width="400"></img><br></br>
//             <h2>Name: Pizza Spinaci</h2>
//             <h3>Ingredients: Tomato, mozarella, spinach, and ricotta cheese</h3>
//             <h3>Price: 10</h3>
//         </div>
//     );
// }

// function Pizza2() {
//     return (
//         <div>
//             <img src="pizzas/focaccia.jpg" height="400" width="400"></img><br></br>
//             <h2>Name: Pizza focaccia</h2>
//             <h3>Ingredients: Tomato, mozarella, spinach, and ricotta cheese</h3>
//             <h3>Price: 10</h3>
//         </div>
//     );
// }


function Footer() {
  const currentHour = new Date().getHours();
  return(
    <div>
      <footer className="Footer">
        <div className="container">
          <h2>{currentHour >= 10 && currentHour <= 22 ? <button className="btn"> Order Now </button> : ""}</h2><br></br>
          <h2>{currentHour >= 10 && currentHour <= 22 ? "We're Currently Open" : "Sorry we're closed"}</h2>
        </div>
      </footer>
    </div>
  );
}


function App() {
    return (
    <div className="container">
        <Title />
        <Menu />
        <Footer />
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
