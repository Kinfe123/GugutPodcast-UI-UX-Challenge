import Play from '../assets/Play.png'
import Elshadai from '../assets/elshadai.png'
import './Feature.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
const Feature = () => {
    return (
        <div className="feature-container">
            <div className="image-feature">
                {/* <img src={Elshadai}/> */}

                <div className='features-were'>
                    <h3 className='feature-text'>FEATURED</h3>
                    <h3 className='fivekillo'>ከ 5 ኪሎ ወደ Amazon</h3>
                    <div className='short-bio'>
                        <p>Elshadai is a Software engineering student at AAIT. We have discussed... </p>
                    </div>
                    <p className='readmore'>read more</p>


                    <div className='clocks'>

             
                <FontAwesomeIcon icon={faClock} className="clocks-clock" />
                <p className='min'>60min</p>   
                   
                    </div>
                </div>
                
            </div>
        


        
        
        </div>
    )
}
export default Feature