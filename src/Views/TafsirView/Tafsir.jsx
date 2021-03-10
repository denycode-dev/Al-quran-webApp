import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar'
import TafsirCard from '../../Components/TafsirCard'
import './Tafsir.css'

export default class Tafsir extends Component {
  state = {
    tafsir : []
  }
  componentDidMount(){
    let id = this.props.match.params.tafsir
    axios.get(`https://api.quran.sutanlab.id/surah/${id}`)
    .then(res => {
      this.setState({
        tafsir : res.data
      })
    })
}
  render() {
    return (
      <div>
        <Navbar />
        <TafsirCard data={this.state.tafsir}/>
        {/* {
          this.toObject.map(
            tafsir => {
              return <TafsirComp data={tafsir}/>
            }
          )
        } */}
      </div>
    )
  }
}
