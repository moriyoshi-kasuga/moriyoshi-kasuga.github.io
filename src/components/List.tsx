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
      <h2 className='w-1/3 text-right font-mono-jp text-2xl font-bold md:w-1/2'>{id}</h2>
      {href ? (
        <Link
          href={href}
          className='link-style w-2/3 break-words text-left font-mono-jp text-xl font-semibold md:w-1/2'
          target='_blank'
        >
          {value}
        </Link>
      ) : (
        <p className='w-2/3 break-words text-left font-mono-jp text-xl font-semibold md:w-1/2'>
          {value}
        </p>
      )}
    </div>
  );
};

export { List, Item };
