import React from 'react'
import { Link } from 'react-router-dom'

const Gif = ({gif,hover=true}) => {
  return (
    <Link to={`/${gif.type}/${gif.slug}`}>
     <div className='w-full mb-2 cursor-pointer relative group'>
        <img
        src={gif?.images?.fixed_width.webp}
        alt={gif?.title}
        className='w-full object-cover rounded transition-all duration-300'
        />
        {hover &&<div className='absolute inset-0 opacity-0 group-hover:opacity-100 rounded '>

          <img
          src={gif?.user?.avatar_url}
          alt={gif?.user?.display_name}
          className='h-8'
          
          />
          <span>{gif?.user?.display_name}</span>
          </div>}
     </div>

    </Link>
  )
}

export default Gif