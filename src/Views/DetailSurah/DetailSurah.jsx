import React, { Component } from 'react'
import './DetailSurah.css'
import axios from 'axios'

//Import Component
import Navbar from '../../Components/Navbar'
import AyatCard from '../../Components/AyatCard'
import SurahInfo from '../../Components/SurahInfo'

export default class DetailSurah extends Component {
  state = {
    surah : []
  }

  componentDidMount(){
      let id = this.props.match.params.surah
      console.log(id)
      axios.get(`http://localhost:2000/surat/${id}.json`)
      .then(res => {
        
        this.setState({
          surah : res.data
        })
      })
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container grid grid-cols-3 gap-3 rounded-lg">
          <div className="col-span-2 surah rounded-xl height">
            {
              this.state.surah.map(
                surah => {
                  return <AyatCard key={surah.nomor} data={surah}/>
                }
              )
            }
          </div>
          <SurahInfo className="col-span-1 height" data={this.state.surah}/>
        </div>
      </div>
    )
  }
}
