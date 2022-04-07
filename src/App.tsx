import React, {useState,useContext, createContext}from 'react';
import Feed from './Components/Feed/Feed';
import { IPost } from './Components/Post/Post';
import { CreatePostForm } from './Components/CreatePostForm/CreatePostForm';
import { client } from "./client";
import { ApolloProvider } from '@apollo/client';

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
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
      </header>
      <FeedContext.Provider value={{posts,setPosts}} >
        <Feed />
        <CreatePostForm />
      </FeedContext.Provider>

    </div>
    </ApolloProvider>
  );
}

export default App;
