import React from 'react'

function DeleteButton({loading,error,data,fnToDel}) {
  return (<>
    {
        loading?'Loading':
        error?`Error ${error.message}`:
        data? 'Deleted':
        <button onClick ={fnToDel}>DELETE XX</button>
    }</>
  )
}

export default DeleteButton