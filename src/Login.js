import React from 'react'

import './App.css';
import { Link } from 'react-router-dom'


const Login = () => {
  return (


    <>
      <div className="container mt-5" style={{ width: '900px', marginTop: '90px' }}>
        <form style={{ border: '2px solid lightgrey ', borderWidth: '4px', borderRadius: '5px', padding: '1rem', }}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder='Enter Name' />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder='Enter Email' />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder='Enter Password' />
          </div>
          <button type="submit" className="btn btn-primary" > <Link to='Home' style={{ textDecoration: 'none', color: 'white' }}>Login</Link></button>
        </form>
      </div>
    </>

  )
}

export default Login