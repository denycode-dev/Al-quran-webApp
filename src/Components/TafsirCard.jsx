import React from 'react'

export default function TafsirCard(props) {
  // console.log(props.data.data?.verses)
  return (
    <div className="container bg-white p-5 rounded-md">
      {/* <h1 className="text-xl font-semibold">{props.data?.nama_latin} | {props.data?.arti}</h1> */}
      <h1>{props.data.data?.name.transliteration.id}</h1>
      <hr className="my-4" />
      {/* <p dangerouslySetInnerHTML={{ __html: props.data?.deskripsi }}></p> */}
      {
        props.data.data?.verses.map(
          data => {
            return (
            <div>
              <p>{data.number.inSurah}. {data.text.arab}</p>
              <p>{data.translation.id}</p>
              <p>{data.text.transliteration.en}</p>
              <p>{data.tafsir.id.long}</p>
              <hr/>
            </div>
            )
          }
        )
      }
      </div>
  )
}
