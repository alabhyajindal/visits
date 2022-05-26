import { supabase } from '../client';
import { XIcon } from '@heroicons/react/outline';

export default function SignIn() {
  // Function to hide the Sign in modal when the XIcon is clicked
  function hideModal() {
    document.getElementById('modal-cont').classList.add('hidden');
  }
  return (
    <div className='hidden' id='modal-cont'>
      <div>
        <XIcon onClick={hideModal} className='cursor-pointer' />
        <h1>Hello!</h1>
      </div>
    </div>
  );
}
