import '../styles/App.scss';
import Data from './Data';

function Search({searchInput, setSearchInput, fetchedData, setTrigger, triggerFetch}){
    return(
        <section className="search-container">
            <h1>IP Address Tracker</h1>
            <div className='search-input-wrapper'>
                <input 
                    type='text' 
                    name='search-input' 
                    value={searchInput} 
                    placeholder='Search for any IP address or domain'
                    onChange={(e) => setSearchInput(e.target.value)}
                    />
                <button onClick={() => {setTrigger(!triggerFetch)}}>Search</button>
            </div>
            <Data fetchedData={fetchedData}/>
        </section>
    );
}

export default Search;