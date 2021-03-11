import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import TafsirComp from '../../Components/TafsirComp'
import './AyatTafsir.css'

export default class AyatTafsir extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <TafsirComp />
        </div>
      </div>
    )
  }
}
