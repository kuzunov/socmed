import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Auth0/LogOutButton";
import LoginButton from "../Auth0/LogInButton";

const Profile = () => {

  const { user, isAuthenticated, isLoading, getAccessTokenSilently, getIdTokenClaims} = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
 getIdTokenClaims().then((result)=>{localStorage.setItem("auth0:id_token",result?.__raw || "");});
  return (
    
      <div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        {(!isAuthenticated)?<LoginButton/>:<LogoutButton/>}
      </div>
  );
};

export default Profile;