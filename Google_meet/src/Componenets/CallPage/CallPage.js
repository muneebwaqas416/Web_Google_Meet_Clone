import ReactDOM from 'react-dom';
import React, {useReducer, useState } from 'react'
import { useEffect } from "react";
import './CallPage.scss'
import CallPageHeader from '../UI/CallPageHeader/CallPageHeader.js'
import CallPageFooter from '../UI/CallPageFooter/CallPageFooter.js'
import Meeting from '../UI/Meeting/Meeting.js'
import Messenger from '../UI/Messenger/Messenger.js'
import { useNavigate } from 'react-router-dom';
import { useParams, useSearchParams } from 'react-router-dom'
import io from 'socket.io-client'
import { Peer } from "peerjs";


let initialState = [];

const CallPage = () => {
  const [audioStream, setAudioStream] = useState(null);
  const [videoStream, setvideoStream] = useState(true);
  const [audio_1,setaudio_1] = useState(true);
  
  const history = useNavigate();
  let alert_timeout = null;
  let main_video = document.querySelector('video')

  let id = useParams();
  const isAdmin = window.location.hash == "#init" ? true : false;
  const url = `${window.location.origin}${window.location.pathname}`

  const [meetInfoPopup,setMeetInfoPopup] = useState(false);
  const socket = io('http://localhost:4000/');
  const peer = new Peer(undefined,{
    port : '3001'
  })

  navigator.mediaDevices.getUserMedia({
    video : videoStream,
    audio : audio_1,
  }).then(stream=>{
    //let video_1 = document.createElement('video')
    
  addVideoStream(main_video,stream);
  socket.on('user-connected',userId=>{
    console.log("User connected " + userId)
    connectToNewUser(userId,stream)
})
  
  peer.on('call',call=>{
    call.answer(stream)
    let user_video = document.createElement('video')
    call.on('stream',userVideoStream=>{
      addVideoStream(user_video,userVideoStream)
    })
  })
    
  })
  peer.on('open',id=>{
    socket.emit('join-room',window.location.pathname,id)  
  })
  
  //socket.emit('join-room',window.location.pathname,15)
function connectToNewUser(userId,stream){
      const call = peer.call(userId,stream)
      let video = document.createElement('video');
      call.on("stream",userVideoStream=>{
          addVideoStream(video,userVideoStream)
      })
      call.on('close',()=>{
        video.remove();
      })
   }

  useEffect(()=>{
    if(isAdmin)
    {
      setMeetInfoPopup(true)
    }
  },[])

  function addVideoStream(video_1,stream){
    if(video_1)
    {
      video_1.srcObject = stream;
      video_1.addEventListener('loadedmetadata',()=>{
          video_1.play();
      })
      //main_video.append(video_1)
    }else{
      console.log("video_1 does not exist")
    }
    
  }
  return (
    <div className="callpage-container">
      <div className="video">
        <video className="video-container" src="" controls></video>
        {/* {audioStream && <audio srcObject={audioStream} controls />} */}
      </div>
      <CallPageHeader></CallPageHeader>
       <CallPageFooter setaudio_1={setaudio_1} setvideoStream={setvideoStream}></CallPageFooter>
       {
         isAdmin && meetInfoPopup && <Meeting setpopup_1={setMeetInfoPopup} link={url}></Meeting>
       }
       <Messenger></Messenger>
    </div>
  );
};
export default CallPage;

