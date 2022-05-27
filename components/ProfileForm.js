import { supabase } from '../client';
import { useState } from 'react';

export default function ProfileForm() {
  const [info, setInfo] = useState({
    category: '',
  });

  const updateFormData = function (e) {
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.id]: e.target.value,
      };
    });
  };

  async function submitForm() {
    const { user, error } = await supabase.auth.update({
      data: info,
    });
  }

  return (
    <div className='my-4'>
      <div className='max-w-md flex flex-col gap-4'>
        <label className='text-gray-700 block'>
          Student / Company
          <select
            id='category'
            onChange={updateFormData}
            className='
                    
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                  '
          >
            <option>Student</option>
            <option>Company</option>
          </select>
        </label>
      </div>
      <button onClick={submitForm} className='btn-primary mt-6'>
        Submit
      </button>
    </div>
  );
}
