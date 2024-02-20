import React from 'react'
import { Form } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import illustration from '../assets/illustration.jpg';
const Intro = () => {
  return (
    <div className="intro">
        <div>
            <h1 className='text-start'>
                Take control of <span className='accent'>Your Money</span>
            </h1>
            <p className='text-start'>Personal Budgeting is the secret to financial freedom. Start your journey today.</p>
            <Form method='post'>
                <input type='text' name='userName' placeholder='Enter user Name' aria-label='Your Name' required autoComplete='given-name'/>
                <input type='hidden' value='newUser' name='_action'/>
                <button type="submit" className='btn btn-dark'>
                    <span>Create Account </span>
                    <FaRegUser width={20}/>
                </button>
            </Form>
        </div>
        <img src={illustration} alt='Person with money' width={600}/>
    </div>
  )
}

export default Intro
