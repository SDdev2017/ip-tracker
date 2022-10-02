import {useEffect, useState} from 'react';

import '../styles/App.scss';

import Search from './SearchComponent';
import Map from './Map';
import AlertBox from './ErrorMsg';
import Footer from './Footer';
import { isDomain } from '../helpers';

function App() {

  const [searchInput, setSearchInput] = useState('');
  const [fetchedData, setFetchedData] = useState(null);
  const [triggerFetch, setTrigger] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  useEffect(() => {
    const fetchip = async (ip) => {      
      let response = {};
      const parameter = isDomain(ip);
  
      //REST API url
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_r39kpSudYWC0j48z40eei4tD0ODbw${parameter}`;

      try{
        response = await fetch(url);
      }catch(e){
        setAlertMsg(<p>It seems like you're not connected to internet.<br/>Please try again.</p>);
        setShowAlert(true);
      }

      if(response.ok){
        let data = await response.json();
        setSearchInput(data.ip);
        setFetchedData(data);
      }else{
        if(response.status === 400 || response.status === 422){     
          setAlertMsg(<p>It seems like you have entered invalid IP or domain name.<br/>Please try again.</p>);
          setShowAlert(true);
        }
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
