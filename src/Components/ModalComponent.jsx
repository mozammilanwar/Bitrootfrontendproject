import React from 'react'
import { FaCircle } from "react-icons/fa";
const ModalComponent = ({item,onClose}) => {
  return (
    <div className='cardComponent modal'>
    <div className='modalComponent'>
      <button onClick={onClose}>X</button>
        <img src={item.thumbnail.small} className='modalImage'/>
        <div className='cardContent'>
        <div className='icon'>
        <FaCircle className='first'/>
        <FaCircle className='second'/>
        </div>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
        <div className='bottomComponent'>
          <img src={item.author.avatar}/>
            <p>{item.author.name}-{item.author.role}</p>
        </div>
        </div>
    </div>

      </div>
    
  )
}

export default ModalComponent