import React from 'react'
import LoadingBox from '../../Molecules/LoadingBox/LoadingBox'

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center">
      <LoadingBox title="mohon tunggu"/>
    </div>
  )
}
