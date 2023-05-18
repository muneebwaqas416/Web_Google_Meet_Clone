import { faAngleUp, faClosedCaptioning, faDesktop, faMicrophone, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './CallPageFooter.scss'
import { useNavigate } from 'react-router-dom';

export default function CallPageFooter(props) {
  const navigate = useNavigate();  
  return (
    <div className="footer-item">
      <div className="left-item">
        <div className="icon-block">
          Meeting Details
          <FontAwesomeIcon className='icon' icon={faAngleUp}></FontAwesomeIcon>
        </div>
      </div>
      <div className="center-item">
        <div className="icon-block">
        {/* onClick={()=>{props.setaudio_1((current)=>!current)}} */}
          <FontAwesomeIcon className='icon' onClick={()=>{
            props.setaudio_1(false)
          }} icon={faMicrophone
          }></FontAwesomeIcon>
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className='icon' onClick={()=>{navigate('/')}} icon={faPhone
          }></FontAwesomeIcon>
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className='icon' onClick={()=>{props.setvideoStream((current)=>!current)}} icon={faVideo
          }></FontAwesomeIcon>
        </div>

      </div>
      <div className="right-item">
        <div className="icon-block">
          <FontAwesomeIcon className='icon red' icon={faClosedCaptioning}></FontAwesomeIcon>
          <button className='title'>Turn on Captions</button>
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className='icon red' icon={faDesktop}></FontAwesomeIcon>
          <button className='title'>Present Screen</button>
        </div>
      </div>
    </div>
  )
}
