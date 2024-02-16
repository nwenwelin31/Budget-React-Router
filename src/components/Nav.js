import React from 'react'
import logomark from '../assets/logomark.svg';
import { Form, NavLink } from 'react-router-dom'
import { BsTrash3Fill } from "react-icons/bs";

const Nav = ({userName}) => {
  return (
    <nav>
        <NavLink to="/" aria-label="Go to Home">
            <img src={logomark} alt='' width={30}/>
            <span>HomeBudget</span>
        </NavLink>
      {
            userName && (
                <Form method='post' action='logout' 
                onSubmit={ (event) => {
                    if(!window.confirm('Delete user and all data?')){
                        event.preventDefault();
                    }
                }}>
                    <button type='submit' className='btn btn-warning'>
                        <BsTrash3Fill />
                        <span>Delete User</span>
                    </button>
                </Form>
            )
        }

    </nav>
  )
}

export default Nav
