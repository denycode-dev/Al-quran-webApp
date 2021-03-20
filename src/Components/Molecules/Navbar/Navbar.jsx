import React from 'react'
import {Link} from 'react-router-dom'

//Import Assets
import Logo from '../../../Assets/img/allah.png'

export default function Navbar() {
  return (
    <div className="bg-green-500 px-8 py-4 flex flex-row">
        <img src={Logo} alt="Logo qur'an App" className="w-12"/>
        <Link to="/">
          <h1 className="font-semibold text-2xl text-white ml-5 cursor-pointer mt-1">Belajar Qur'an</h1>
        </Link>
    </div>
  )
}
