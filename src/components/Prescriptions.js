import React,{Component} from 'react'
import Admin from './Admin'
import './Dashboard.css'

class Prescriptions extends Component{
    render(){
        return(
            <div>
                <Admin />
                <div>
                <h1 className='dash-head'>My Prescriptions </h1>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Prescriptions