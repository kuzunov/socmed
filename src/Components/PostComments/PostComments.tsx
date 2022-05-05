import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_COMMENTS } from '../../Queries'; 
import Comment from '../Comment/Comment';



function PostComments({postId}) {
const { data, loading, error } = useQuery(GET_COMMENTS, 
    {variables: {_eq: postId}}
    );


  return (
    <div className = "post-comments">
        //Comments//
        {  
        loading?( <>Loading...</> ) :
        error? (<>Error! ${error.message}</>) :

        (<>{
          data.smschema_comments.map((comment)=> {
            return <Comment {...comment}/>
          })
        }</>)
        }</div>
  )
}

export default PostComments