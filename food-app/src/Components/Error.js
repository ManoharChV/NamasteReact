import React from 'react'
import { useRouteError } from 'react-router-dom'
export const Error = () => {
  //provides info of the error
    const error=useRouteError();
  return (
    <div>
    <h1>Error</h1>
    <h1>{error.status} : {error.statusText}</h1>
    </div>

)
}