import React from 'react'
import './style.css'

export default function DotAnimation() {
  return (
      <div className="loader-dots block relative w-20 h-5 mt-2">
        <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" />
        <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" />
        <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" />
        <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" />
      </div>
  )
}
