import React, { Component } from 'react'
import { Row, Menu } from 'antd'
import menuList from './menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuList);

    this.setState({
      menuTreeNode
    })
  }

  // 菜单渲染
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          {item.title}
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <Row className="logo">
        <img src="../../../public/assets/logo-ant.svg" alt="" />
        <h1>Back MS</h1>
        <Menu theme="dark">{this.state.menuTreeNode}</Menu>
      </Row>
    )
  }
}
