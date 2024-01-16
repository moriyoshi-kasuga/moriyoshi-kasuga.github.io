'use client';

import { useRef } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useClickAway from '@/lib/useClickAway';
import { Squash as Hamburger } from 'hamburger-react';
import { FaSearchPlus } from 'react-icons/fa';

export const routes = [
  {
    title: 'Home',
    href: '#',
    Icon: FaSearchPlus,
  },
  {
    title: 'Explore',
    href: '#',
    Icon: FaSearchPlus,
  },
  {
    title: 'Pricing',
    href: '#',
    Icon: FaSearchPlus,
  },
  {
    title: 'About',
    href: '#',
    Icon: FaSearchPlus,
  },
];

export const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className='lg:hidden '>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='shadow-4xl fixed left-0 right-0 top-[3.5rem] border-b p-5 pt-0'
          >
            <ul className='grid gap-2'>
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
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        'flex w-full items-center justify-between rounded-xl p-5'
                      }
                      href={route.href}
                    >
                      <span className='flex gap-1 text-lg'>{route.title}</span>
                      <Icon className='text-xl' />
                    </a>
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
