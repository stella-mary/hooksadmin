import './NewUser.css'

export default function NewUser() {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label >Usernname</label>
          <input type="text" placeholder='Udhaya' />
        </div>
        <div className='newUserItem'>
          <label >Fullname</label>
          <input type="text" placeholder='Udhaya kumar' />
        </div>
        <div className='newUserItem'>
          <label >Email</label>
          <input type="email" placeholder='Udhaya@gmail.com' />
        </div>
        <div className='newUserItem'>
          <label >Password</label>
          <input type="password" placeholder='password' />
        </div>
        <div className='newUserItem'>
          <label >Phone</label>
          <input type="text" placeholder='+1 123 456 78' />
        </div>
        <div className='newUserItem'>
          <label >Address</label>
          <input type="text" placeholder='Chennai' />
        </div>
        <div className='newUserItem'>
          <label >Gender</label>
          <div className='newUserGender'>
          <input type="radio" name='gender' id="male" value="male" />
          <label for='male'>Male</label>
          <input type="radio" name='gender' id="female" value="male" />
          <label for='female'>Female</label>
          <input type="radio" name='gender' id="other" value="other" />
          <label for='other'>Other</label> 
        </div>
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select className='newUserSelect' name='active' id="active">
            <option value="yes">Yes</option>
            <option value="no">no</option>
          </select>
         </div>
         <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}
