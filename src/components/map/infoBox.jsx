import {ReactComponent as Fire} from './Fire.svg' 
const LocationBox =({info})=>{
    return (
        <div className="location-info">
 <h2> fire info <Fire id="fireSmall" /></h2>
 <ul>
     <li>id:<strong>{info.id} </strong></li>
     <li>id:<strong>{info.title} </strong></li>
 </ul>
        </div>
    )
}
export default LocationBox;