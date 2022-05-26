import { supabase } from '../client';
import { XIcon } from '@heroicons/react/outline';

export default function SignIn() {
  // Function to hide the Sign in modal when the XIcon is clicked
  function hideModal() {
    document.getElementById('modal-cont').classList.add('hidden');
  }
  return (
    <div className='fixed inset-0 mx-auto flex items-center'>
      <div
        className='flex items-center shadow-md relative py-12 px-8 bg-purple-300 rounded-md mx-auto'
        id='modal-cont'
      >
        <div>
          <XIcon
            onClick={hideModal}
            className='cursor-pointer h-6 absolute top-2 right-2 text-gray-700'
          />
          <p className='text-gray-600 text-lg'>
            Please create an account to list or book visits.
          </p>
        </div>
      </div>
    </div>
  );
}
