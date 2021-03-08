import React from 'react'

export default function AyatCard() {
  return (
    <div className="bg-white p-5 rounded-xl mt-3">
      <div>
        <div class="rounded-lg overflow-hidden">
          <div class="relative bg-white">
            <div class="py-10 px-8">
              <h3 class="text-2xl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّ حِيمِ</h3>
              <p className="mt-2">bismi <strong>al</strong>l<u>aa</u>hi <strong>al</strong>rra<u>h</u>m<u>aa</u>ni <strong>al</strong>rra<u>h</u>iim<strong>i</strong></p>
              <p class="leading-7 mt-3 font-thin">Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang</p>
              <div class="mt-10 flex justify-between items-center">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-green-400">
                    <span className="text-white">1</span>
                </div>
                <a
                  href="https://collect.criggzdesign.com/index.php/resources/mockups/notepad/"
                  class="flex items-center"
                >
                  <p class="mr-4">Lihat tafsir</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.125"
                    height="13.358"
                    viewBox="0 0 14.125 13.358"
                  >
                    <g transform="translate(-3 -3.293)">
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                        fill="#1d1d1d"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
