import { useState } from 'react';

export default function ListingForm() {
  const [info, setInfo] = useState({});

  const updateFormData = function (e) {
    setInfo((prevInfo) =>
      setInfo({ ...prevInfo, [e.target.id]: e.target.value })
    );
  };

  return (
    <div className='mt-8 mx-16'>
      <h2 className='text-xl font-medium'>List your Visit</h2>
      <p>Fill out the form below to list a new visit.</p>
      <div className='mt-8 max-w-md flex flex-col gap-4'>
        <label className='text-gray-700'>
          Title
          <input
            type='text'
            id='title'
            onChange={(e) => updateFormData(e)}
            className='
          mt-1
          block
          w-full
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          '
          />
        </label>
        <label className='text-gray-700'>
          Description
          <textarea
            id='description'
            onChange={(e) => updateFormData(e)}
            className='mt-1
          block
          w-full
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </label>
        <div className='grid grid-cols-2 gap-y-4'>
          <label className='text-gray-700'>
            City
            <input
              id='location'
              onChange={(e) => updateFormData(e)}
              type='text'
              className='block
            w-md
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </label>
          <label className='text-gray-700'>
            Duration (in hours)
            <input
              type='number'
              id='duration'
              onChange={(e) => updateFormData(e)}
              className='block
            w-md
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </label>
          <label className='text-gray-700'>
            Maximum visitors
            <input
              type='number'
              id='maxGuests'
              onChange={(e) => updateFormData(e)}
              className='block
          w-md
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </label>
          <label className='text-gray-700'>
            Price
            <input
              type='number'
              id='price'
              onChange={(e) => updateFormData(e)}
              className='block
          w-md
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </label>
        </div>
      </div>
      <button className='mt-6 bg-purple-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-medium transition transform duration-200'>
        Submit
      </button>
    </div>
  );
}
