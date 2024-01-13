import Input from '../../Components/Input'
import './Categorie.css'

const Categorie = ({handlChange}) =>{
    return(
        <>
        <div>
            <h2 className='sidebar-title'>Categorie</h2>

            <div>
           <label className='sidebar-label-container'>
            <input onChange={handlChange} type='radio' value="" name='test' />
            <span className='checkmark'></span>All

            
           </label>



           <Input
           
            handlechange={handlChange}
            value='sneakers'
            title='Sneakers'
            name='test'

           />
           <Input
           
           handlechange={handlChange}
           value='falts'
           title='Falts'
           name='test'

          />
          <Input
           
           handlechange={handlChange}
           value='sandals'
           title='Sandals'
           name='test'

          />
          <Input
           
           handlechange={handlChange}
           value='heels'
           title='Heels'
           name='test'

          />
          
           
            </div>
        </div>
        </>
    )
}


export default Categorie