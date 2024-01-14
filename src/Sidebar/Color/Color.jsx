import Input from '../../Components/Input'
import './Color.css'

    const Color = ({handlChange}) =>{
    return(
        <>
        <div>
        <label className='sidebar-label-container'>
            <input onChange={handlChange} type='radio' value="" name='test' />
            <span className='checkmark all'></span>All
            
           </label>
           <Input
           handlChange={handlChange}
           value='black'
           title='Black'
           name='test1'
           color='black'

            />

            <Input
           handlChange={handlChange}
           value='blue'
           title='Blue'
           name='test1'
           color='blue'

            />
            <Input
           handlChange={handlChange}
           value='red'
           title='Red'
           name='test1'
           color='red'

            />
            <Input
           handlChange={handlChange}
           value='green'
           title='Green'
           name='test1'
           color='green'

            />

            <label classname= 'sidebar-label-container'>
                <input type='radio' onchange={handlChange} value='white' name='test1'/>
                <span classname='checkmark '
                 style={{
                    background:'white',
                    border:'2px solid black'
                    }}
                    ></span>

            </label>

        </div>
        </>
    )
}


export default Color