import React from 'react'
import { FaCircle } from "react-icons/fa";
const CardComponent = ({item,last,onClick}) => {
  const cardClass = last ? 'cardComponent lastCard' : 'cardComponent';
  return (
    <div className={cardClass} >
        <div className='imageContainer'>
                <img src={item.thumbnail.small} alt={item.title} />
                {last && (
                    <div className='learnMore' onClick={onClick}>
                        Learn More
                    </div>
                )}
            </div>
        <div className='cardContent'>
        <div className='icon'>
        <FaCircle className='first'/>
        <FaCircle className='second'/>
        </div>
        <h2 onClick={onClick}>{item.title}</h2>
        <p>{item.content}</p>
        <div className='bottomComponent'>
        <div>
            <p>{item.author.name}-{item.author.role}</p>
        </div>
        <p>Nov 25,2024</p> 
        </div>
        </div>
    </div>
  )
}

export default CardComponent;