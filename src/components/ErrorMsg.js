import '../styles/App.scss';

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

export default AlertBox;