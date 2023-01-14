
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock , faPlay  } from '@fortawesome/free-solid-svg-icons'
import './Podcasts.css'
// the frther be imported can be done after 
const Podcasts = (props) => {
    const {title , name, image , lenght} = props;
  
    return (
        <>

        <div className="podcast-container">
            <div className="each-podcasts">
                <img src={image} alt="heyye"/>
                <p>{name}</p>
                <div className="underline"></div>
                <h4>{title}</h4>
                <div className="description">
                    <div className='together'>
                    <FontAwesomeIcon icon={faPlay}  className="player" color="red"  />
                    <p>  Play This Episodes</p>
                    </div>
                   
                         
                   <p className='lenght'>{lenght}</p>
                    <div><FontAwesomeIcon icon={faClock} className="fa-clocks" /></div>
                    {/* <FontAwesomeIcon icon={['fa-thin', 'fa-clock']} /> */}
              
                </div>

            </div>
         
        </div>
        
        </>
    )
}
export default Podcasts