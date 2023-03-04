import CardItem from './Carditem';
import "./styles/Cards.css"

export default function Cards(){
  return(
    <div className="cards">
      <h1>Check out these EPIC destinations!</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem 
              src="../assets/car.jpg"
              text="Luxurious Car"
              label="Bugatti"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}