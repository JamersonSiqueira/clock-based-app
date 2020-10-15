import React, { Component } from 'react';
import soundfile from './alarm_clock.mp3'
import Sound from 'react-sound'

export default class Alert extends Component {
render() {
 return (
   <Sound
   url={soundfile}
   playStatus={Sound.status.PLAYING}
   onLoading={this.handleSongLoading}
   onPlaying={this.handleSongPlaying}
   onFinishedPlaying={this.handleSongFinishedPlaying}
   />
  );
 }
}