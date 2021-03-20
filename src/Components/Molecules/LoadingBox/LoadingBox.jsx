import React from 'react'
import DotAnimation from '../../Atoms/DotAnimation/DotAnimation'
import LoadingImage from '../../../Assets/img/loading.png'


export default function LoadingBox({title}) {
  return (
    <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
      <img src={LoadingImage} alt="loading" className="w-40" />
      <DotAnimation />
      <div className="text-gray-500 text-xs font-light mt-2 text-center">
        {title}
      </div>
    </div>
  )
}
