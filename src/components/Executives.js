import React,{Component} from 'react'
import {Navbar,Row,Col} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import './styles.css'
class Executives extends Component{
    render(){
        return(
            <div>
                <Navbar className='my-navbar'>
                    <Navbar.Brand> <img className='logo-img' src='https://srv-file7.gofile.io/download/3Hx3XU/Screenshot%20(102).png' alt='logo' /> </Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <p className='navv-text' >About Us</p>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                <div className='executives'>
                 <div>
                     <h1>Welcome to the executives portal !</h1>
                 </div>
                 </div>
                 <Row>
                     <Col className='executives-col' >
                         <div className='executives-div'>
                         <h2>For Doctors</h2>
                         <div className='exec-div-1'>
                             <h5>
                                 Get access to the patient's medical history !
                             </h5>
                         </div>
                         <Link to='/doctors'> <button class="btn btn-lg btn-block my-btn btn-left" type="submit">Click Here !</button></Link>
                         </div>
                                                  
                     </Col>
                     <Col className='executives-col'>
                     <div className='executives-div'>
                         <h2>For Insurance Executives</h2>
                         <div className='exec-div-1'>
                             <h5>
                                 Get access to your customer's medical history !
                             </h5>
                         </div>
                         <button class="btn btn-lg btn-block my-btn btn-left" type="submit">Click Here !</button>
                      </div>
                     </Col>
                 </Row>
            </div>
        )
    }
}

export default Executives