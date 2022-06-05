export default function Paragraph() {
  return (
    <div className='text-lg lg:text-xl text-gray-700 flex flex-col gap-4 md:gap-6 leading-6 max-w-lg mx-auto mt-8 p-6'>
      <p>
        The current industrial visit experience is broken. When a class wants to
        organize an industrial visit the first thing they have to figure out is
        what all companies in their city actually provide. Even finding these
        companies is not easy since most companies are not easily reachable and
        there is no central directory which provides this information.
      </p>
      <p>
        I (
        <a
          className='text-blue-500 hover:underline'
          href='https://twitter.com/alabhyajindal'
          target='_blank'
          rel='noreferrer'
        >
          @alabhyajindal
        </a>
        ) believe that students should spend less time on finding out their
        options and more time on choosing the perfect option for them.
        That&apos;s why I created Visits &ndash; a platform where great
        companies can list visits and students can book them.
      </p>

      <p>
        An industrial visit is a great opportunity for both companies and
        students. It offers companies a chance to attract talent, as most often,
        the visiting students are the potential future employees of the company.
        Students benefit from industrial visits by getting exposure to
        real-world business practices and helping them expand their network.
      </p>
    </div>
  );
}
