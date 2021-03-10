/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

export default function SurahInfo(props) {
  return (
    <div className="bg-white p-5 rounded-xl">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Tentang Surah
          </h3>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <p className="animate-pulse hover:text-green-600 cursor-pointer" onClick={()=> props.goTafsir(props.data?.nomor)}>Lihat tafsir surah {props.data?.nama} di sini <i class="fas fa-external-link-alt"></i></p>
          </dd>
        </div>
        <div class="border-t border-gray-200">
          <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <ReactAudioPlayer
              src={props.data?.audio}
              controls
              className="w-100"
            />
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Nama Surah
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {props.data?.asma} - {props.data?.nama} - {props.data?.arti}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                diturunkan
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {props.data?.type}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Total Jumlah Ayat
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {props.data?.ayat}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Total Jumlah Rukuk
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {props.data?.rukuk}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Urutan diturunkan ke
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {props.data?.urut}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5  sm:px-6">
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" dangerouslySetInnerHTML={{ __html: props.data?.keterangan }}>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
