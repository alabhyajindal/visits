import { supabase } from '../client';
import { useState } from 'react';
import Image from 'next/image';
import isEmail from 'validator/lib/isEmail';
import toast, { Toaster } from 'react-hot-toast';
import { XIcon } from '@heroicons/react/outline';
import logo from '../public/logo.png';

export default function SignIn() {
  const [email, setEmail] = useState('');

  // Function to hide the Sign in modal when the XIcon is clicked
  function hideModal() {
    const modal = document.getElementById('modal-cont');
    modal.classList.add('invisible');
    modal.classList.remove('flex');

    setEmail('');

    const signInModal = document.getElementById('sign-in-cont');

    signInModal.classList.add('opacity-50');
    signInModal.classList.remove('opacity-100');
    signInModal.classList.remove('-translate-y-8');
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
          toast('Please check your Email for the login link', {
            icon: '✉️',
            duration: 6000,
          });
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
          <div className='relative h-14 w-28'>
            <Image
              src={logo}
              alt='Visits Logo'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <h1 className='text-gray-700 text-xl font-medium'>
            Welcome to Visits
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
      </div>
      <Toaster />
    </div>
  );
}
