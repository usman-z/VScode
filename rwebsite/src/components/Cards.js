import CardItem from './Carditem';
import "./styles/Cards.css";
import bugatti from "../assets/bugatti.webp";
import lamborghini from "../assets/lamborghini.jpg";
import Hennessey from "../assets/hennessey.png";
import Lotus from "../assets/cars.webp";
import McLaren from "../assets/McLaren.jpg";

export default function Cards(){
  return(
    <div className="cards">
      <h1>Check out these EPIC Cars!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src={bugatti}
              text="Luxurious #1"
              label="Bugatti"
              path="/services"
            />
            <CardItem 
              src={lamborghini}
              text="Luxurious #2"
              label="Lamborghini"
              path="/services"
            />            
          </ul>  
          <ul className='cards__items'>
            <CardItem 
              src={Hennessey}
              text="Luxurious #3"
              label="Hennessey"
              path="/services"
            />
            <CardItem 
              src={Lotus}
              text="Luxurious #4"
              label="Lotus"
              path="/services"
            />
            <CardItem 
              src={McLaren}
              text="Luxurious #5"
              label="McLaren"
              path="/services"
            />                         
          </ul>                  
        </div>
      </div>
    </div>
  );
}