import './App.css';

import React, {useState} from 'react';
import Users from "./Users";
import Posts from "./Posts";

const App = () => {

    const [userId, setUserId] = useState(1)
    const getUserId = (id)=> {
               setUserId(id)
    }

  return (
      <div>
        <div className="wrap">
            <div className="users-posts">
                <div className="users"><Users getUserId={getUserId}/></div>
                <div className="posts"><Posts userId={userId}/></div>
            </div>
            <div className="comments">Comments</div>
        </div>

      </div>
  );
};

export default App;
