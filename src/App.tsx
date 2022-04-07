import React, {useState,useContext, createContext}from 'react';
import Feed from './Components/Feed/Feed';
import { IPost } from './Components/Post/Post';
import { CreatePostForm } from './Components/CreatePostForm/CreatePostForm';
import { client } from "./client";
import { ApolloProvider } from '@apollo/client';
import {Auth0Provider} from '@auth0/auth0-react'
import LogInButton from './Components/Auth0/LogInButton' 
import LogoutButton from './Components/Auth0/LogOutButton';

export interface iPostContext {
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}

export const FeedContext = createContext<iPostContext>({
  posts: [],
  setPosts: () => {},
});
function App() {
  
  const [posts,setPosts] = useState([
    {body: "post1", authorName: "kolio", authorId:1, heading:"koliomas"},
    {body: "post2", authorName: "jono", authorId:2, heading:"jonomas"}
  ]);

  return (
    <Auth0Provider
      domain="lawl.eu.auth0.com"
      clientId="ZbzERso2dAnFUiZWfvDtMQdo0rTmRZHX"
      redirectUri={window.location.origin}
    >
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <LogInButton />
        <LogoutButton/>
      </header>
      <FeedContext.Provider value={{posts,setPosts}} >
        <Feed />
        <CreatePostForm />
      </FeedContext.Provider>
    </div>
    </ApolloProvider>
    </Auth0Provider>
  );
}

export default App;
