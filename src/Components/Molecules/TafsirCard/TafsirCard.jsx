import React from 'react'
import AyatText from '../../Atoms/AyatText/AyatText'

export default function TafsirCard(props) {
  return (
    <div className="container">
      <h1 className="bg-white p-5 text-xl font-bold">Tafsir Surah ke {props.data.data?.number} {props.data.data?.name.transliteration.id} | {props.data.data?.name.translation.id} | {props.data.data?.name.long}</h1>
      <hr className="my-4" />
      {
        props.data.data?.verses.map(
          data => {
            return (
            <div className="mb-5">
              <div className="bg-white p-5 rounded">
                <AyatText ArabText={data.text.arab} ReadingText={data.text.transliteration.en} TranslationText={data.translation.id}/>
              </div>
              <hr />
              <p className="bg-white p-5 rounded">{data.tafsir.id.short}</p>
            </div>
            )
          }
        )
      }
      </div>
  )
}
