import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Profile() {
   const { user } = useContext(UserContext);

   if (!user) {
      return <div>Please log in to view your profile.</div>;
   }
   return (
      <div>
         <h2>Profile</h2>
         <p><strong>Username:</strong> {user.username}</p>
         <p><strong>Password:</strong> {user.password}</p>
      </div>
   );
}

export default Profile
