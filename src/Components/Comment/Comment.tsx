import React from 'react'

export default function Comment({body, user}) {
  return (
    <div className = "comment-body">
        {body} by {user.username}
    </div>
  )
}
