import React from 'react'

export default function AyatText({ArabText, ReadingText,TranslationText }) {
  return (
    <>
      <h3 className="text-2xl font-sans font-thin">{ArabText}</h3>
      <span className="mt-2" dangerouslySetInnerHTML={{ __html: ReadingText}} />
      <p className="leading-7 mt-3 font-thin">{TranslationText}</p>
    </>
  )
}
