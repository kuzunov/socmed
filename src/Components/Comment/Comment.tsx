import React from 'react'
import { useMutation } from '@apollo/client';
import { DELETE_COMMENT } from '../../Queries';
import DeleteButton from '../DeleteButton/DeleteButton';
import { useAuth0 } from '@auth0/auth0-react';

export default function Comment({body, user, id,authorId}) {
  const _user = useAuth0().user;
  const [deleteComment, { data, loading, error }] = useMutation(DELETE_COMMENT);
  
  const handleDeleteComment = () => {
    deleteComment({variables:{idToDel:id}});
  }
  return (
    <div className = "comment-body">
        {body} by {user.username}
        {(_user?.sub==authorId)?   <DeleteButton loading={loading} error={error} data={data} fnToDel={handleDeleteComment}/> : <></>}
    </div>
  )
}
