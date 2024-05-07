import React from 'react'
import './Country.css'
import { NavLink } from 'react-router-dom'

const Country = ({country}) => {
  return (
    <div className='country'>
        <h3>{country.name.common}</h3>
        <NavLink to={`/${country.name.common}`}>
        <img src={country.flags.png} />
        </NavLink>
        
    </div>
  )
}

export default Country