import React, { useEffect, useState } from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
const NewCollection = () => {
  
  const [newcollection, setNewcollection] = useState([])

   useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}/newcollection`).then((response)=>response.json()).then((data)=>setNewcollection(data))
   },[])

  return (

    <div className='New-collection'>
        <h1>New COLLECTION</h1>
        <hr />
        <div className="New-collection-items">
          
        {newcollection.map(
          (item) => (
            <Item
              key={item?.id}
              item={item}
            />
          ))}
          
        </div>
    </div>
  )
}

export default NewCollection