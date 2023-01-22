import React from 'react'
import spinner from '../Images/spinner.svg'

export default function Spinner() {
  return (
    <div className='text-center'>
        <img src={spinner} alt="spinner" width="100px"/>
    </div>
  )
}
