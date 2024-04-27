import React from 'react'
import { useRouteError } from 'react-router-dom'
export const Error = () => {
    const error=useRouteError();
  return (
    <h1>{error.status} : {error.statusText}</h1>

)
}