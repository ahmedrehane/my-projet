import Categorie from './Categorie/Categorie'
import Prix from './Prix/Prix'
import Color from './Color/Color'
import './Sidebar.css'

const Sidebar = ({handlChange}) =>{
    
    return(
        <>
        <section className='sidebar'>
            <div className='logo-container'>
            <h1>🛒</h1>
            </div>

            <Categorie handlChange={handlChange}/>
            <Prix handlChange={handlChange}/>
            <Color handlChange={handlChange}/>

        </section>
        </>
    )
}


export default Sidebar