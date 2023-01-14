import './Footer.css'
import GugutLogo from '../assets/gugutimage.jpg'
import { } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='real-footer'>
                <div>
                    <img src={GugutLogo} />
                    <h5 className='gugut-text'>GUGUT PODCAST.</h5>

                </div>
                <div className='footer-stuff'>
                    <div className='real-one'>
                        <h3>Podcasts</h3>
                        <p>pod</p>
                        <p>pod</p>
                        <p>pod</p>
                        <p>pod</p>
                        <p>pod</p>

                    </div>
                    <div className='real-one'>
                        <h3>Episodes</h3>
                        <p>pod</p>
                        <p>pod</p>
                        <p>pod</p>
                        <p>pod</p>
                        <p>pod</p>

                    </div>
                    <div className='real-one'>
                        <h3>Contacts</h3>
                        <p>pod</p>
                        <p>pod</p>
                        <p>pod</p>
                        <p>pod</p>
                        <p>pod</p>

                    </div>
                    <div className='real-one'>
                        <h3>Contacts</h3>
                        <p>pod</p>
                        <p>pod</p>
                        <p>pod</p>
                        <p>pod</p>
                        <p>pod</p>

                    </div>
                </div>

            </div>
            <div className='social-links'>
            {/* <svg className="link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg> */}
           

            </div>
        </div>
    )
}
export default Footer