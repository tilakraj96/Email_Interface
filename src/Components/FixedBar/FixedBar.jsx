import React from 'react';
import './FixedBar.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';


export default function FixedBar() {
  return (
    <div className='FixedBar'>
        <div className="wrapper">
            <div className="left">
                <div className="itemContainer">
                <MenuIcon className='icon' />
                <input type="text" placeholder='Search for something ...'/>
                </div>                
            </div>
            <div className="right">
                <div className="itemContainer">
                    <EmailIcon className='iconRight'/>
                    <NotificationsIcon className='iconRight'/>
                    <LogoutIcon className='iconRight' />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    </div>
  )
}
