import React from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '../../Queries';
import { useAuth0 } from '@auth0/auth0-react';



function AddCommentForm({postId}) {
    const {user, isAuthenticated} = useAuth0();
const [addComment, { data, loading, error }] = useMutation(CREATE_COMMENT);
const handleSubmit = (e) => {
  if (isAuthenticated) {
    const form = e.target;
    const tempComment = {
        authorId: user?.sub,
        body: form.body.value,
        postId: postId        
    }
    console.log(tempComment)
   if (loading) return 'Submitting...';
   if (error) return `Submission error! ${error.message}`;
   addComment({variables: {comment: tempComment}}) ;
   }

  }
  return (
    <div className="comment-form">
    <form onSubmit={handleSubmit}>
    <label>
      Comment:
      <input name="body" type="text" />
    </label>
    <input type="submit" value="Submit" />

  </form>
</div>
  )
}

export default AddCommentForm