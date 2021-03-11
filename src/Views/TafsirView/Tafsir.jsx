import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar'
import TafsirCard from '../../Components/TafsirCard'
import Loading from '../../Components/Loading'
import './Tafsir.css'

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
