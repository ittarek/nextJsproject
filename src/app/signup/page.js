import React from 'react';
import SignUpForm from './SignUpForm';


export const metadata = {
    title: 'Signup | NextJs',
    description: 'Generated by next hero',
  }

const SignupPage = () => {
    return (
        <div>
            <SignUpForm/>
        </div>
    );
};

export default SignupPage;