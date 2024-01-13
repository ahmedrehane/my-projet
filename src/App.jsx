import { useState } from 'react';
import Nav from './Navigateur/Nav'
import Product from './product/product';
import Recommand from './Recommand/Recommand';
import Sidebar from './Sidebar/Sidebar';

  //Database
  import product from './db/Data'

  
  

  function App() {
  const[selectedCategorie, setSelectedCategorie] = useState(null)


  //-----------Input Filter------------
  const[query, setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value)
   };  

   const filteredItems = product.filter(products=>products.title.
    toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1)
    )
    //-----------Radio Filter------------

      return(

      
      <>
    
      <Sidebar/>

      <Nav/>

    <Recommand/>

    <Product/>
    


    </>
    
      
    
  );
}

export default App

