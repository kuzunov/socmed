import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Auth0/LogOutButton";
import LoginButton from "../Auth0/LogInButton";
import "./Profile.css";

const Profile = () => {

  const { user, isAuthenticated, isLoading, getAccessTokenSilently, getIdTokenClaims} = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
 getIdTokenClaims().then((result)=>{localStorage.setItem("auth0:id_token",result?.__raw || "");});
  return (
    
      <div className="w-100">
        <img src={user?.picture} alt={user?.name} className = "avatar img-responsive rounded w-25 p-3"/>
        
        <div className="buttons">
        <div className="username">{user?.name}</div>
        <div className="email">{user?.email}</div>
        {(!isAuthenticated)?<LoginButton/>:<LogoutButton/>}
        </div>
        
      </div>
  );
};

export default Profile;