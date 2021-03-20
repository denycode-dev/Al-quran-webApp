import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../../Molecules/Navbar/Navbar'
import TafsirCard from '../../Molecules/TafsirCard/TafsirCard'
import './Tafsir.css'
import Loading from '../Loading/Loading'

export default class Tafsir extends Component {
  state = {
    tafsir : [],
    loading: true
  }
  componentDidMount(){
    let id = this.props.match.params.tafsir
    axios.get(`https://api.quran.sutanlab.id/surah/${id}`)
    .then(res => {
      this.setState({
        tafsir : res.data,
        loading: false
      })
    })
}
  render() {
    if(this.state.loading){
      return <Loading />
    }else{
      return (
        <div>
          <Navbar />
          <TafsirCard data={this.state.tafsir}/>
        </div>
      )
    }
  }
}
