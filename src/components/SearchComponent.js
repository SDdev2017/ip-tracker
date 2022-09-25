import { PropTypes } from 'prop-types';

import '../styles/App.scss';
import Data from './Data';

function Search({searchInput, setSearchInput, fetchedData, setTrigger, triggerFetch}){
    return(
        <header className='search-container'>
            <h1>IP Address Tracker</h1>
            <div className='search-input-wrapper'>
                <input 
                    type='search' 
                    name='search-input' 
                    value={searchInput} 
                    placeholder='Search for any IP address or domain'
                    onChange={(e) => setSearchInput(e.target.value)}
                    />
                <button onClick={() => {setTrigger(!triggerFetch)}}>Search</button>
            </div>
            { fetchedData && <Data fetchedData={fetchedData}/> }
        </header>
    );
}

Search.propTypes = {
    searchInput: PropTypes.string.isRequired,
    setSearchInput: PropTypes.func.isRequired,
    fetchedData: PropTypes.object,
    setTrigger: PropTypes.func.isRequired,
    triggerFetch: PropTypes.bool.isRequired
}

export default Search;