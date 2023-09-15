// eslint-disable-next-line no-unused-vars
import React from 'react';
import meme from "../assets/meme.jpeg";
import '../css/Home.css';

export default function Home() {
  return (
    <div className="center-image">
      <img src={meme} alt="Meme sz" />
    </div>
  )
}
