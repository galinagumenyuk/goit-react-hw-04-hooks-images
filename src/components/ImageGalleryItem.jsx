import React from "react";

const Item = ({ image, onClick }) => {
    return (
        <li>
            <img src={image.webformatURL} alt={image.tags} onClick={()=> onClick(image.id) }/>
        </li>
    )
  
}


export default Item;