import React from 'react'

function Card(props) {
  return (
    <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={props.items.icon}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {props.items.title}
      <div className="badge badge-secondary">{props.items.category}</div>
    </h2>
    <p>{props.items.description}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">{props.items.pages}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full hover:bg-pink-500 hover:text-white">BUY NOW</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card