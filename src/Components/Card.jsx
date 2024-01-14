
import { AiFillStar } from 'react-icons/ai'
import {BsFillBagHeartFill} from 'react-icons/bs'

const Card = ({img,title,star,reviews,prevPrice,newPrice}) =>{
    return(
        <>
     <section className='card'>
     <img src={img}
       alt={title}
      className='card-img'
       />
      <div className='card-details'>
      <h3 className='card-title'>{title}</h3>   
      <section className='card-reviews'>
      {star}{star}{star}{star}
        <AiFillStar className='ratings-start' /> 
        <AiFillStar className='ratings-start' />
         <AiFillStar className='ratings-start' />
         <AiFillStar className='ratings-start' />
        <span className='total-reviews'>{reviews}</span>
         </section>
         <section className='card-prix'>
            <div className='prix'>
            <del>{prevPrice}</del> {newPrice}
            </div>

            <div className='bag'>
            <BsFillBagHeartFill className='bag-icon'/>

            </div>
         </section>
        </div>
        </section>
        </>
    )
}

export default Card