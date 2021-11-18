import React, {useState} from 'react'
import './Navbar.css';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div>
    <input type="checkbox" id="check" />
    <header>
      <div className="left-area">
        <h3><i class="fas fa-dumbbell"></i>Lifter</h3>
        <label for="check"><i id="sidebar_btn" class="fas fa-bars"></i></label>
      </div>
      <div className="right-area">
        <a href="#" className={`btn ${!loggedIn ? 'login_btn' : 'logout_btn'}`}>
          {!loggedIn ? 'Login' : 'Logout'}
        </a>
      </div>
    </header>
    <div className="sidebar">
      <div className="profile">
        <img className="profile-image" src="http://placehold.jp/100x100.png" alt="" />
        <h4 className="profile-name">Profile Name</h4>
      </div>
      <a href="/"><i class="fas fa-desktop"></i><span>Dashboard</span></a>
      <a href="/"><i class="far fa-comment-alt"></i><span>Messages</span></a>
      <a href="/"><i class="fas fa-puzzle-piece"></i><span>Connect</span></a>
      <a href="/"><i class="fas fa-network-wired"></i><span>Network</span></a>
      <a href="/"><i class="fas fa-sliders-h"></i><span>Settings</span></a>
    </div>
    </div>
  )
}

export default Navbar
