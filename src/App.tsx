import BeerCard, { type beolvasing } from "./components/BeerCard"
import {use, useState, useEffect} from "react"

const [beerData, setBeerData] = useState<beolvasing[]>([])


useEffect(()=>{

  fetch("data.json")
  .then(response=>response.json())
  .then((data)=>setBeerData(data))
},[])

const App = () => {
  return (
    <div className="beerCardWrapper">
      {beerData.map(item => (<BeerCard{...item}/>))}
    </div>
  )
}

export default App