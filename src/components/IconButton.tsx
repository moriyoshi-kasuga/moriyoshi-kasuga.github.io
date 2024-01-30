import Link from 'next/link';

const IconButton = ({
  content,
  url,
  icon,
}: {
  content: string;
  url: string;
  icon: React.ReactNode;
}) => {
  return (
    <Link
      href={url}
      target='_blank'
      className='flex items-center gap-2 rounded-lg bg-zinc-700 p-2 text-3xl text-white transition-transform hover:scale-105'
    >
      {icon}
      <span className='font-mono-jp font-normal text-zinc-100'>{content}</span>
    </Link>
  );
};

export default IconButton;
