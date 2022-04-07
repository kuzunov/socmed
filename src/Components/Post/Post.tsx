import * as React from 'react';

export interface IPost {
    authorName: string,
    authorId: number,
    body: string,
    heading: string,
}

const Post: React.FunctionComponent<IPost> = ({heading,authorName,body}) => {
  return <div className="post">
    <h1>{heading}</h1>
    <h4>by {authorName}</h4>
    <div>{body}</div>
  </div>;
};

export default Post;
