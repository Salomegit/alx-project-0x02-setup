import React from 'react'
import { CardProps } from "@/interfaces/index"

const Card:React.FC<CardProps> = ({title,content,link}) => {
  return (
    <div className='border p-4 rounded shadow-md'>
        <h2>Title</h2>
        <h2>{title}</h2>

        <p>{content}</p>
        <a href={link}>Read more</a>    


    </div>
  )
}

export default Card