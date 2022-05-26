import { useState } from 'react';
import { supabase } from '../client';
import { XIcon } from '@heroicons/react/outline';
import isEmail from 'validator/lib/isEmail';

export default function SignIn() {
  const [email, setEmail] = useState('');

  // Function to hide the Sign in modal when the XIcon is clicked
  function hideModal() {
    const modal = document.getElementById('modal-cont');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  function handleEmailInput(e) {
    const btn = document.getElementById('email-submit-btn');
    setEmail(e.target.value);
    if (isEmail(e.target.value)) {
      btn.classList.add('bg-purple-500');
      btn.classList.add('text-white');
      btn.classList.add('hover:bg-gray-600');
      btn.classList.add('hover:border-gray-600');
      btn.classList.remove('text-purple-500');
    } else {
      btn.classList.remove('bg-purple-500');
      btn.classList.remove('text-white');
      btn.classList.remove('hover:bg-gray-600');
      btn.classList.remove('hover:border-gray-600');
      btn.classList.add('text-purple-500');
    }
  }

  function handleSignUp(e) {
    e.preventDefault();
  }
  return (
    // Add the class of 'hidden' to the first div below when done designing the modal window
    <div
      className='fixed inset-0 mx-auto flex items-center bg-opacity-75 bg-gray-500'
      id='modal-cont'
    >
      <div className='flex items-center shadow-md relative py-12 px-8 bg-white rounded-md mx-auto'>
        <div className='flex flex-col gap-4 items-center'>
          <XIcon
            onClick={hideModal}
            className='cursor-pointer h-6 absolute top-2 right-2 text-gray-700'
          />
          <h1 className='text-gray-700 text-xl font-bold'>
            Create your account
          </h1>

          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={handleEmailInput}
            className='mt-1
          block
          w-full
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
          <button
            id='email-submit-btn'
            type='submit'
            onClick={handleSignUp}
            className='border-2  border-purple-500 text-purple-500 rounded-md p-2 px-4 font-medium transition transform duration-200'
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
