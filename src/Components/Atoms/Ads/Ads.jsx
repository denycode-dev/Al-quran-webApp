/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Ads({ image, link }) {
  return (
    <a href={link}>
      <img
        className="rounded-lg w-full mt-11"
        src={image}
      />
      <p className="animate-pulse text-indigo-500 font-semibold text-base hover:text-indigo-300">Mari Bantu Donasi Ke Celengan Pemuda Tersesat</p>
    </a>
  )
}
