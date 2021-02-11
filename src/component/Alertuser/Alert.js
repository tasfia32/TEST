import React, { useContext } from 'react'
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import AlertContext from '../Alertuser/alertContext'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const  Alert=()=> {
    const alertContext=useContext(AlertContext);
    const {alert}= alertContext;
    return (
    
       alert !== null &&( 
           <div className={`alert alert-${alert.type}`}>
            <FontAwesomeIcon icon= {faInfoCircle}
        
            />
            {alert.msg}

           </div>
       )
    );
};
export default Alert
