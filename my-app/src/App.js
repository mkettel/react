import logo from './logo.svg';
import './App.css';

function App() {
  const name = <h1 className='title'>Mountain View Coffee </h1>; // you can put the html as a variable then call it below which is very useful
  return (
    <div className="App">
      {name}
      <Manager name="Ryan" age={25} email="ryan@mountainview.com"/>

    </div>
  );
}

const Manager = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}


export default App;
