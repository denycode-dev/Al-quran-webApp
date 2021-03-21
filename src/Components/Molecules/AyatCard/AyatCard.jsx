import React from 'react'
import AyatText from '../../Atoms/AyatText/AyatText'
import RoundedCountNumber from '../../Atoms/RoundedCountNumber/RoundedCountNumber'
import TextWithArrow from '../../Atoms/TextWithArrow/TextWithArrow'

export default function AyatCard(props) {
  return (
    <div className="bg-white p-5 rounded-xl mt-3">
        <div className="rounded-lg overflow-hidden">
          <div className="relative bg-white">
            <div className="py-10 px-8">
              <AyatText ArabText={props.data.ar} ReadingText={props.data.tr} TranslationText={props.data.id}/>
              <div className="mt-10 flex justify-between items-center">
                <RoundedCountNumber count={props.data.nomor}/>
                {/* <TextWithArrow onClick={() => props.goDetail(props.data?.nomor)} Text="Lihat Tafsir"/> */}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
