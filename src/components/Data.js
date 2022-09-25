import '../styles/App.scss';

function Data({fetchedData}){
    return(
        <div className="data-container">
            <div className='item'>
                <span className='item-heading'>ip address</span>
                <span className='data-displayer'>{fetchedData.ip}</span>        
            </div>
            <div className='item'>
                <span className='item-heading'>location</span>
                <span className='data-displayer'>{fetchedData.location.city},{fetchedData.location.region}</span>
            </div>
            <div className='item'>
                <span className='item-heading'>timezone</span>
                <span className='data-displayer'>UTC {fetchedData.location.timezone}</span>
            </div>
            <div className='item'>
                <span className='item-heading'>isp</span>
                <span className='data-displayer'>{fetchedData.isp}</span>
            </div>
        </div>
    );
}

export default Data;