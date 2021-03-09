import React, { Component } from 'react'
import './DetailSurah.css'
import axios from 'axios'
import GlobalAPI from '../../Services/GlobalAPI'

//Import Component
import Navbar from '../../Components/Navbar'
import AyatCard from '../../Components/AyatCard'
// import SurahInfo from '../../Components/SurahInfo'

export default class DetailSurah extends Component {
  state = {
    surah : [],
    surahInfo: []
  }
  getFromApi = () => {
    GlobalAPI.getSurahInfo()
    .then((res)=>{
      this.setState({
        surahInfo : res
      })
    })
  }
  componentDidMount(){
      let id = this.props.match.params.surah
      axios.get(`https://al-quran-8d642.firebaseio.com/surat/${id}.json`)
      .then(res => {
        this.setState({
          surah : res.data
        })
      })
      this.getFromApi()
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="col-span-2 surah rounded-xl height">
            {
              this.state.surah.map(
                surah => {
                  return <AyatCard key={surah.nomor} data={surah}/>
                }
              )
            }
          </div>
          {/* <SurahInfo className="col-span-1 height" data={this.state.surahInfo[this.props.match.params.surah - 1]}/> */}
        </div>
      </div>
    )
  }
}
