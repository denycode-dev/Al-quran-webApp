import React from 'react'

export default function AyatCard(props) {
  return (
    <div className="bg-white p-5 rounded-xl mt-3">
      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative bg-white">
            <div class="py-10 px-8">
              <h3 class="text-2xl font-sans font-thin">{props.data.ar}</h3>
              <span className="mt-2" dangerouslySetInnerHTML={{ __html: props.data.tr }}></span>
              <p class="leading-7 mt-3 font-thin">{props.data.id}</p>
              <div class="mt-10 flex justify-between items-center">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-green-400">
                    <span className="text-white">{props.data.nomor}</span>
                </div>
                <p className="cursor-pointer text-green-400 hover:text-green-600" onClick={() => props.goDetail(props.data?.nomor)}>Lihat Tafsir <i class="far fa-arrow-alt-circle-right"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
