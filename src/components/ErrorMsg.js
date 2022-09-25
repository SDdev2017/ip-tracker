import '../styles/App.scss';

import { PropTypes } from 'prop-types';

function AlertBox({setShowAlert, alertMsg}){
    return(
        <div className="alert-container">
            <div className='alert-box'>
                <div className='alert-icon'></div>
                {alertMsg}
                <button onClick={() => setShowAlert(false)}>OK</button>
            </div>
        </div>
    )
}

AlertBox.propTypes = {
    setShowAlert: PropTypes.func.isRequired,
    alertMsg: PropTypes.node.isRequired
}

export default AlertBox;