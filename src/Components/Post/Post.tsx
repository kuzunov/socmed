import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { DELETE_POST } from '../../Queries';
import { useMutation } from '@apollo/client';
import PostComments from '../PostComments/PostComments';
import AddCommentForm from '../AddCommentForm/AddCommentForm';
import DeleteButton from '../DeleteButton/DeleteButton';
// export interface IPost {
//     authorName: string | undefined,
//     authorId:  string | undefined,
//     body:  string | undefined,
//     heading: string | undefined,
// }

const Post
// : React.FunctionComponent<IPost> 
= ({heading,body,authorId,id}) => {
  const {user} = useAuth0();
  const [deletePost, { data, loading, error }] = useMutation(DELETE_POST);

const handleDeletePost = () => { 
 deletePost({variables:{idToDel:id}});
}

  return <div className="post">
    <h4>{heading}</h4><div>by {authorId}</div>
    <div>{body}</div>
    {(user?.sub==authorId)?   <DeleteButton loading={loading} error={error} data={data} fnToDel={handleDeletePost}/> : <></>}
    <PostComments postId={id}/>
    <AddCommentForm postId={id}/>
  </div>;
};

export default Post;
