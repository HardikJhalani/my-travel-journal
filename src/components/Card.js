import React from 'react'
import location from '../images/location.svg'

function Card(props) {
  return (
    <div className='card'>
        <img src = {props.imageUrl} />
        <div className='details'>
            <div className='head'>
                <img src={location} />
                <p className='country'>{props.location}</p>
                <a href = {props.googleMapsUrl} target = "_blank">View on Google Maps</a>
            </div>
            <h2 className='heading'>{props.title}</h2>
            <span className='timeline'>
                {props.startDate} - {props.endDate}
            </span>
            <p className='desc'>{props.description}</p>
        </div>
    </div>
  )
}

export default Card