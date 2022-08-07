import React, { useState } from 'react'
import Card from '../UI/Card'

const GetStarted = () => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [classErrors, setClassErrors] = useState('h-10 inline-block w-96 p-3');

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const submitHandler = () => {
    const emailInput = document.querySelector('#email');

    if (!isValidEmail(emailInput.value)) {
      setErrorMessage('Please check your email');
      setHasError(true);
      setClassErrors('h-10 inline-block w-96 p-3 border border-red-500 border-solid border-2');
    } else{
      setClassErrors('h-10 inline-block w-96 p-3');
      setErrorMessage('');
      setHasError(false);
    }
  }

  return (
    <Card className='bg-get-started p-20 gap-36'>
      <div className='basis-1/2'>
        <p className='text-2xl font-Raleway font-bold text-white mb-6'>Get early access today</p>
        <p className='text-white'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      </div>
      <div className='basis-1/2 flex flex-col'>
        <input type='email' id="email" className={classErrors} />
        { hasError && <p className='text-white'>{errorMessage}</p> }
        <button type='button' onClick={submitHandler} className='btn btn-primary mt-4'>Get Started For Free</button>
      </div>
    </Card>
  )
}

export default GetStarted
