import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import './SignUp.scss'

export default function  SignUp(): JSX.Element {
  return (
    <div className='sign-up'>
      <SignUpForm/>
    </div>
  )
}
