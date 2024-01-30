import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { PiWarningCircle } from 'react-icons/pi';

export const NotFound = ({
  backLink,
  title,
  description,
}: {
  backLink?: string;
  title?: string;
  description?: string;
}) => {
  return (
    <div className='min-h-all container mx-auto flex items-center px-6 py-12'>
      <div className='mx-auto flex max-w-sm flex-col items-center text-center'>
        <p className='rounded-full bg-primary-50 p-3 text-3xl font-medium text-primary-500 dark:bg-gray-800'>
          <PiWarningCircle />
        </p>
        <h1 className='mt-3 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white'>
          {title || 'Page not found'}
        </h1>
        <p className='mt-4 text-gray-500 dark:text-gray-400'>
          {description || 'お探しのページは存在しません。'}
        </p>
        <Link
          href={backLink || '/'}
          className='mt-6 flex w-auto items-center justify-center gap-x-2 rounded-lg border bg-primary-500 px-5 py-2 text-sm text-white transition-colors duration-200 hover:bg-primary-600'
        >
          <FaArrowLeft className='text-zinc-200' />
          <span>Go back</span>
        </Link>
      </div>
    </div>
  );
};
