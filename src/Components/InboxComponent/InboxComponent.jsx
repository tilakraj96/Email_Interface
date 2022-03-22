import React, { useEffect, useState } from 'react';
import './InboxComponent.scss'
import { Users } from '../../data';
import { Button } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MailData from '../MailData/MailData';


export default function InboxComponent() {

    
const [selected,setSelected] = useState('');
const [data,setData]=useState([]);


useEffect(()=>{
    localStorage.setItem('user', JSON.stringify(Users));
    const user = localStorage.getItem('user');
    console.log(user);
},[])

  return (
    <div className='Inbox'>
        <div className='InboxCount'>
        <div className="left">
        <div className="header">Inbox</div>
        <div className='buttonGroup'>
        <Button className='b' variant="outlined" style={{ color: "#949492"}} startIcon={<AutorenewIcon style={{ color: "#949492"}}/>}>Refresh</Button>
        <Button className='b' variant="outlined" style={{ color: "#949492"}} startIcon={<RemoveRedEyeIcon style={{ color: "#949492"}}/>}></Button>
        <Button  className='b' variant="outlined" style={{ color: "#949492"}} startIcon={<PriorityHighIcon style={{ color: "#949492"}}/>}></Button>
        <Button className='b'  variant="outlined" style={{ color: "#949492"}} startIcon={<DeleteIcon style={{ color: "#949492"}}/>}></Button>
        </div>
        </div>
        <div className="right">
            <div className="Search">
            <input type="text" placeholder='Search Email'/>
            <Button className='searchButton' variant="contained">Search</Button>
            </div>
            <div className="arrow">
            <Button  color='grey' variant="contained" style={{ color: "#949492"}} startIcon={<ChevronLeftIcon style={{ color: "#949492"}}/>}></Button>
            <Button  color='grey' variant="contained" style={{ color: "#949492"}} startIcon={<ChevronRightIcon style={{ color: "#949492"}}/>}></Button>
            </div>
        </div>
        </div>
        <div className="Emails">
            <MailData users={Users}/>
        </div>
    </div>
  )
}
