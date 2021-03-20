import React from 'react'

export default function ProfileCard({desc, image, title, altName}) {
  return (
  <div className="flex items-center space-x-2 mt-20">
    <img
      className="w-10 h-10 object-cover object-center rounded-full"
      src={image}
      alt={altName}
    />
    <div>
      <a href="https://github.com/deni-irawan40563/Al-quran-webApp" className="text-gray-900 font-semibold hover:text-blue-700">{title}</a>
      <p className="text-gray-500 font-semibold text-xs">
        {desc}
      </p>
    </div>
  </div>
  )
}
