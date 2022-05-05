import React from 'react'

export default function Comment({body, user}) {
  return (
    <div>
        {body} by {user.username}
    </div>
  )
}
