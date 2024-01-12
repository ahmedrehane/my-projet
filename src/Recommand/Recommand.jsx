import './Recommand.css'

const Recommand = () =>{
    return(
        <>
        <div>
            <h2 className='recommand-title'>Recommand</h2>
            <div className='recommand-flex'>
                <button className='btns'>All Products</button>
                <button className='btns'>Nike</button>
                <button className='btns'>Adidas</button>
                <button className='btns'>Puma</button>
                <button className='btns'>Vans</button>
            </div>
        </div>
        </>
    )
}


export default Recommand