import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {PlayCircle} from "react-bootstrap-icons";
//import ProgressBar from './ProgressBar';
// import song from './songs';
import song from "./music/Baarishein Hon Magar(KoshalWorld.Com).mp3"
//import './player.css';

const useAudio = (url, limit) => {
    const [audio] = useState(new Audio(url));
    var audio2 = audio;
    var [playing, setPlaying] = useState(false);
  
    var togglePlayback = () => setPlaying(!playing);

    useEffect(() => {
      if(true){
        audio2.play();
        setTimeout(function(){
          audio2.pause();
          audio2.currentTime = 0;
      }, limit);
    }
    }, [playing]);
  
    useEffect(() => {
      audio2.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio2.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);

    
    return [playing, togglePlayback];
  };
  
  const Player = ({url, timevalue}) => {
    const tout = [2000, 4000, 6000, 8000, 10000];
    if (timevalue >= 5) { 
      timevalue = 5
    }
    const [playing, togglePlayback] = useAudio(song, tout[timevalue]);
    return (
      <section>
        {/* <div className='d-grid mt-2'>
          <ProgressBar id='progress' />
        </div> */}
        <div className='d-grid mt-2'>
        <Button className="btn btn-primary btn-lg" onClick={togglePlayback} icon labelPosition="left">
          <PlayCircle name={'play'} />
            {playing ? '  Play' : '  Play'}
        </Button>
        </div>
      </section>
    );
};

export default Player