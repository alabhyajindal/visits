import { supabase } from '../client';
import Link from 'next/link';
import SignIn from './SignIn';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

export default function Header() {
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    // Stores the userData to the user state immediately when the user signs in or out.
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === 'SIGNED_IN') {
          setUser(session.user);
          if (Object.keys(session.user.user_metadata).length === 0) {
            router.push('/profile');
          }
        }
        if (event === 'SIGNED_OUT') {
          setUser(null);
          router.push('/');
        }
      }
    );

    // Fetches the user data on the initial page render. Important in order to access the user data at all times.
    fetchProfile();

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  // Function to show the Sign in modal when the "Sign in" button is clicked
  function showModal() {
    const modal = document.getElementById('modal-cont');
    modal.classList.remove('invisible');
    modal.classList.add('flex');

    const signInModal = document.getElementById('sign-in-cont');

    signInModal.classList.remove('opacity-50');
    signInModal.classList.add('opacity-100');
    signInModal.classList.add('-translate-y-8');
  }

  async function fetchProfile() {
    const userData = supabase.auth.user();
    if (userData) {
      setUser(userData);
    }
  }

  async function signOut() {
    let toastId;
    try {
      toastId = toast.loading('Signing out...');

      const { error } = await supabase.auth.signOut();

      if (error) {
        throw new Error(error);
      } else {
        toast.dismiss(toastId);
        toast.success('Signed out');
      }
    } catch (e) {
      toast.dismiss(toastId);
      toast.error('Something went wrong');
    }
  }

  async function handleAuthChange(event, session) {
    // Sets and removes the Supabase cookie
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  }

  return (
    <div className='shadow-md py-4 px-8 sticky inset-x-0 top-0 bg-white flex items-center justify-between z-50 '>
      {/* Left */}
      <Link href='/'>
        <a>
          <img src='/logo.svg' alt='Visits logo' className='h-8 md:h-10' />
        </a>
      </Link>

      {/* Right */}
      <div className='flex gap-1 md:gap-4 text-sm items-center'>
        {/* <Link href='/create'>
          <a>
            <h2 className='btn-secondary'>Host</h2>
          </a>
        </Link>
        <Link href='/explore'>
          <a>
            <h2 className='btn-secondary'>Explore</h2>
          </a>
        </Link> */}
        {!user && (
          <button onClick={showModal} id='sign-in-btn' className='btn-primary'>
            Sign in
          </button>
        )}
        {user && (
          <button onClick={signOut} className='btn-secondary'>
            Sign out
          </button>
        )}
      </div>
      <Toaster />

      {/* Sign In Modal */}
      <SignIn />
    </div>
  );
}
