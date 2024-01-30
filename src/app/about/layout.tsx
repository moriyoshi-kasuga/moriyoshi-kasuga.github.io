import CircleMenu from '@/components/CircleMenu';
import { SlNotebook } from 'react-icons/sl';
import { FaComputer } from 'react-icons/fa6';
import { AiOutlineLike } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CircleMenu
        links={[
          {
            href: '/about',
            content: 'About',
            icon: <FaSearch />,
            linkClass: 'bg-warning-400',
          },
          {
            href: '/about/likes',
            content: 'Likes',
            icon: <AiOutlineLike />,
            linkClass: 'bg-danger-400',
          },
          {
            href: '/about/links',
            content: 'Links',
            icon: <SlNotebook />,
            linkClass: 'bg-success-400',
          },
          {
            href: '/skills',
            content: 'Skills',
            icon: <FaComputer />,
            linkClass: 'bg-primary-400',
          },
        ]}
      />
    </>
  );
}
