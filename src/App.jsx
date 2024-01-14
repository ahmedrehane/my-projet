import { useState } from 'react';
import Nav from './Navigateur/Nav'
import Product from './product/product';
import Recommand from './Recommand/Recommand';
import Sidebar from './Sidebar/Sidebar';
import'./index.css'

  //Database
  import product from './db/Data'
  import Card from './Components/Card';

  
  

  function App() {
  const[selectedCategorie, setSelectedCategorie] = useState(null)
  const[query, setQuery] = useState("")


  //-----------Input Filter------------
  const handleInputChange = event => {
    setQuery(event.target.value)
   };  

   const filteredItems = product.filter(products=>products.title.
    toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== -1
    )
    //-----------Radio Filter------------
    const handleChange = event =>{
      setSelectedCategorie(event.target.value)
    }
    //-----------Buttons Filter------------
    const handleClick = event =>{
      setSelectedCategorie(event.target.value)
    }
      function filterdData(products, selected , query){
        let filteredProduct = products

        //Filtering Input Items
        if(query){
          filteredProduct = filteredItems

        }

        //Selected Filter 
        if(selected){
          filteredProduct = filteredProduct.filter(
          
            ({category,color,company, newPrice,title}) =>
             category === selected ||
             color === selected ||
          company === selected ||
            newPrice == selected ||
             title === selected 

          
          )
        }

        return filteredProduct.map(({img,title,star,reviews,prevPrice,newPrice})=>(

        <Card
        key={Math.random()}
        img ={img}
        title ={title}
        star ={star}
        reviews = {reviews}
        newPrice = {newPrice}
        prevPrice = {prevPrice} 
        />
  
    

        
        )

        )
      }

     const result=  filterdData(product,selectedCategorie,query)





 
      

      return(
        <>
    
      <Sidebar handlechange={handleChange}/>

      <Nav query = {query} handleInputChange={handleInputChange}/>

    <Recommand handleClick={handleClick}/>
    
    

    <Product result={result} />
    


    </>
    
      
    
  );
}

export default App
      

