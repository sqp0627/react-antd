import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import { Row, Col } from 'antd'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import NavLeft from './src/components/NavLeft'

function App() {
  return (
    <Row className="container">
      <Col span={4} className="navLeft">
        <NavLeft />
      </Col>
      <Col span={20} className="main">
        <Header />
        <Row className="content">Content</Row>
        <Footer />
      </Col>
    </Row>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
