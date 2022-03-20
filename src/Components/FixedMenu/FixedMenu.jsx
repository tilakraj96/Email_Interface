import React from 'react'
import './FixedMenu.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PieChartIcon from '@mui/icons-material/PieChart';
import ScienceIcon from '@mui/icons-material/Science';
import RateReviewIcon from '@mui/icons-material/RateReview';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PublicIcon from '@mui/icons-material/Public';
import LaptopIcon from '@mui/icons-material/Laptop';

export default function FixedMenu() {
  return (
    <div className='FixedMenu'>
        {/* <div className="MenuItems"> */}
            <ul>
                <li>
                    IN+
                </li>
                <li>
                    <DashboardIcon/>
                </li>
                <li>
                    <DiamondOutlinedIcon/>
                </li>
                <li>
                    <InsertChartOutlinedIcon/>
                </li>
                <li>
                    <EmailIcon/>
                </li>
                <li>
                    <PieChartIcon/>
                </li>
                <li>
                    <ScienceIcon/>
                </li>
                <li>
                    <RateReviewIcon/>
                </li>
                <li>
                    <DesktopMacIcon/>
                </li>
                <li>
                    <ContentCopyIcon/>
                </li>
                <li>
                    <PublicIcon/>
                </li>
                <li>
                    <ScienceIcon/>
                </li>
                <li>
                    <LaptopIcon/>
                </li> 
            </ul>
        {/* </div> */}
    </div>
  )
}
