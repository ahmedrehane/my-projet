import './Categorie.css'

const Categorie = () =>{
    return(
        <>
        <div>
            <h2 className='sidebar-title'>Categorie</h2>

            <div>
            <label className='sidebar-label-container'>
            <input type='radio'name='test' />
            <span className='checkmark'></span>All
            </label>
            <label className='sidebar-label-container'>
            <input type='radio'name='test' />
            <span className='checkmark'></span>Sneakers
            
            </label><label className='sidebar-label-container'>
            <input type='radio'name='test' />
            <span className='checkmark'></span>Flats
            
            </label><label className='sidebar-label-container'>
            <input type='radio'name='test' />
            <span className='checkmark'></span>Sandals
            
            </label><label className='sidebar-label-container'>
            <input type='radio'name='test' />
            <span className='checkmark'> </span>Heels
            
            
            </label>
            </div>
        </div>
        </>
    )
}


export default Categorie