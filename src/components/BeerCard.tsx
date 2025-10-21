export type beolvasing = {
  image : string,
  name : string,
  abv : string,
  volume: string,
  price : number,
  available : boolean
}

const BeerCard = (props: beolvasing) => {
  return (
    <div className='beerCard'>
      <img src={props.image} alt="" />
      <h2>{props.name}</h2>
      <p>ABV: {props.abv}</p>
      <p>Volume: {props.volume}</p>
      <p>price: {props.price}</p>
    
    </div>
  )
}

export default BeerCard