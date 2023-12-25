import React, { useEffect, useState } from 'react';
import { COUNTRY_URL } from '../../../constants';
import "./timer.css";
import SelectMenu from '../../common/Dropdown';
import Clock from "../clock/Clock";
import Loading from '../../common/Loading';


const Timer = ({ action }) => {
  const [countries, setCountries] = useState([]);
  const [timezone, setTimezone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchCountry(url, cb) {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const countries = await res.json();
      cb(countries);
      setIsLoading(false);
    }
    catch(ex) {
      console.log(ex);
      setIsLoading(false);
    }
   
  }
  useEffect(() => {
    fetchCountry(COUNTRY_URL, setCountries);
  }, []);


  const getRegion = (zone) => {
    console.log('selected', zone);
    //call time api here
    setTimezone(zone)
    
  }
  return (
    <>
      <div className="timer-container">
        <SelectMenu label={'Country Dropdpwn'} action={getRegion} list={countries} />
        { timezone && <Clock location={timezone} /> }
      </div>
      { isLoading && <Loading /> }
      <div className='clear'></div>
    </>
  )
}

export default Timer;