import React from 'react'
import './header.css'
import useSound from "use-sound";
import retroSound from "../Music/background-music.mp3";
import { AiTwotoneSound } from "react-icons/ai";
import { useState } from 'react';


function Header() {
  const [play, { stop }] = useSound(retroSound, {
    volume: 0.5,
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };
  
  return (
    <>
      <div id ='align-sound'>
        <AiTwotoneSound id='retro-sound' onClick={toggleSound}/>
      </div>
      <div id='container-header'>
        <div id='stars-background'></div>
        <h1 className='header-h1-hello'>HEY I'M TOM</h1>
        <h1 className='header-h1-fullstack'>FULL-STACK DEVELOPER</h1>
      </div>
      <img id='tom-img' alt='Tom' src='../../media/tom.png'></img>
      <div id="header"></div>
    </>
  );
}

export default Header;