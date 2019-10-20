import React,{Component} from 'react'
import './AboutUs.css'

class AboutUs extends Component{
    render(){
        return(
            <div>
                <div className='about-us'>
                <img className='logo-img' src='https://srv-file7.gofile.io/download/3Hx3XU/Screenshot%20(102).png' alt='logo' /> 
                <h4>
                        My Med Book ensures easy access of medical reports to the Patients , Doctors and Insurance Companies . Patient can upload their entire
                        medical history on the website so that it can be accessed whenever required. Also,the website provides the access to the Doctor. Doctors
                        can easily read the medical profile and previous reports by signing in. But he should have a unique key of the respective patient. Doctors 
                        can also upload the latest prescriptions which would be shown in my prescriptions in the patients profile . The third party which can 
                        access the documents is the medical insurance company . Whenever the doctor chnages the medicines of the patient it will upload it on 
                        portal and when insurance company would check the patient's profile,it would be hassle free to make and process the bills.
                </h4>
                </div>
            </div>
        )
    }
}

export default AboutUs