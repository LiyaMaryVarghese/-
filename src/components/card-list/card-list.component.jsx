
import './card-list.css';
import Card from "../card/card.component"; 

const CardList = (props)=>  {
   return(
            <div key="123" className="card-list">{
                props.monsters.map((monster) => {
                  return  <Card monster={monster}/>

                })}
           </div>
   );
}
export default CardList;

