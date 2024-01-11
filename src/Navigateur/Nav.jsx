import{FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart,AiOutlineUserAdd, } from 'react-icons/ai';

import './Nav.css'

const Nav = () =>{
    return(
        <>
        <nav>
            <div className='nav-container'>

             <input type='text'
            className='search-input'
             placeholder='Enter your search shoes ' />


            </div>
            <div className='nav-profil'>
            <a href='#'>
           <FiHeart className='nav-icones'/>

            </a>
            
            <a href='#'>
           <AiOutlineShoppingCart className='nav-icones'/>
            </a>
            <a href='#'>
           <AiOutlineUserAdd className='nav-icones'/>
            </a>
            </div>
        </nav>

        </>
    )
}


export default Nav