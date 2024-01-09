import Link from 'next/link';

const List = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex w-full flex-col gap-x-8 gap-y-4 px-10'>{children}</div>;
};

const Item = ({
  id,
  value,
  href,
}: {
  id: React.ReactNode;
  value?: React.ReactNode;
  href?: string;
}) => {
  return (
    <div className='flex w-full items-center gap-x-2'>
      <h2 className='w-1/3 md:w-1/2 text-right font-mono-jp text-2xl font-bold'>{id}</h2>
      {href ? (
        <Link
          href={href}
          className='w-2/3 md:w-1/2 break-words text-left font-mono-jp text-xl font-semibold text-primary-600 underline underline-offset-[3px]'
          target='_blank'
        >
          {value}
        </Link>
      ) : (
        <p className='w-2/3 md:w-1/2 break-words text-left font-mono-jp text-xl font-semibold'>
          {value}
        </p>
      )}
    </div>
  );
};

export { List, Item };
