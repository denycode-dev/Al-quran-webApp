/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css'

import React, { Component } from 'react'
import GlobalAPI from '../../Services/GlobalAPI'
//Import Components
import Navbar from '../../Components/Navbar'
import Card from '../../Components/Card'

export default class Home extends Component {
  state = {
    surahInfo : []
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
    this.getFromApi()
  }
  handleGoDetail = (id) => {
    this.props.history.push(`/${id}`);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container bg-gray-100 grid grid-cols-5 gap-3 p-10 rounded-xl shadow-lg">
          {
            this.state.surahInfo.map(
              info => {
                return <Card key={info.nomor} data={info}  goDetail={this.handleGoDetail}/>
              }
            )
          }
        </div>
        <footer className="text-center text-gray-400 p-5">
          <a href="#" className="text-decoration-none">&copy; Deni Irawan Nugraha</a>
        </footer>
      </div>
    )
  }
}
