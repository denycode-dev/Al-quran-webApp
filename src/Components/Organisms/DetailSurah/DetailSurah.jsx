import React, { Component } from 'react'
import './DetailSurah.css'
import axios from 'axios'
import GlobalAPI from '../../../Services/API'

//Import Component
import Navbar from '../../Molecules/Navbar/Navbar'
import AyatCard from '../../Molecules/AyatCard/AyatCard'
import SurahInfo from '../../Molecules/SurahInfo/SurahInfo'
import Loading from '../Loading/Loading'

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

  handleGoTafsir = (id) => {
    const path = this.props.match.params.surah
    
    this.props.history.push(`${path}/${id}`)
  }

  handleGoDetailTafsir = (id) => {
    this.props.history.push(`/${id}`);
  }

  render() {
    if(this.state.loading){
      return <Loading />
    }else{
    return (
      <div className="">
        <Navbar />
          <div className="container grid grid-cols-3 gap-3 gridSystem">
            <SurahInfo className="col-span-1" data={this.state.surahInfo[this.props.match.params.surah - 1]} goTafsir={this.handleGoTafsir}/>
            <div className="col-span-2 surah rounded-xl height">
              {
                this.state.surah.map(
                  surah => {
                      return <AyatCard key={surah.nomor} data={surah} goDetail={this.handleGoDetailTafsir}/>
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
