import { supabase } from '../client';
import { useState } from 'react';
import Image from 'next/image';
import isEmail from 'validator/lib/isEmail';
import toast, { Toaster } from 'react-hot-toast';
import { XIcon } from '@heroicons/react/outline';

export default function SignIn() {
  const [email, setEmail] = useState('');

  const [isCompany, setIsCompany] = useState(null);

  function changeUserGroup(e) {
    const emailInput = document.getElementById('email-input');

    if (e.target.value == 'Company') {
      setIsCompany(true);
      emailInput.placeholder = 'tim@apple.com';
    }
    if (e.target.value == 'Student') {
      setIsCompany(false);
      emailInput.placeholder = 'simran@joseph.in';
    }
    if (e.target.value == 'Choose') {
      setIsCompany(null);
      emailInput.placeholder = 'Email';
    }
  }

  // Function to hide the Sign in modal when the XIcon is clicked
  function hideModal(e) {
    const modal = document.getElementById('modal-cont');
    modal.classList.add('invisible');
    modal.classList.remove('flex');

    setEmail('');

    document.getElementById('sign-in-cont').classList.add('opacity-50');
    document.getElementById('sign-in-cont').classList.remove('opacity-100');
  }

  function handleEmailInput(e) {
    const btn = document.getElementById('email-submit-btn');
    setEmail(e.target.value);
    if (!isEmail(e.target.value)) {
      btn.classList.add('opacity-50');
    } else {
      btn.classList.remove('opacity-50');
    }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    let toastId;
    let notificationModal = document.getElementById('notification-modal');
    let signInModal = document.getElementById('sign-in-modal');

    if (isEmail(email)) {
      try {
        toastId = toast.loading('Sending...');
        const { data, error } = await supabase.auth.signIn({
          email: email,
        });

        if (error) {
          throw new Error(error);
        } else {
          toast.dismiss(toastId);
          notificationModal.classList.remove('hidden');
          notificationModal.classList.add('flex');
          signInModal.classList.add('hidden');
          setEmail('');
        }
      } catch (err) {
        toast.dismiss(toastId);
        toast.error('Something went wrong');
      }
    } else {
      toast.error('Please enter a valid Email address');
    }
  }
  return (
    <div
      className='invisible fixed inset-0 mx-auto items-center bg-opacity-75 bg-gray-500 transition transform duration-400 ease-out'
      id='modal-cont'
    >
      <div
        className='flex items-center shadow-md relative p-12 bg-white rounded-md mx-auto opacity-50 transition transform duration-400 ease-out max-w-md'
        id='sign-in-cont'
      >
        <div className='flex flex-col gap-4 items-center ' id='sign-in-modal'>
          <XIcon
            onClick={hideModal}
            className='cursor-pointer h-6 absolute top-2 right-2 text-gray-700'
          />
          <Image
            src='/logo.png'
            objectPosition='center'
            alt='Visit Logo'
            height={50}
            width={100}
            className='cursor-pointer'
          />
          <h1 className='text-gray-700 text-xl font-medium'>
            Welcome to Visit
          </h1>

          <form className='grid grid-cols-1 gap-4 items-center max-w-md'>
            <label className='text-gray-700'>
              Email
              <input
                type='email'
                id='email-input'
                placeholder='Email'
                value={email}
                onChange={handleEmailInput}
                className='mt-1
          block
          w-full
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
              />
            </label>
            <button
              id='email-submit-btn'
              type='submit'
              onClick={handleSignUp}
              className='btn-primary'
            >
              Sign in
            </button>
          </form>
        </div>
        <div
          className='flex-col gap-4 items-center hidden'
          id='notification-modal'
        >
          <XIcon
            onClick={hideModal}
            className='cursor-pointer h-6 absolute top-2 right-2 text-gray-700'
          />
          <h2 id='notification-modal' className='text-gray-700 text-xl'>
            Please check your Email for the login link
          </h2>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
