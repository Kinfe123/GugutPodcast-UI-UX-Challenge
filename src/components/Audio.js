import './Audio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Audio = (props) => {
    const {title , text} = props
    return (
        <div className="audio-container">
            
                <div className="real-audios">
                    <FontAwesomeIcon icon={faPlay} className="audio-player" />
                    <div className='texts'>
                        <h4>{title}</h4>
                        <p>{text}</p>

                    </div>

                
                </div>
                <div className="underline-s"></div>

            
           

        </div>
    )
}
export default Audio