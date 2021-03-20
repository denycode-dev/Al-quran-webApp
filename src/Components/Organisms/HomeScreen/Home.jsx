/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css'

import React, { Component } from 'react'
import GlobalAPI from '../../../Services/API'
//Import Components
import Navbar from '../../Molecules/Navbar/Navbar'
import Card from '../../Molecules/SurahCard/SurahCard'
import DetailQuranCard from '../../Molecules/About/About'
import Loading from '../Loading/Loading'

export default class Home extends Component {
  state = {
    loading: true,
    surahInfo : []
  }
  getFromApi = () => {
    GlobalAPI.getSurahInfo()
    .then((res)=>{
      this.setState({
        loading: false,
        surahInfo : res
      })
    })
  }
  componentDidMount(){
    this.getFromApi()
  }
  handleGoDetail = (id) => {
    this.props.history.push(`/${id}`);
  }
  render() {
    if(this.state.loading){
      return <Loading />
    }else{
    return (
      <div>
        <Navbar />
        <div className="grid grid-cols-4 gap-3 container gridSystem">
          <DetailQuranCard className="col-span-1"/>
          <div className="col-span-3  bg-gray-100 p-10 rounded-xl shadow-lg grid gap-3 grid-cols-3 gridSystem">
            {   
              this.state.surahInfo.map(
                info => {
                  return <Card key={info.nomor} data={info}  goDetail={this.handleGoDetail}/>
                }
              )
            }
          </div>
        </div>
        <footer className="text-center text-gray-400 p-5">
          <a href="https://www.linkedin.com/in/deniirawan99/" className="text-decoration-none">&copy; Deni Irawan Nugraha</a>
        </footer>
      </div>
    )
          }
  }
}
