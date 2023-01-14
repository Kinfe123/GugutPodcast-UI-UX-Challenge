
import './App.css';
import Hero from './components/Hero';
import Listens from './components/Listens';
import Navbar from './components/Navbar';
import Podcasts from './components/Podcasts';
import Audio from './components/Audio';
import constants from './constants';
import constantForAudio from './constantForAudio';
import './components/Podcasts.css'
import Feature from './components/Feature';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Listens />
      <div className='podcast-container'>
      {constants.map((podcasts)=>{
        return (
          <Podcasts title={podcasts.title} name={podcasts.name} lenght={podcasts.length} image={podcasts.image} />
        )
      })}


      
      </div>

      <Feature />
      <div>
      <div className="audio-header">
                <h3>Audios</h3>
                <p>View all.</p>
            </div>
      </div>
     <div>
      {constantForAudio.map((audio)=> {
        return (
           <Audio title={audio.title} text={audio.text} />
      )})}
      </div>

     <Footer />

     

     
    </div>
  );
}

export default App;
