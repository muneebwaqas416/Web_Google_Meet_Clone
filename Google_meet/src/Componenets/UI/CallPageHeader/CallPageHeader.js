import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faUserFriends,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";

import './CallPageHeader.scss'

export default function CallPageHeader() {
  return (
    <div className='Frame-Header'>
      <div className="headeritems icon-block">
            <FontAwesomeIcon className='icon' icon={faUserFriends}></FontAwesomeIcon>
      </div>
      <div className="headeritems icon-block">
            <FontAwesomeIcon className='icon' icon={faCommentAlt}></FontAwesomeIcon>
            <span className="alert-icon"></span>
      </div>
      <div className="headeritems date-block">
        1:00 PM
      </div>
      <div className="headeritems icon-block">
        {/* Display user Profile image in here */}
            <FontAwesomeIcon className='icon profile' icon={faUserCircle}></FontAwesomeIcon>
      </div>
    </div>
  )
}
