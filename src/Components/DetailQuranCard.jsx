/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function DetailQuranCard() {
  return (
    <div>
      <div className="md:p-8 p-4 bg-gray-100 rounded-xl shadow-md">

        <a href="https://kitabisa.com/campaign/celenganpemudatersesat">
            <img
              className="rounded-lg w-full mt-11"
              src="https://imgix.kitabisa.com/99bff1aa-5595-4116-b80c-93fe59366bd7.jpg?ar=16:9&w=664&auto=format,compress"
            />
            <p className="animate-pulse text-indigo-500 font-semibold text-base hover:text-indigo-300">Mari Bantu Donasi Ke Celengan Pemuda Tersesat</p>
        </a>

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
        <div className="flex items-center space-x-2 mt-20">
          <img
            className="w-10 h-10 object-cover object-center rounded-full"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github logo"
          />
          <div>
            <a href="https://github.com/deni-irawan40563/Al-quran-webApp" className="text-gray-900 font-semibold hover:text-blue-700">Bantu Kembangkan Projek Ini</a>
            <p className="text-gray-500 font-semibold text-xs">
              Projek non profit dan 100% open source
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
