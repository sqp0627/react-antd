import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
import { formateDate } from '../../urils/formateDate.utils'
import axios from '../../axios/index'

export default class Header extends Component {

  componentWillMount() {
    this.setState({
      userName: '河畔一角'
    })

    setInterval(() => {
      const sysTiem = formateDate(new Date().getTime());
      this.setState({
        sysTiem
      })
    }, 1000)

    this.getWeatherAPIData();
  }

  getWeatherAPIData() {
    const city = '北京';
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then(res => {
      if (res.status) {
        const data = res.results[0].weather_data[0];
        this.setState({
          weather: data.weather,
          dayPictureUrl: data.dayPictureUrl
        })
      }
    })
  }

  render() {
    return <Row className='header'>
      <Row className='header-top'>
        <span>欢迎，{this.state.userName}</span>
        <a href="#">退出</a>
      </Row>
      <Row className='breadcrumb'>
        <Col span={4} className="breadcrumb-title">首页></Col>
        <Col span={20} className='weather'>
          <span className="date">{this.state.sysTiem}</span>
          <span className="weather-img">
            <img src={this.state.dayPictureUrl} alt="" /></span>
          <span className='weather-detail'>
            {this.state.weather}
          </span>
        </Col>
      </Row>
    </Row>
  }
}
