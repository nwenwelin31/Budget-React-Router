import React from 'react'
import { Link, useNavigate, useRouteError } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className='error'>
      <h1>Uh oh! We've got a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className='flex-md'>
          <button className='btn btn-dark' onClick={() => navigate(-1)}>
              <HiMiniArrowUturnLeft width={20} />
              <span> Go Back</span>
          </button>
          <Link to="/" className='btn btn-dark'>
              <IoHomeOutline width={20} />
              <span> Go Home</span>
          </Link>
      </div>
    </div>
  )
}
