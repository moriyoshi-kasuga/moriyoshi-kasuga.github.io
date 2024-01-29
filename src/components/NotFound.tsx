import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { PiWarningCircle } from 'react-icons/pi';

export const NotFound = ({
  backLink,
  title,
  descripion,
}: {
  backLink?: string;
  title?: string;
  descripion?: React.ReactNode;
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
          {descripion || 'お探しのページは存在しません。'}
        </p>

        <div className='mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto'>
          <Link
            href={backLink || '/'}
            className='flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 sm:w-auto dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800'
          >
            <FaArrowLeft />
            <span>Go back</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
