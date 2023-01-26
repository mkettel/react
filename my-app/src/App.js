import logo from './logo.svg';
// this imports the css file to the application file
import './App.css';
import { useSyncExternalStore } from 'react';
import { Manager } from './Manager';

function App() {
  const name = <h1 className='title'>Mountain View Coffee </h1>; // you can put the html as a variable then call it below which is very useful
  const price = 15.00;
  const redText = false;
  // drinks object below that could be used to get displayed in the menu or just to organize the data?
  const secretDrinks = [
    { name: "Dirty Chai", price: 5.00 },
    { name: "Mocha", price: 6.50 },
    { name: "Flat White", price: 3.50 },
    { name: "Matcha Vodka Latte", price: 5.50 },
    { name: "Cold ASF Brew", price: 3.00 }
  ];
  // detailed menu to loop through
  const detailedMenu = [
    { name: "Drip Coffee", price: 2.50, isFood: false },
    { name: "Cappucino", price: 3.50, isFood: false },
    { name: "Mocha", price: 3.50, isFood: false },
    { name: "Frappe", price: 5.50, isFood: false },
    { name: "Donut", price: 2.00, isFood: true },
    { name: "Chicken Strips", price: 5.50, isFood: true },
    { name: "Sausage, Egg & Cheese Sandwich", price: 6.00, isFood: true },
    { name: "Sausage, Bacon & Cheese Sandwich", price: 6.00, isFood: true },
    { name: "Cesar Salad", price: 7.00, isFood: true },
    { name: "Iced Tea", price: 3.00, isFood: false },
    { name: "Espresso Shot", price: 6.00, isFood: false }
  ]
  return (
    <div className="App">
       {/* // navbar */}
      <div className='nav-container'>
        <div className='nav-left'>
        </div>
        <div className='nav-right'>
          <p>Menu</p>
          <p>Contact</p>
          <p>Location</p>
        </div>
      </div>
      {name}
      {/* {price >= 15.00 ? <p>Add a free cookie?</p> : <p>Spend $15 or more to get a free cookie!</p>} */}
      {/* hiding all of this for now */}
      <div className="menu">
        <div className="drinks">
          <h3 style={{color: redText ? "red" : "black"}}>Drinks</h3>
          <MenuItem name="Dirty Chai" price={5.00}/>
          <MenuItem name="Mocha" price={5.50}/>
          <MenuItem name="Flat White" price={6.00}/>
          <MenuItem name="Matcha Latte" price={4.00}/>
          <MenuItem name="Cold Brew" price={3.00}/>
        </div>
        <div className="food">
          <h3>Food</h3>
          <MenuItem name="Sausage, Egg & Cheese Buscuit" price={4.25}/>
          <MenuItem name="Scone" price={2.75}/>
          <MenuItem name="Muffin Assortment" price={3.00}/>
        </div>
      </div>
      <div className="drinks">
        <h3>Secret Menu</h3>
        {secretDrinks.map((drink, key) => {
          return <SecretDrink name={drink.name} price={drink.price} />
        })}
      </div>
      <div className="management">
        <p>Manager:</p><Manager name="Ryan" age={25} email="ryan@mountainview.com"/>
      </div>
      {/* <hr /> */}

      <div className="main-menu">
        <div className='menu-two'>
          <h3>Food Menu</h3>
          {detailedMenu.map((item, key) => item.isFood && <p> {item.name} </p>
          )}
        </div>
        <div className="menu-two">
          <h3>Drink Menu</h3>
          {detailedMenu.map((item, key) => !item.isFood && <p> {item.name} </p> )}
        </div>
      </div>
    </div>
  );
}


// COMPONENTS ------------------------
// - Some are now in their own files so the code is a bit cleaner

const MenuItem = (props) => {
  return (
    <div className='menuItem'>
       <p>{props.name}</p>
       <p>${props.price}</p>
    </div>
  )
}

// This is a component that displays the name and price from the data structure drinks.
const SecretDrink = (props) => {
  return (
    <div className='menu-two'>
      {props.name} {props.price}
    </div>
  )
}



export default App;
