import React from 'react'
//import list from '../data/list.json'
import Card from './Card'
import { Link } from 'react-router-dom'

function Courses() {
    const [list,setUsers] = React.useState([{}])
    React.useEffect(()=>{
      fetch('data/list.json').then((res)=>res.json()).then((data)=>{
        setUsers(data)
       })
       
    },[])
  return (
    <div className='max-w-screen-2x1 container mx-auto md:px-20 md:px-4'>
        <div className='mt-28 item-center  justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here!</span></h1>
            <p className='mt-12'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus similique inventore consequatur ratione aliquam, iusto vitae veniam! Nostrum natus blanditiis culpa consequuntur alias eum incidunt harum, accusantium placeat, quia est!
            </p>
            <Link to="/">
            <button className='bg-pink-500 mt-6 px-4 py-2 hover:bg-pink-700 rounded-md text-white'>Back</button>
            </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4'> 
            {list.map((item)=>(
                <Card items={item} key={item.id} />
            ))}

        </div>

    </div>
  )
}

export default Courses