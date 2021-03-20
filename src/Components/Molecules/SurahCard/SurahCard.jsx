import React from 'react'
import RoundedCountNumber from '../../Atoms/RoundedCountNumber/RoundedCountNumber'

export default function SurahCard(props) {
  return (
        <div className="transition duration-100 bg-white shadow-lg rounded-lg hover:bg-green-100 cursor-pointer"  onClick={() => props.goDetail(props.data.nomor)}>
          <div className="flex justify-content-center align-items-center px-4 py-6">
            <RoundedCountNumber count={props.data.nomor}/>
            <div>
                <h1 className="text-gray-700 text-xl">{props.data.asma}</h1>
                <p className="text-gray-700 text-xl font-bold">{props.data.nama}</p>
                <span className="text-gray-700 text-sm">{props.data.arti} <br /></span>
                <span className="text-gray-500 text-sm">{props.data.type} |</span>
                <span className="ml-3 text-gray-500 text-sm">total : {props.data.ayat} ayat</span>
            </div>
          </div>
        </div> 
  )
}
