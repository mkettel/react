import logo from './logo.svg';
import './App.css';

function App() {
  const name = <h1 className='title'>Mountain View Coffee </h1>; // you can put the html as a variable then call it below which is very useful
  return (
    <div className="App">
      {name}
      <div className="header">
        <p>Manager:</p><Manager name="Ryan" age={25} email="ryan@mountainview.com"/>
      </div>
      <div className="menu">
        <div className="drinks">
          <h3>Drinks</h3>
          <MenuItem name="Dirty Chai" price={5.00}/>
          <MenuItem name="Mocha" price={5.50}/>
          <MenuItem name="Flat White" price={6.00}/>
          <MenuItem name="Matcha Latte" price={4.00}/>
          <MenuItem name="Cold Brew" price={3.00}/>
        </div>
        <div className="food">

        </div>
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

export default App;
