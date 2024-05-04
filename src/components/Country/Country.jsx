import React from 'react'
import './Country.css'

const Country = ({country}) => {
  return (
    <div className='country'>
        <h3>{country.name.common}</h3>
        <img src={country.flags.png} />
    </div>
  )
}

export default Country