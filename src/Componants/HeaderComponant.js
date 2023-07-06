import React from 'react'

function HeaderComponant(props) {
  return (
    <div className='header-inner '>
      <h1>Name :{props.listUser[props.idUser].Name}  </h1>
      <h2>City : {props.listUser[props.idUser].city}</h2>
    </div>
  )
}

export default HeaderComponant
