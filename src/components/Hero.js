import "./Hero.css"
import Logo from '../assets/gugutimage.jpg'
import Youtube from '../assets/youtube.png'
import Anchor from '../assets/anchor.png'
const Hero = () => {
    return (
        <div className="super-hero">
            <div className='container-for-hero'>
          <div className='hero'>
             <h1>Let’s make what </h1> <br/>
             <h1 className="nextword">you heard are preciously</h1>
             <br />

             <h1 className="nextword1"><span className='headerbutcolor'>worth and fun</span></h1>
             <p>Gugut is an entertainment/educational podcast focused on discussing different perspectives on philosophy and the day-to-day lives of everyday people</p>
            <div className='btns'>
            <a href='#'>Start Listening </a>
            </div>

            <div className="listens">
                <div className="anchor">
                    <img src={Youtube} alt="Youtube" />

                </div>
                <div className="youtube">
                <img src={Anchor} alt="Anchor" />
                </div>


            </div>
          </div>
          <div className="images">
            <img src={Logo}  alt='Gugut'/>
          </div>

       </div>



        </div>
    )
}
export default Hero;