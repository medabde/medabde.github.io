import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <button className="flex space-x-2 rtl:space-x-reverse">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <span className="font-bold text-2xl hidden lg:block">ᎷᎧᏋ</span>
      </button>
    </Link>
  );
};

export default Logo;
