import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

//import list from ".data/list.json"

function Freebook() {
    const [list,setUsers] = React.useState([{}])
  React.useEffect(()=>{
    fetch('data/list.json').then((res)=>res.json()).then((data)=>{
      setUsers(data)
     })
     
  },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
     
    
    const filterdata= list.filter((data)=>data.category==="free")
  return (
   
    <div className='max-w-screen-2x1 container mx-auto md:px-20 md:px-4'>
        
       <div >
       <h1 className='font-semibold text-x1'>Free offered courses</h1>
       <p>fufufhurhufdh</p>
       </div>
       <div className="slider-container">
       
          <Slider {...settings}>
            {filterdata.map((item)=>(
               <Card items={item} key={item.id}/>
            ))}
           
          </Slider>
        </div>
      

       </div>

   
  )
}

export default Freebook