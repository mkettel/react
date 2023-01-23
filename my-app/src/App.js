import logo from './logo.svg';
// this imports the css file to the application file
import './App.css';
import { useSyncExternalStore } from 'react';

function App() {
  const name = <h1 className='title'>Mountain View Coffee </h1>; // you can put the html as a variable then call it below which is very useful
  const price = 15.00;
  const redText = false;
  // drinks object below that could be used to get displayed in the menu or just to organize the data?
  const drinks = [
    { name: "Dirty Chai", price: 5.00 },
    { name: "Mocha", price: 6.50 },
    { name: "Flat White", price: 3.50 },
    { name: "Matcha Latte", price: 5.50 },
  ];
  return (
    <div className="App">
      {name}
      {price >= 15.00 ? <p>Add a free cookie?</p> : <p>Spend $15 or more to get a free cookie!</p>}
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
      <div className="menu-two">
        {drinks.map((drink, key) => {
          return <Drink name={drink.name} price={drink.price} />
        })}
      </div>
      <div className="management">
        <p>Manager:</p><Manager name="Ryan" age={25} email="ryan@mountainview.com"/>
      </div>
    </div>
  );
}


// COMPONENTS ------------------------
const Manager = (props) => {
  return (
    <div className='manager'>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  )
}

const MenuItem = (props) => {
  return (
    <div className='menuItem'>
       <p>{props.name}</p>
       <p>${props.price}</p>
    </div>
  )
}

const Drink = (props) => {
  return (
    <div>
      {props.name} {props.price}
    </div>
  )
}



export default App;
