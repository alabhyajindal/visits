import { supabase } from '../client';
import { useState } from 'react';

export default function ProfileForm() {
  const [info, setInfo] = useState({
    category: 'student',
    firstName: '',
    lastName: '',
  });

  const updateFormData = function (e) {
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.id]: e.target.value,
      };
    });
  };

  const continueForm = function () {
    const firstForm = document.getElementById('first-form');
    const secondForm = document.getElementById('second-form');
    const continueBtn = document.getElementById('continue-btn');
    const submitBtn = document.getElementById('submit-btn');

    firstForm.classList.add('hidden');
    continueBtn.classList.add('hidden');

    secondForm.classList.add('flex');
    secondForm.classList.remove('hidden');
    submitBtn.classList.remove('hidden');

    document.getElementById('form-steps').textContent = 'Step 2 of 2';

    // console.log(info);
  };

  async function submitForm() {
    console.log(info);
    const { user, error } = await supabase.auth.update({
      data: info,
    });
    console.log(info);
  }

  return (
    <div>
      <p
        className='uppercase text-sm text-blue-500 font-medium'
        id='form-steps'
      >
        Step 1 of 2
      </p>
      <div className='my-4'>
        <div className='max-w-md flex flex-col gap-4' id='first-form'>
          <label className='text-gray-700 block'>
            Are you a student? Or are you representing a company looking to list
            a visit?
            <select
              id='category'
              onChange={updateFormData}
              value={info.category}
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
              <option value='student'>Student</option>
              <option value='company'>Company</option>
            </select>
          </label>
        </div>
        <button
          onClick={continueForm}
          className='btn-primary mt-4'
          id='continue-btn'
        >
          Continue
        </button>
        <div className='max-w-md flex-col gap-4 hidden' id='second-form'>
          <label className='text-gray-700 block'>
            First Name
            <input
              type='text'
              id='firstName'
              value={info.firstName}
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
            />
          </label>
          <label className='text-gray-700 block'>
            Last Name
            <input
              type='text'
              id='lastName'
              value={info.lastName}
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
            />
          </label>
        </div>
        <button
          onClick={submitForm}
          className='btn-primary mt-4 hidden'
          id='submit-btn'
        >
          Submit
        </button>
      </div>
    </div>
  );
}
