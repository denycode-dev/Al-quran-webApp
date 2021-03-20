import React from 'react'

export default function TextWithArrow({onClick, Text}) {
  return (
    <p className="cursor-pointer text-green-400 hover:text-green-600" onClick={onClick}>
    {Text} <i className="far fa-arrow-alt-circle-right" />
    </p>
  )
}
