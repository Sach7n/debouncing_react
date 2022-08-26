import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [search, setSearch] = useState()
  const handleChange = event => {
    //fetch some data using any API
    const value = event.target;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then(res=>res.json)
      .then(json=>setSearch(json.data))
      console.log(search)
    }

  const dosomething = function(fn,d){
    let timer;
    //console.log(search)
    return function(...args){
      const context = this;
      clearTimeout(timer);
      timer=setTimeout(() => {
        fn.apply(context,args)
      }, d);
    } 
  }

  const betterFunction = dosomething(handleChange,1000);


  return (
    <div className="App">
      <input className='input' onChange={betterFunction}/>
    </div>
  );
}

export default App;
