import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent';
import ModalComponent from './ModalComponent';


const CardsComponent = () => {
    const [data,setData]=useState([]);
    const[showModal,setShowModal]=useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

  useEffect(()=>{
    fetchData();
  },[]);
  async function fetchData(){
    const response=await axios.get(`https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts`);
    setData(response.data); 
     
  }
  const handleCardClick = (item) => {
    console.log("card Clicked",item);
    setSelectedCard(item);
    setShowModal(true);
};

const closeModal = () => {
    setShowModal(false);
    setSelectedCard(null);
};
  return (
    <div className={`cardsComponent ${showModal?'modal-open':''}`}>

        {
            data.map((item,i)=>(
              (i===data.length-1)?<CardComponent key={item.id} item={item} last={data.length} onClick={()=>handleCardClick(item)}/>:<CardComponent key={item.id} item={item} onClick={()=>handleCardClick(item)}/>
            ))
        }
        {
          
          showModal&& <ModalComponent item={selectedCard} onClose={closeModal}/>
      
        }
    </div>
  )
}

export default CardsComponent