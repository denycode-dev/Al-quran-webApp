import React from 'react'

export default function RoundedCountNumber({count}) {
  return (
      <p className="text-sm w-8 font-semibold text-green-700 h-8 rounded-full flex items-center justify-center mr-4 bg-green-100">{count}</p>
  )
}
