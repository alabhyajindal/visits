import Image from 'next/image';
import hero from '../public/hero.jpg';

export default function Banner() {
  // Could be used in the CTA sections. Not relevant here since the banner is not a clickable item
  // function increaseOpacity() {
  //   const image = document.getElementById('image');
  //   image.classList.remove('opacity-60');
  //   image.classList.add('opacity-50');
  // }

  // function decreaseOpacity() {
  //   const image = document.getElementById('image');
  //   image.classList.remove('opacity-50');
  //   image.classList.add('opacity-60');
  // }

  return (
    <div className='overflow-x-hidden'>
      <div className='w-screen h-screen'>
        <Image
          id='image'
          src={hero}
          layout='fill'
          objectFit='cover'
          className='brightness-50'
        />
        <h1 className='absolute top-30 left-14 text-5xl md:text-5xl lg:text-6xl w-2/3 max-w-lg font-semibold text-white'>
          Streamlined industrial visit experiences for <br />
          <span className='text-blue-500 font-bold'>everyone</span>
        </h1>
      </div>
    </div>
  );
}
