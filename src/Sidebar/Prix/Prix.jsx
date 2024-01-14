import Input from '../../Components/Input'
import './Prix.css'

const Prix = (handlChange) =>{

    return(
        <>
        <div className='ml'>
            <h2 className='sidebar-title-prix-title'>Prix</h2>

            
            <label className='sidebar-label-container'>
            <input onchange={handlChange} type='radio' value="" name='test2' />
            <span className='checkmark'></span>All
            
           </label>

            <Input 

            handlChange={handlChange}
            value={50}
            title='$0-$50'
            name='test2'

            />
            <Input 

            handlChange={handlChange}
            value={100}
            title='$50-$100'
            name='test2'
            
            />
            <Input 

            handlChange={handlChange}
            value={150}
            title='$100-$150'
            name='test2'
            
            />
            <Input 

            handlChange={handlChange}
            value={200}
            title='Over '
            name='test2'
            
            />




        </div>

        </>
    )
}


export default Prix