import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import {Row, Col} from 'antd'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import NavLeft from './src/components/NavLeft'
import Home from './src/pages/home';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from "./src/pages/login";

function App() {
    return (
        <BrowserRouter>
            <Row className="container">
                <Col span={4} className="navLeft">
                    <NavLeft/>
                </Col>
                <Col span={20} className="main">
                    <Header/>
                    <Row className="content">
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/login'} exact component={Login}/>
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
