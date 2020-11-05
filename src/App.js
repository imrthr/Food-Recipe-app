import React, {useState,useEffect}  from 'react';
import './App.css';
import Header from './Components/Header';
import Recipe from './Components/Recipe'
import Axios from 'axios'

function App() {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);

  const APP_ID ="320e8c75";
  const APP_KEY ="f8f8fd5b8e864689ee92053a4e818a3c";

  useEffect(()=>{
    getRecipe();
  }, []);

  const getRecipe = async() => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=chiken&app_id=${APP_ID}&app_key=${APP_KEY}`
     );
     setRecipe(res.data.hits)
    }

  const onInputChange =(e) => {
     setSearch(e.target.value)
    //  console.log(e.target.value)
  };
  return (
    <div className="App">
    <Header search={search} onInputChange={onInputChange} />
    <div className = 'container'>
    <Recipe recipe = {recipe} />
    </div>
    </div>
  );
}

export default App;
