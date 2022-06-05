import React, {useState,useContext, createContext}from 'react';
import Feed from './Components/Feed/Feed';
// import { IPost } from './Components/Post/Post';
import CreatePostForm  from './Components/CreatePostForm/CreatePostForm';
import LogInButton from './Components/Auth0/LogInButton' 
import LogoutButton from './Components/Auth0/LogOutButton';
import Header from './Components/Header/Header';
import makeApolloClient from './client';
import {Auth0Provider, useAuth0} from '@auth0/auth0-react'
import {  ApolloProvider,} from '@apollo/client';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';


// export interface iPostContext {
//   posts: IPost[];
//   setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
// }
// export const FeedContext = createContext<iPostContext>({
//   posts: [],
//   setPosts: () => {},
// });


export const FeedContext = createContext({
  posts: [],
  setPosts: (post) => {},
});

function App() {
  const client = makeApolloClient();
  const [posts,setPosts] = useState([
  ]);
  

  return (

    <div className="App">
      <Auth0Provider
      domain="lawl.eu.auth0.com"
      clientId="ZbzERso2dAnFUiZWfvDtMQdo0rTmRZHX"
      redirectUri={window.location.origin}
      >
  <ApolloProvider client={client}>
    <div className='row'>
      <Header>
        <Profile />
      </Header>
      </div>
      <div className='row'>
      <FeedContext.Provider value={{posts,setPosts}} >
        <Feed />
        <CreatePostForm />
      </FeedContext.Provider>
     </div>
      <Footer/>
      </ApolloProvider>
  </Auth0Provider>
    </div>
  );
}

export default App;
