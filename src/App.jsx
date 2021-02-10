import Map from './components/map/map'
import  React,{useState,useEffect} from "react" ;
import Header from './components/header/Header'
import {ReactComponent as FireLoader} from './components/map/Fire.svg'
function App() {
  const [eventData,setEventData]=useState([]);
  const [loading,setLoading]= useState(false);
  useEffect(()=>{
    const fetchData = async ()=>{
      setLoading(true);
      const res= await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const {events}= await res.json();
      setEventData(events);
      setLoading(false);
      console.log(eventData)
    }
    fetchData()
  },[])
  return (
    <div className="App">
         {(loading)?<Header/>:null   }
{!loading ?<Map eventData={eventData}></Map>:<div className="loading"><h3>loading</h3><FireLoader className="vibrate-2 FireLoader"/></div>}
  </div>
  );
}

export default App;