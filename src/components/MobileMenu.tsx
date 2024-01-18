'use client';

import { useRef } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useClickAway from '@/lib/useClickAway';
import { Squash as Hamburger } from 'hamburger-react';
import { FaHome, FaProjectDiagram, FaSearch } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import Link from 'next/link';

export const routes = [
  {
    title: 'Home',
    href: '/',
    Icon: FaHome,
  },
  {
    title: 'About',
    href: '/about',
    Icon: FaSearch,
  },
  {
    title: 'Projects',
    href: '/projects',
    Icon: FaProjectDiagram,
  },
  {
    title: 'Skills',
    href: '/skills',
    Icon: FaComputer,
  },
];

export const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed left-0 right-0 top-[var(--header-height)] rounded-b-3xl p-5 shadow-sm shadow-default-600 backdrop-blur-sm'
          >
            <ul className='grid gap-2 p-3'>
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className='w-full rounded-xl bg-gradient-to-tr p-[0.08rem]'
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        'flex w-full items-center justify-between rounded-xl bg-gray-100 p-5'
                      }
                      href={route.href}
                    >
                      <span className='flex gap-1 font-mono text-lg font-semibold'>
                        {route.title}
                      </span>
                      <Icon className='text-xl' />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
