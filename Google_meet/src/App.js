import React , {useEffect , useState} from 'react'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import CallPage from './Componenets/CallPage/CallPage';
import HomePage from './Componenets/HomePage/HomePage';
import NoMatch from './Componenets/NoMatch/NoMatch';
import axios from 'axios';

export default function App() {
  const [data,setdata] = useState();
  const getdatafromchild = (data_1)=>{
        setdata(data_1)
        console.log(data_1)
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/:id' element={<CallPage/>} />
          <Route path='/' element={<HomePage   />} />
          <Route path='/google' element={<HomePage   />} />  
          <Route path='*' element={<NoMatch />} />  
          
        </Routes>
      </Router>
     </div>
  )
}
