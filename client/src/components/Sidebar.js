import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
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
  )
}

export default Sidebar
