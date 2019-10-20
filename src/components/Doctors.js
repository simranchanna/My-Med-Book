import React,{Component} from 'react'
import {Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class Doctors extends Component{
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
                <div className='signup-form'>
                <form action="/" class="form-signin" method="POST">
                    <h1 class="h3 mb-3 doctor-head">Enter Patient's EmailId</h1>
                    <input type="email" name="lName" class="form-control top" placeholder="Email address" required autofocus />
                    <input type="password" name="email" class="form-control bottom" placeholder="Unique Key" required />
                    <div class="checkbox mt-5 mb-3">
                    </div>
                    <Link to='/about'><button class="btn btn-lg my-btn btn-block" type="submit">Go !</button></Link> 
                </form>
                </div>
            </div>
        )
    }
}

export default Doctors