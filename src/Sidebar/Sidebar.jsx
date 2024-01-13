import Categorie from './Categorie/Categorie'
import Prix from './Prix/Prix'
import Color from './Color/Color'
import './Sidebar.css'

const Sidebar = ({handleChange}) =>{
    
    return(
        <>
        <section className='sidebar'>
            <div className='logo-container'>
            <h1>🛒</h1>
            </div>

            <Categorie handleChange={handleChange}/>
            <Prix handleChange={handleChange}/>
            <Color handleChange={handleChange}/>

        </section>
        </>
    )
}


export default Sidebar