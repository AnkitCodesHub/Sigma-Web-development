import React from 'react'
import"./Card.css"
const Card = (props) => {
  return ( 
    <div className='card' style={{overflow:"hidden"}}>
        <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" alt="image" width={233}
        style={{border:"2px solid black"}}/>
       
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card