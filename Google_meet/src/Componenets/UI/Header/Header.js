import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import './Header.scss';
import React, { useState } from "react";
import { useNavigate,useLocation } from 'react-router-dom';
import { useEffect } from "react";
import queryString from 'query-string';
import axios from "axios";



const Header =()=>{
    const [image,setimage] = useState('')
    const [email,setemail] = useState('')
    const [bool,setbool] = useState(false)
    
     const navigate = useNavigate();
    
    const func = ()=>{
         window.location.href = 'http://localhost:5000/'
        const parsedQuery = queryString.parse(window.location.search);
        //const name = parsedQuery.name;
        const email_1 = parsedQuery.email;
        const pic = parsedQuery.pic;
        console.log("email in the upper funs"+email_1)
        console.log(pic)
        setemail(email_1)
        setimage(pic)
        // setbool(true);
        // axios.post('http://localhost:5000/sucess').then((response)=>{
        //         console.log(response.body)
        // }).catch((error)=>{

        // })
    }
    
    useEffect = ()=>{
            const parsedQuery = queryString.parse(window.location.search);
        //const name = parsedQuery.name;
        
        let email_1 = parsedQuery.email;
        if(email_1!==undefined && email_1!==email){
            setemail(email_1)
            //props.setdata(email_1)
        }
        const pic = parsedQuery.pic;
        if(pic!==undefined && pic!==image){
            setimage(pic)
        }
        
    }

    return(
        <div className="header">
            <div className="logo">
                <img src="https://img.icons8.com/color/2x/google-meet.png"></img>
                <span className="help-text">
                   Google Meet
                </span>
            </div>
            <div className="action-btn">
                <FontAwesomeIcon className="icon-block" icon={faQuestionCircle}></FontAwesomeIcon>
                <FontAwesomeIcon className="icon-block" icon={faExclamationCircle}></FontAwesomeIcon>
                {/* here I have to print the logged in user picture and email first pass props to homepage and then pass it to Header */}
                {/* <a href="/google" class="btn btn-primary btn-sm" role="button" onClick={func}>Google+</a> */}
                <button class="btn btn-primary btn-sm" onClick={func}><img src={image} width={100} height={30}></img></button>
            </div>
        </div>
    )
}

export default Header;