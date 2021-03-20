import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

export default function Audio({source}) {
  return (
  <ReactAudioPlayer
    src={source}
    controls
    className="w-100"
  />
  )
}
