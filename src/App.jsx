
import { useState } from 'react';
import Nav from './Navigateur/Nav'
import Product from './product/product';
import Recommand from './Recommand/Recommand';
import Sidebar from './Sidebar/Sidebar';





function App() {
  
  const[selectedCategorie, setSelectedCategorie] = useState(null)


  //Input Filter
  




  return ( 
    <>
    
    <Sidebar/>

      <Nav/>

    <Recommand/>

    <Product/>

    

    


    </>
    
      
    
  );
}

export default App
