import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faTimes , faUser , faCopy, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import './Meeting.scss'
import { Button, Overlay, Tooltip } from 'react-bootstrap';
import { useState } from 'react'
export default function Meeting(props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const func = (e)=>{
      console.log(e.target.value);
  }
  return (
    <div className="meeting-info-block">
      <div className="meeting-header">
        <h3>Your meeting's ready</h3>
        <FontAwesomeIcon className='icon' icon={faTimes} onClick={()=>{
          props.setpopup_1(false)
        }}></FontAwesomeIcon>
        
      </div>
      <button className='addpeople'>
      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        <span className='span'>Add others</span>
      </button>
      
      <p className='info-Text'>Or share this meeting link with others that you want in the meeting</p>
      <div className="meet-link">
        <span>{props.link}</span>
        <Overlay show={showTooltip} target={() => document.querySelector('#my-button')}>
            <Tooltip id="my-tooltip">Text Copied to Clipboard</Tooltip>
        </Overlay>
        <FontAwesomeIcon className='icon' icon={faCopy} onClick={()=>{
          navigator.clipboard.writeText(props.link);
          
          console.log(props.link)
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
        }}></FontAwesomeIcon>
      </div>
        <div className="permission-text">
          <p className="small-text">
          <FontAwesomeIcon className='icon' icon={faShieldAlt}></FontAwesomeIcon>
            People who use this meeting link must get your permission before they can join.</p>
        </div>
        {/* you should add the logged in user's email here */}
        <p className="small-text">
        Joined as muneebwaqas416@gmail.com
        </p>
    </div>
  )
}
