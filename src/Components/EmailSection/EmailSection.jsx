import React from 'react';
import './EmailSection.scss';
import { Button } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarsIcon from '@mui/icons-material/Stars';
import FeedIcon from '@mui/icons-material/Feed';
import DeleteIcon from '@mui/icons-material/Delete';
import CircleIcon from '@mui/icons-material/Circle';
import LabelIcon from '@mui/icons-material/Label';
import InboxComponent from '../InboxComponent/InboxComponent';

export default function EmailSection() {

    const labelTypes=[{label:'Family'},{label:'Work'},{label:'Home'},{label:'Childern'},{label:'Holidays'},{label:'Music'},{label:'Photography'},{label:'Film'}];

  return (
    <div className='EmailSection'>
        <div className="left">
            <button className='Compose'>Compose Mail</button>
            <div className='heading'>Folders</div>
            <ul>
                <li>
                    <InboxIcon/>
                    <span>Inbox</span>
                </li>
                <li>
                    <EmailOutlinedIcon/>
                    <span>Send Mail</span>
                </li>
                <li>
                    <StarsIcon/>
                    <span>Important</span>
                </li>
                <li>
                    <FeedIcon/>
                    <span>Drafts</span>
                </li>
                <li>
                    <DeleteIcon/>
                    <span>Trash</span>
                </li>
            </ul>
            <div className='heading'>Categories</div>
            <ul>
                <li>
                    <CircleIcon style={{ color: "#38c75e" , fontSize:'medium'}}/>
                    <span>Work</span>
                </li>
                <li>
                    <CircleIcon style={{ color: "#c94242" , fontSize:'medium'}}/>
                    <span>Document</span>
                </li>
                <li>
                    <CircleIcon style={{ color: "#2d87ed" , fontSize:'medium'}}/>
                    <span>Social</span>
                </li>
                <li>
                    <CircleIcon style={{ color: "#35e9f0" , fontSize:'medium'}}/>
                    <span>Advertising</span>
                </li>
                <li>
                    <CircleIcon style={{ color: "#dec349" , fontSize:'medium'}} />
                    <span>Client</span>
                </li>
            </ul>
            <div className="heading">
                Labels
                <div className='buttonGroup'>
                    {labelTypes.map((data)=>(
                        <Button variant="outlined" style={{ color: "#949492"}} startIcon={<LabelIcon style={{ color: "#949492"}}/>}>{data.label}</Button>
                    ))}  
                </div>
            </div>
        </div>
        <div className="right">
            <InboxComponent/>
        </div>
    </div>
  )
}
