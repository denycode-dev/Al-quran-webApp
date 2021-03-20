import React, { Component } from 'react';
import Navbar from '../../Molecules/Navbar/Navbar';
import TafsirComp from '../../Atoms/TafsirComp/TafsirComp';
import './AyatTafsir.css';

export default class AyatTafsir extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <TafsirComp />
        </div>
      </div>
    );
  }
}
