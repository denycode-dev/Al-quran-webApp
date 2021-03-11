import React from 'react'

export default function TafsirCard(props) {
  return (
    <div className="container">
      <h1 className="bg-white p-5 text-xl font-bold">{props.data.data?.number}. {props.data.data?.name.transliteration.id}</h1>
      <hr className="my-4" />
      {
        props.data.data?.verses.map(
          data => {
            return (
            <div className="mb-5">
              <p className="bg-white p-5 rounded">
                <span className="font-bold text-xl mr-4">{data.number.inSurah}.</span>
                <span className="text-3xl font-thin">{data.text.arab}</span> 
                <br />
                {data.text.transliteration.en}
                <br />
                <span className="text-md text-sm text-gray-700 italic">{data.translation.id}</span>
              </p>
              <hr />
              <p className="bg-white p-5 rounded">{data.tafsir.id.long}</p>
              <hr/>
            </div>
            )
          }
        )
      }
      </div>
  )
}
