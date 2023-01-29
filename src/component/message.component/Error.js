import React from 'react'
import './message.component.style.css'
import {
faExclamationCircle
} from '../../../node_modules/font-awesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '../../../node_modules/font-awesome/react-fontawesome';

function Error(props) {
    return (props.trigger) ? (
        <div className='main-error-div'>
            <div className='container text-center' id='message-div'>
                <div id='main-message'>
                    <p>{props.errorText}
                        <FontAwesomeIcon icon={faExclamationCircle} />
                    </p>
                    <button className='btn btn-danger' onClick={() => props.setTrigger(false)}>Close</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default Error
