import { supabase } from '../client';
import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import toast, { Toaster } from 'react-hot-toast';
import { Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

export default function SignIn() {
  const [email, setEmail] = useState('');

  // State to determine if the modal window is open
  const [isShowing, setIsShowing] = useState(false);

  // Function to hide the Sign in modal when the XIcon is clicked
  function hideModal() {
    setIsShowing(false);
  }

  // Function to show the Sign in modal when the "Sign in" button is clicked
  function showModal() {
    setIsShowing(true);
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

  async function handleSignIn(e) {
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
    <Transition
      show={isShowing}
      enter='transition-opacity duration-75'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
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
            <h1 className='text-gray-700 text-xl font-medium'>
              Welcome to Visit
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
                onClick={handleSignIn}
                className='bg-purple-500 hover:bg-gray-600 text-white rounded-md p-2 px-4 font-medium transition transform duration-200 hover:shadow-md hover:shadow-purple-200'
              >
                Sign in
              </button>
              <Toaster />
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
            <h2
              id='notification-modal'
              className='text-gray-700 text-xl font-medium'
            >
              Please check your Email for the login link
            </h2>
          </div>
        </div>
      </div>
    </Transition>
  );
}
