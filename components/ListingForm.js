import { supabase } from '../client';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export default function ListingForm() {
  const [info, setInfo] = useState({
    id: nanoid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    title: '',
    description: '',
    location: '',
    duration: '',
    maxGuests: '',
    price: '',
    image: '',
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
    const visitImage = document.getElementById('imageInput').files[0];
    const imageTitle = nanoid();
    const imageExtension = '.jpg';

    await supabase.storage
      .from('visitimages')
      .upload(`${imageTitle}${imageExtension}`, visitImage);

    const { data, error } = await supabase.from('Visit').insert([
      {
        ...info,
        image: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/visitimages/${imageTitle}${imageExtension}`,
      },
    ]);
    console.log(data);

    //vopujdzggmkpsqocbuhp.supabase.co/storage/v1/object/public/visitimages/JduBKFKk0A64RmqLmkmKb.jpg

    https: setInfo({
      id: nanoid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      title: '',
      description: '',
      location: '',
      duration: '',
      maxGuests: '',
      price: '',
      image: '',
    });
  }

  return (
    <div className='my-4'>
      <div className='mt-8 max-w-md flex flex-col gap-4'>
        <label className='text-gray-700'>
          <input type='file' accept='image/*' id='imageInput' />
        </label>
        <label className='text-gray-700'>
          Title
          <input
            value={info.title}
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
            value={info.description}
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
              value={info.location}
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
              value={info.duration}
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
              value={info.maxGuests}
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
              value={info.price}
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
      <button
        onClick={submitForm}
        // onClick={addVisit}
        className='mt-6 bg-purple-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-medium transition transform duration-200'
      >
        Submit
      </button>
    </div>
  );
}
