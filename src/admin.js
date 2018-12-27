import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class Admin extends Component {
  render() {
    return <Row>
        <Col span='3' col-3>Left</Col>
        <Col span='21' col-21>Right</Col>
    </Row>
  }
}
