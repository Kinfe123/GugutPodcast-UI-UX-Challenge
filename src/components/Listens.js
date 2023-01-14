import './Listens.css'
import Spotify from '../assets/spotify.png'
import iTune from '../assets/itune.png'
import GooglePodcast from '../assets/google.png'
import Teraki from '../assets/Teraki.png'
const Listens = () => {
    return (
        <>
        <div className="platform-listens">
            <div className="platforms">

                <img src={Spotify}/>
                <img src={GooglePodcast}/>
                <img src={iTune}/>
                <img src={Teraki}/>
                

              
            </div>
        </div>
        
        </>
    )
}
export default Listens