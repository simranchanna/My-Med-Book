import React,{Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import './Admin.css'
class Admin extends Component{
    render(){
        return(
            <div>
                <Navbar className='my-navbar'>
                    <Navbar.Brand> <img className='logo-img' src='https://srv-file7.gofile.io/download/3Hx3XU/Screenshot%20(102).png' alt='logo' /> </Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <Link to='/aboutus'><p className='navv-text' >About Us</p></Link>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                    <div className='sidebar'>
                        <div className='sidebar-btn'>
                            <h4><u>Patient Profile</u></h4>
                        </div>
                        <Link to='/about'><div className='sidebar-btn'>
                            <h4>About</h4>
                        </div></Link>
                        <Link to='/reports'> <div className='sidebar-btn'>
                            <h4>My Reports</h4>
                        </div></Link>
                        <Link to='prescriptions'> <div className='sidebar-btn'>
                            <h4>My Prescriptions</h4>
                        </div></Link>
                        <Link to='settings'> <div className='sidebar-btn'>
                            <h4>Settings</h4>
                        </div></Link>                        
                    </div>
            </div>
        )
    }
}

export default Admin