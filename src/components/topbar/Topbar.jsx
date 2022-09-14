import React from 'react'
import './Topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>stella admin</span>
        </div>
        <div className='topRight'>
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconsContainer">
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconsContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
