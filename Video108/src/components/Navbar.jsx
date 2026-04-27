import React ,{useEffect}from 'react'


const Navbar = ({color}) => {
// case 1 :  Run on every render
 useEffect(() => {
 alert("Hey I wil run on e every render")
 })
//  case 2 : Run only on first render
useEffect(() => {
 alert("Hey Welcome to my page.")
 },[])
//  case 3 : Run only whe certain values change
 useEffect(()=>{
  alert("Hey i am running because color was changed")
},[color])
  useEffect(() =>{
    alert("Color Was Changed")
  },[color])
  return (
    <div>I am Navbar of {color} color Hehe</div>
  )
}

export default Navbar