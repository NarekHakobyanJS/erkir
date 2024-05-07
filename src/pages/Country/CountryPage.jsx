import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { countriesAPI } from '../../api/api'

const CountryPage = ({country, dispatch}) => {
  
  const {name} = useParams()

  useEffect(() => {
    countriesAPI.getCountry(dispatch, name)
  }, [])

  return (
    <div>
      {
        country?.map((c) => {
          return (
            <div>
              <h4>{c.name.common}</h4>
              <img src={c.coatOfArms.png} />
            </div>
          )
        })
      }
    </div>
  )
}

export default CountryPage