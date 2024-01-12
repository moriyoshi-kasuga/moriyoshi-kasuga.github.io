import { Tooltip } from '@nextui-org/react';
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
    <Tooltip delay={0} closeDelay={100} content={content}>
      <Link
        href={url}
        target='_blank'
        className='rounded-lg bg-default-700 p-2 text-4xl text-white transition-transform hover:scale-110'
      >
        {icon}
      </Link>
    </Tooltip>
  );
};

export default IconButton;
