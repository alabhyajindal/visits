import { supabase } from '../client';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ProfileForm() {
  const [group, setGroup] = useState('student');

  const [studentInfo, setStudentInfo] = useState({
    category: 'student',
    firstName: '',
    lastName: '',
  });

  const [companyInfo, setCompanyInfo] = useState({
    category: 'company',
    name: '',
    size: '',
  });

  function updateGroup(e) {
    setGroup(e.target.value);
  }

  function updateFormData(e) {
    if (group === 'student') {
      setStudentInfo((prevInfo) => {
        return {
          ...prevInfo,
          [e.target.id]: e.target.value,
        };
      });
    }
    if (group === 'company') {
      setCompanyInfo((prevInfo) => {
        return {
          ...prevInfo,
          [e.target.id]: e.target.value,
        };
      });
    }
  }

  function continueForm() {
    const firstForm = document.getElementById('first-form');
    const userForm = document.getElementById('user-form');
    const companyForm = document.getElementById('company-form');

    const continueBtn = document.getElementById('continue-btn');
    const submitBtn = document.getElementById('submit-btn');

    firstForm.classList.add('hidden');
    continueBtn.classList.add('hidden');

    if (group === 'student') {
      userForm.classList.add('flex');
      userForm.classList.remove('hidden');
    }
    if (group === 'company') {
      companyForm.classList.add('flex');
      companyForm.classList.remove('hidden');
    }

    submitBtn.classList.remove('hidden');

    document.getElementById('form-steps').textContent = 'Step 2 of 2';
  }

  async function submitStudentInfo() {
    const { user, error } = await supabase.auth.update({
      data: studentInfo,
    });
  }

  async function submitCompanyInfo() {
    const { user, error } = await supabase.auth.update({
      data: companyInfo,
    });
  }

  function submitForm() {
    if (group === 'student') {
      submitStudentInfo();
    }
    if (group === 'company') {
      submitCompanyInfo();
    }
  }

  return (
    <div>
      <p className='uppercase text-sm text-blue-500 font-bold' id='form-steps'>
        Step 1 of 2
      </p>
      <div className='my-4'>
        <div className='max-w-md flex flex-col gap-4' id='first-form'>
          <label className='text-gray-700 block'>
            Are you a student? Or are you representing a company looking to list
            a visit?
            <select
              id='category'
              onChange={updateGroup}
              value={group}
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

        <div className='max-w-md flex-col gap-4 hidden' id='user-form'>
          <label className='text-gray-700 block'>
            First Name
            <input
              type='text'
              id='firstName'
              value={studentInfo.firstName}
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
              value={studentInfo.lastName}
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

        <div className='max-w-md flex-col gap-4 hidden' id='company-form'>
          <label className='text-gray-700 block'>
            Company Name
            <input
              type='text'
              id='name'
              value={companyInfo.name}
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
            Company Size
            <input
              type='number'
              id='size'
              value={companyInfo.size}
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
      <Toaster />
    </div>
  );
}
