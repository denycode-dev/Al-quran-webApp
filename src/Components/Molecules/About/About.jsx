/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Ads from '../../Atoms/Ads/Ads'
import ProfileCard from '../../Atoms/ProfileCard/ProfileCard'

export default function About() {
  return (
    <div>
      <div className="md:p-8 p-4 bg-gray-100 rounded-xl shadow-md">
        <Ads image="https://imgix.kitabisa.com/99bff1aa-5595-4116-b80c-93fe59366bd7.jpg?ar=16:9&w=664&auto=format,compress" link="https://kitabisa.com/campaign/celenganpemudatersesat"/>
        <h1
          className="font-semibold text-gray-900 leading-none text-xl mt-4 capitalize truncate"
        >
          Tentang
        </h1>
        <div className="max-w-full">
          <p className="text-base font-medium tracking-wide text-gray-600 mt-2">
            Projek Belajar Qur'an ini bertujuan mempermudah para akademisi, guru, atau semua orang-orang
            untuk dapat mempelajari Al-qur'an dengan lebih mudah.
          </p>
        </div>
          <ProfileCard image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" altName="github logo" title="Bantu Kembangkan Projek Ini" desc="Projek non profit dan 100% open source"/>
      </div>
    </div>
  )
}
