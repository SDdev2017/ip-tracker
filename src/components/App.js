import {useEffect, useState} from 'react';

import '../styles/App.scss';
import Search from './SearchComponent';
import Map from './Map';
import AlertBox from './ErrorMsg';
import Footer from './Footer';

function App() {

  const [searchInput, setSearchInput] = useState('');
  const [fetchedData, setFetchedData] = useState(null);
  const [triggerFetch, setTrigger] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  useEffect(() => {
    const fetchip = async (ip) => {
      //RegEx checking whether ip parameter is a valid domain or ip address;
      const re = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
      
      if(ip !== ''){
        if(re.test(ip)){
          ip = '&domain=' + ip;
        }else{
          ip = '&ipAddress=' + ip;
        }
      }
  
      //REST API url
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_r39kpSudYWC0j48z40eei4tD0ODbw${ip}`;
  
      let response = await fetch(url);

      //check if response status is 200-299. Otherwise show alert box with message to the user.
      if(response.ok){
        let data = await response.json();
        setSearchInput(data.ip);
        setFetchedData(data);
      }else{
        if(response.status >= 500){
          setAlertMsg(<p>It seems like you have no connection!<br/> Please check your network and try again!</p>);
        }else{
          setAlertMsg(<p>It seems like you have entered invalid IP or domain name.<br/>Please try again.</p>);
        }
        setShowAlert(true);
      }
    }

    fetchip(searchInput);
  },[triggerFetch]);

  return (
    <>
      {showAlert && <AlertBox setShowAlert={setShowAlert} alertMsg={alertMsg}/>}
      <Search 
        searchInput={searchInput} 
        setSearchInput={setSearchInput} 
        fetchedData={fetchedData} 
        setTrigger={setTrigger} 
        triggerFetch={triggerFetch}
      />
      <Map fetchedData={fetchedData}/>
      <Footer/>
    </>
  );
}

export default App;
