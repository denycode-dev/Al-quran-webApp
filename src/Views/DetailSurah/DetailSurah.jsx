import React, { Component } from 'react'
import './DetailSurah.css'
import axios from 'axios'
import GlobalAPI from '../../Services/GlobalAPI'

//Import Component
import Navbar from '../../Components/Navbar'
import AyatCard from '../../Components/AyatCard'
import SurahInfo from '../../Components/SurahInfo'
import Loading from '../../Components/Loading'

export default class DetailSurah extends Component {
  state = {
    surah : [],
    surahInfo: [],
    loading: true
  }
  getFromApi = () => {
    GlobalAPI.getSurahInfo()
    .then((res)=>{
      this.setState({
        surahInfo : res,
        loading: false
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
    if(this.state.loading){
      return <Loading />
    }else{
    return (
      <div className="">
        <Navbar />
          <div className="container grid grid-cols-3 gridSystem">
            <SurahInfo className="col-span-1 height" data={this.state.surahInfo[this.props.match.params.surah - 1]}/>
            <div className="col-span-2 surah rounded-xl height">
              {
                this.state.surah.map(
                  surah => {
                      return <AyatCard key={surah.nomor} data={surah}/>
                    }
                )
              }
            </div>
        </div>
      </div>
    )
  }
  }
}
