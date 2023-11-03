import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <h3>{error.data}</h3>
  )
}

export default Error;