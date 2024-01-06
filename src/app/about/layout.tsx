import CircleMenu from '@/components/CircleMenu';
import { SlNotebook } from "react-icons/sl";
import { FaComputer } from 'react-icons/fa6';
import { AiFillLike } from 'react-icons/ai';
import {
  FaSearch,
} from 'react-icons/fa';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CircleMenu
        links={[
          {
            href: '/about',
            content: 'About Me',
            icon: <FaSearch />,
            tooltipColor: 'warning',
            linkClass: 'bg-warning-400',
          },
          {
            href: '/about/likes',
            content: 'Likes',
            icon: <AiFillLike />,
            tooltipColor: 'danger',
            linkClass: 'bg-danger-400',
          },
          {
            href: '/about/links',
            content: 'Links',
            icon: <SlNotebook />,
            tooltipColor: 'success',
            linkClass: 'bg-success-400',
            placement: 'top-end'
          },
          {
            href: '/skills',
            content: 'Skills',
            icon: <FaComputer />,
            tooltipColor: 'primary',
            linkClass: 'bg-primary-400',
            placement: 'top-end'
          },
        ]}
      />
    </>
  );
}
