import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
    const value = useSelector((state) => state.counter.value)
  return (
    <div>{ value }</div>
  )
}

export default Contact