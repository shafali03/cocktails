import React from 'react';
import { Link } from "react-router-dom"

function Error() {
  return (
    <div>
      <h1>Oops! the page you requested does not exist on the our site</h1>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
    </div>
  )
}

export default Error;