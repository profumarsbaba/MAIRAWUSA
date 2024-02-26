import React, { useState, useEffect} from "react";
import "./Popular.css";
import  Item from '../Item/Item'
const Popular = () => {
  


  const [popularinmilk, setPopularinmilk] = useState([])

  useEffect(()=>{
   fetch(`${process.env.REACT_APP_API_URL}/popularinmilk`).then((response)=>response.json()).then((data)=>setPopularinmilk(data))
  },[])

  return ( 
    <div className="popular">
      <h1>POPULAR IN MILK</h1>
      <hr />
      <div className="popular-items">
        {popularinmilk.map(
          (item) => (
            (item.category === 'milik')?
            <Item
              key={item?.id}
              item={item}
            />:null
            
          ))}
      </div>
    </div>
  );
};

export default Popular;
