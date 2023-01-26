import logo from './logo.svg';
// this imports the css file to the application file
import './App.css';
import { useSyncExternalStore } from 'react';
import { Manager } from './Manager';
import { useState } from "react";

function App() {
  const name = <h1 className='title'>Mountain View Coffee </h1>; // you can put the html as a variable then call it below which is very useful
  const blurb = <p className='blurb'>Mountain View Coffee House is located in the sunny and beautiful mountains of Breckenridge, Colorado. Come by and fuel any activity or to wind down at the end of of a great day in the mountains</p>
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
  // --MAIN DATASET FOR MENU ITEMS--
  const detailedMenu = [
    { name: "Drip Coffee", price: 2.50, isFood: false, drunk: false },
    { name: "Cappucino", price: 3.50, isFood: false, drunk: false },
    { name: "Mocha", price: 3.50, isFood: false, drunk: false },
    { name: "Frappe", price: 5.50, isFood: false, drunk: false },
    { name: "Donut", price: 2.00, isFood: true, drunk: false },
    { name: "Chicken Strips", price: 5.50, isFood: true, drunk: false },
    { name: "Sausage, Egg & Cheese Sandwich", price: 6.00, isFood: true, drunk: false },
    { name: "Sausage, Bacon & Cheese Sandwich", price: 6.00, isFood: true, drunk: false },
    { name: "Cesar Salad", price: 7.00, isFood: true, drunk: false },
    { name: "Iced Tea", price: 3.00, isFood: false, drunk: false },
    { name: "Espresso Shot", price: 6.00, isFood: false, drunk: false },
    { name: "Irish Coffee", price: 6.00, isFood: false, drunk: true },
    { name: "Beer", price: 4.00, isFood: false, drunk: true },
    { name: "Nachos", price: 5.00, isFood: true, drunk: false },
    { name: "Fries", price: 4.00, isFood: true, drunk: false }
  ]
  // *********STATE CHANGE FUNCTIONS***********
  // --VOTING CONTROLS--
  const [voteA, setVoteA] = useState(0);
  const [voteB, setVoteB] = useState(0);
  const increaseVoteA = () => {
    setVoteA(voteA + 1);
    console.log(voteA);
  }
  const increaseVoteB = () => {
    setVoteB(voteB + 1);
    console.log(voteB);
  }
  // --INPUT CONTROLS-- useless example but ki
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  // --SECRET MENU CONTROLS--
  const [showText, setShowText] = useState(false);
  // --CSS STATE CHANGING--
  const [colorChange, setColorChange] = useState("black");

  return (
    <div className="App">
       {/* // navbar */}
      <div className='nav-container'>
        <div className='nav-left'>
        {/* logo here */}
        </div>
        <div className="nav-middle">
          <p>{name}</p>
        </div>
        <div className='nav-right'>
          <p>Location</p>
          <p>Contact</p>
          <p>Menu</p>
        </div>
      </div>

      {/* {price >= 15.00 ? <p>Add a free cookie?</p> : <p>Spend $15 or more to get a free cookie!</p>} */}
      <div className="drinks">
        <h3>Secret Menu</h3>
        {secretDrinks.map((drink, key) => {
          return <SecretDrink name={drink.name} price={drink.price} />
        })}
      </div>
      <div className="management">
        <p>Manager:</p><Manager name="Ryan" age={25} email="ryan@mountainview.com"/>
      </div>

    {/* This is where i am playing with the large dataset and manipulating what is shown through components */}
    {/* I will play around with cleaning up the code as well */}
      <div className="blurb-container">{blurb}</div>
      <div className="main-menu">
        <div className='menu-two'>
          <h3>Food</h3>
          {detailedMenu.map((item, key) => item.isFood && <ColumnMenu name={item.name} price={item.price} />
          )}
        </div>
        <div className="menu-two">
          <h3>Drinks</h3>
          {detailedMenu.map((item, key) => !item.isFood && <ColumnMenu name={item.name} price={item.price} />
           )}
        </div>
        <div className="row-menu">
          <h3>Alcohol</h3>
          {detailedMenu.map((item, key) => item.drunk && <RowMenu name={item.name} price={item.price} />
           )}
        </div>
      </div>
      {/* Poll Section */}
      <div className="poll-container">
        <div className="vote-section">
          <p>{voteA}</p>
          <button onClick={increaseVoteA}>Vote</button>
        </div>
        <div className="vote-section">
          <p>{voteB}</p>
          <button onClick={increaseVoteB}>Vote</button>
        </div>
      </div>
      {/* Special Section */}
      <div className="specials-container">
        <div className="special-title">
          <input type="text" onChange={handleInputChange}/>
          <p>Live Input Field</p>
          <p>{inputValue}</p>
        </div>
      </div>
      {/* below there is a secret menu that is displayed or hidden on button click. Annon function is used to do this. uses ternary operations and button click with states to display or not */}
      <div className="secret-menu">
          <button onClick={() => {
            setColorChange(colorChange === "black" ? "red" : "black");
          }}>Color Change</button>
          <button onClick={() => {
            setShowText(!showText);
          }}>Secret Menu</button>
          {showText === true &&
          <ul style={{color: colorChange}}>
            <li>Dirty Ass Chai</li>
            <li>Spiked Matcha</li>
          </ul> }
        </div>
    </div>
  );
}


// COMPONENTS ------------------------
// - Some are now in their own files so the code is a bit cleaner


// Displays the two column menu styles for the general drinks and food
const ColumnMenu = (props) => {
  return (
    <div className='item'>
      <p>{props.name}</p>
      <p>${props.price}</p>
    </div>
  )
}
const RowMenu = (props) => {
  return (
    <div className='row-item'>
      <p>{props.name}</p>
      <p>${props.price}</p>
    </div>
  )
}

// ------------------------------------

// This is a component that displays the name and price from the data structure drinks.
const SecretDrink = (props) => {
  return (
    <div className='menu-two'>
      {props.name} {props.price}
    </div>
  )
}



export default App;
