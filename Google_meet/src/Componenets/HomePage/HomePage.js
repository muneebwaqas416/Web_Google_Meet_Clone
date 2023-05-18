import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HomePage.scss';
import Header from '../UI/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard, faVideo } from '@fortawesome/free-solid-svg-icons'
import shortid from 'shortid'

export default function HomePage() {
   const navigate = useNavigate();
  const start_call = ()=>{
    //generaterandom id's and give it to our other page
    const uid = shortid.generate();
    //now we have to pass this this id to out url to go into video call
    // history.push('')
    // navigate('/home');
    navigate(`/${uid}#init`);
    // navigate(`/${uid}#init`);
  }
  return (
    <div className="home-page">
           <Header  />
           <div className="body">
             <div className="left-side">
               <div className="content">
                 <h2>Premium video meetings.Now free for everyone.</h2>
                 <p>
                   We re-engineered the service we built for secure business
                   meetings, Google Meet, to make it free and available for all.
                 </p>
                 <div className="action-btn">
                   <button className="btn green" onClick={start_call}>
                     <FontAwesomeIcon className="icon-block" icon={faVideo} />
                     New Meeting
                   </button>
                   <div className="input-block">
                     <div className="input-section">
                       <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                       <input placeholder="Enter a code or link" />
                     </div>
                     <button className="btn no-bg">Join</button>
                   </div>
                 </div>
               </div>
               <div className="help-text">
                 <a href="">Learn more</a> about Google Meet
               </div>
             </div>
             <div className="right-side">
               <div className="content">
                 <img src="https://www.gstatic.com/meet/meet_google_one_carousel_promo_icon_0f14bf8fc61484b019827c071ed8111d.svg" />
                 <h3>Unlock premium Meet features</h3>
                 <p>Enjoy longer group video calls, noise elimination and <br></br>more with a Google One Premium plan. </p>
               </div>
             </div>
           </div>
         </div>
       );
}
// import { useHistory } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
// import shortid from "shortid";
// import "./HomePage.scss";
// import Header from "../UI/Header/Header";

// const HomePage = () => {
//   const history = useHistory();

//   const startCall = () => {
//     const uid = shortid.generate();
//     history.push(`/${uid}#init`);
//   };

//   return (
//     <div className="home-page">
//       <Header />
//       <div className="body">
//         <div className="left-side">
//           <div className="content">
//             <h2>Premium video meetings. Now free for everyone.</h2>
//             <p>
//               We re-engineered the service we built for secure business
//               meetings, Google Meet, to make it free and available for all.
//             </p>
//             <div className="action-btn">
//               <button className="btn green" onClick={startCall}>
//                 <FontAwesomeIcon className="icon-block" icon={faVideo} />
//                 New Meeting
//               </button>
//               <div className="input-block">
//                 <div className="input-section">
//                   <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
//                   <input placeholder="Enter a code or link" />
//                 </div>
//                 <button className="btn no-bg">Join</button>
//               </div>
//             </div>
//           </div>
//           <div className="help-text">
//             <a href="">Learn more</a> about Google Meet
//           </div>
//         </div>
//         <div className="right-side">
//           <div className="content">
//             <img src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HomePage;