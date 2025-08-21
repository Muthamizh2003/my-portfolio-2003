import React, { useState } from 'react';
import './Coding.css';

const Coding = () => {
  const [activeApp, setActiveApp] = useState(null);

  const codingProfiles = [
    {
      id: "leetcode",
      name: "LeetCode",
      icon: "fas fa-code",
      link: "https://leetcode.com/u/Batmancoding/",
      color: "#FFA116",
      description: "Solved 500+ problems",
      stats: "Contest Rating: 1800",
      achievements: ["Top 10% Contestant"]
    },
    {
      id: "geeksforgeeks",
      name: "GeeksforGeeks",
      icon: "fas fa-laptop-code",
      link: "https://www.geeksforgeeks.org/user/muthamizb0dk/",
      color: "#2F8D46",
      description: "250+ coding problems solved",
      stats: "Coding Score: 1200+",
      achievements: ["Problem of the Day Streak: 160 days","GFG backpack"]
    },
    {
      id: "hackerrank",
      name: "HackerRank",
      icon: "fab fa-hackerrank",
      link: "https://www.hackerrank.com/profile/muthamizhcoding",
      color: "#00EA64",
      description: "5-star gold badge in Problem Solving",
      stats: "Skills: Python, Java, SQL",
      achievements: ["30+ Days of Code Completed"]
    },
    {
      id: "code360",
      name: "Code 360",
      icon: "fas fa-cogs",
      link: "https://www.naukri.com/code360/profile/Muthamizh",
      color: "#7D3C98",
      description: "Mastered advanced algorithms",
      stats: "Level: Expert",
      achievements: ["Algorithm Specialist", "Data Structures Master"]
    }
  ];

  const openApp = (appId) => setActiveApp(appId);
  const closeApp = () => setActiveApp(null);

  const activeProfile = codingProfiles.find(p => p.id === activeApp);

  return (
    <div className="coding-section">
      <h2>Coding Profiles</h2>
      <p className="section-subtitle">My competitive programming journey</p>
      
      <div className="ipad-frame">
        <div className="ipad-screen">
          {/* Status Bar */}
          <div className="status-bar">
            <div className="time">12:30</div>
            <div className="status-icons">
              <i className="fas fa-wifi"></i>
              <i className="fas fa-battery-three-quarters"></i>
            </div>
          </div>

          {/* Home Screen */}
          {!activeApp && (
            <>
              <div className="home-screen">
                <div className="app-grid">
                  {codingProfiles.map(profile => (
                    <div 
                      key={profile.id} 
                      className="app-icon"
                      onClick={() => openApp(profile.id)}
                    >
                      <div className="app-icon-circle" style={{backgroundColor: profile.color}}>
                        <i className={profile.icon}></i>
                      </div>
                      <span>{profile.name}</span>
                    </div>
                  ))}
                </div>

                <div className="dock">
                  {codingProfiles.map(profile => (
                    <div 
                      key={profile.id}
                      className="dock-icon"
                      onClick={() => openApp(profile.id)}
                    >
                      <div className="app-icon-circle" style={{backgroundColor: profile.color}}>
                        <i className={profile.icon}></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Active App Window */}
          {activeProfile && (
            <div className="app-window active">
              <div className="app-header">
                <div className="app-header-left">
                  <div className="app-icon-circle small" style={{backgroundColor: activeProfile.color}}>
                    <i className={activeProfile.icon}></i>
                  </div>
                  <span>{activeProfile.name}</span>
                </div>
                <button className="close-btn" onClick={closeApp}>
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="app-content">
                <div className="app-details">
                  <h3>{activeProfile.name} Profile</h3>
                  <p>{activeProfile.description}</p>
                  <div className="stats">
                    <p><strong>{activeProfile.stats}</strong></p>
                  </div>
                  <div className="achievements">
                    <h4>Achievements</h4>
                    <ul>
                      {activeProfile.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                    </ul>
                  </div>
                  <a 
                    href={activeProfile.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="profile-link-btn"
                  >
                    Visit My Profile
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coding;
