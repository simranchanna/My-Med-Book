import React,{Component} from 'react'
import Admin from './Admin'
import {Row , Col } from 'react-bootstrap'
import './Dashboard.css'
class About extends Component{
    render(){
        return(
            <div>
                <Admin />
                <div>
                <h1 className='dash-head'>About</h1>
                </div>
                <div>
                    <Row>
                        <Col><h5>Name : </h5></Col>
                    </Row>
                    <Row>
                        <Col><h5>Email id : </h5></Col>
                    </Row>
                    <Row>
                        <Col><h5>Age :</h5></Col>
                    </Row>
                    <Row>
                        <Col><h5>City : </h5></Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default About