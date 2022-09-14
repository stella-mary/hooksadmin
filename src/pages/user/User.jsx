import { CalendarViewDayTwoTone, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from "react-router-dom";
import './User.css'

export default function User() {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to={`/newUser`} >
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className="userShow">
          <div className='userShowTop'>
            <img src="https://images.pexels.com/photos/1526844/pexels-photo-1526844.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='userShowImg' />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Udhaya Kumar</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>Udhaya86</span>
            </div>
            <div className='userShowInfo'>
              <CalendarViewDayTwoTone Ton className='userShowIcon' />
              <span className='userShowInfoTitle'>25.07.1986</span>
            </div>
            <span className='userShowTitle'>Contact Details</span>
            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon' />
              <span className='userShowInfoTitle'>+1 123 456 67</span>
            </div>
            <div className='userShowInfo'>
              <MailOutline className='userShowIcon' />
              <span className='userShowInfoTitle'>Udhaya86@gmail.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>Chennai</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
            <span className='userUpdateTitle'>Edit</span>
            <form className='userUpdateForm'>
              <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder='Udhaya86' className='userUpdateInput'></input>
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder='Udhaya' className='userUpdateInput'></input>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder='Udhaya86@gmail' className='userUpdateInput'></input>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder='+1 123 456 67' className='userUpdateInput'></input>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder='Chennai' className='userUpdateInput'></input>
              </div>
              </div>
              <div className='userUpdateRight'>
                <div className='userUpdateUpload'>
                  <img className="userUpdateImg" src="https://images.pexels.com/photos/1526844/pexels-photo-1526844.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                  <label htmlFor='file'>
                    <Publish className='userUpdateIcon'/>
                    </label>
                  <input type="file" id="file" style={{ display: 'none'}} />
                </div>
              <button className='userUpdateButton'>Update</button>
              </div>
            </form>
            </div>
            </div>
      </div>
  );
}

