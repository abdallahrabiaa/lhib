import GoogleMapReact from 'google-map-react'
import {useState,useEffect} from 'react'
import  LocationMarker from './locationMarker'
import LocationBox from './infoBox'
let center;
const Map =({eventData,center,zoom})=>{
    const [locationInfo ,setLocationInfo]=useState(null);
    const [userLocation,setUserLocation]=useState({
        lat:30.033333,
        lng:31.233334
    })
    center=userLocation;
    useEffect(()=>{
navigator.geolocation.getCurrentPosition(({latitude,longitude},erro)=>{
setUserLocation({lat:latitude,lng:longitude});
center=userLocation;
})
    },[])

    const markers =eventData.map(event=>{
        if(event.categories[0].id===8)
        {
            return     <LocationMarker 
            key={Math.random()*45} lat={event.geometries[0].coordinates[1]} 
            lng={event.geometries[0].coordinates[0]}
            onClick={()=>{setLocationInfo({id:event.id,title:event.title })}}
            />

        }
    })
    return (
        <div className="map">
<GoogleMapReact
bootstrapURLKeys={{key:process.env.REACT_APP_API_KEY}}
defaultCenter={center}
defaultZoom={zoom}
>
    {markers}
    </GoogleMapReact> 
    {locationInfo&&<LocationBox info ={locationInfo}/>}
        </div>
    )

 
}

Map.defaultProps={
    
    center:center,
    zoom:8
    

}


export default Map;