import { supabase } from '../client';
import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import toast, { Toaster } from 'react-hot-toast';
import { XIcon } from '@heroicons/react/outline';

export default function SignIn() {
  const [email, setEmail] = useState('');

  // Function to hide the Sign in modal when the XIcon is clicked
  function hideModal() {
    const modal = document.getElementById('modal-cont');
    modal.classList.add('hidden');
    modal.classList.remove('flex');

    setEmail('');
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
    // Add the class of 'hidden' to the first div below when done designing the modal window
    <div
      className='hidden fixed inset-0 mx-auto items-center bg-opacity-75 bg-gray-500'
      id='modal-cont'
    >
      <div className='flex items-center shadow-md relative py-12 px-8 bg-white rounded-md mx-auto'>
        <div className='flex flex-col gap-4 items-center' id='sign-in-modal'>
          <XIcon
            onClick={hideModal}
            className='cursor-pointer h-6 absolute top-2 right-2 text-gray-700'
          />
          <h1 className='text-gray-700 text-xl font-bold'>
            Create your account
          </h1>
          <form className='flex flex-col gap-4 items-center'>
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
          focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50'
            />
            <button
              id='email-submit-btn'
              type='submit'
              onClick={handleSignUp}
              className='bg-purple-500 hover:bg-gray-600 text-white rounded-md p-2 px-4 font-medium transition transform duration-200'
            >
              Sign in
            </button>
            <Toaster />
          </form>
        </div>
        <div id='notification-modal' className='relative hidden'>
          <h2
            id='notification-modal'
            className='text-gray-700 text-xl font-medium'
          >
            Please check your Email for the login link
          </h2>
        </div>
      </div>
    </div>
  );
}
