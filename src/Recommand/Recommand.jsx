import Button from '../Components/Button'
import './Recommand.css'

const Recommand = ({handleClick}) =>{
    return(
        <>
        <div>
            <h2 className='recommand-title'>Recommand</h2>
            <div className='recommand-flex'>
                <button className='btns'>All Products</button>
                <Button onClickHandler={handleClick} value= 'title' title='All Products'/>
                <Button onClickHandler={handleClick} value= 'Nike' title='Nike'/>
                <Button onClickHandler={handleClick} value= 'Adidas' title='Adidas'/>
                <Button onClickHandler={handleClick} value= 'Puma' title='Puma'/>
                <Button onClickHandler={handleClick} value= 'Vans' title='Vans'/>
            </div>
        </div>
        </>
    )
}


export default Recommand