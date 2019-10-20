import React,{Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Link } from 'react-router-dom'
import './styles.css'
class Signup extends Component{
    render(){
        return(
            <div>
                <Navbar className='my-navbar'>
                    <Navbar.Brand> <img className='logo-img' src='https://srv-file7.gofile.io/download/3Hx3XU/Screenshot%20(102).png' alt='logo' /> </Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                    <Link to='/executives'> <button class="btn btn-lg my-btn btn-block" type="submit">Not a patient?</button></Link>
                    </Navbar.Text>
                    <Navbar.Text >
                        <p className='navv-text' >About Us</p>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                <div className='signup-form'>
                <form action="/" class="form-signin" method="POST">
                    <h1 class="h3 mb-3 heading">Sign Up !</h1>
                    <input type="text" name="name" class="form-control top" placeholder="Your Name" required autofocus />
                    <input type="email" name="email" class="form-control middle" placeholder="Email address" required />
                    <input type="password" name="pwd" class="form-control bottom" placeholder="Password" required />
                    <div class="checkbox mt-5 mb-3">
                        Already have an account? <Link to='/login' > Login</Link>
                    </div>
                    <Link to='/login' ><button class="btn btn-lg btn-block my-btn" type="submit">Sign Up</button></Link>
                </form>
                </div>
            </div>
        )
    }
}

export default Signup