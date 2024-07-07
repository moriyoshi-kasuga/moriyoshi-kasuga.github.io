import { useState } from 'react';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import { type RefObject, useEffect, useRef } from 'react';
import { MenuButton } from './MenuButton';

function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement['addEventListener']>)
    );
  }
}

function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,

  ...args:
    | Parameters<T['removeEventListener']>
    // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
    | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement['removeEventListener']>)
    );
  }
}
const defaultEvents = ['mousedown', 'touchstart'];
const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (event: any) => {
      const { current: el } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };
    for (const eventName of events) {
      on(document, eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events, ref]);
};

const routes = [
  {
    title: 'Home',
    href: '/',
    color: 'bg-primary-200',
    icon: <Icon icon="mdi:home-outline" width={30} height={30} />,
  },
  {
    title: 'About',
    href: '/about',
    color: 'bg-warning-200',
    icon: <Icon icon="mdi:search" width={30} height={30} />,
  },
  {
    title: 'Projects',
    href: '/projects',
    color: 'bg-danger-200',
    icon: <Icon icon="mdi:source-branch" width={30} height={30} />,
  },
  // {
  //   title: 'Skill',
  //   href: '/about/skill',
  //   color: 'bg-success-200',
  //   icon: <Icon icon="mdi:computer" width={30} height={30} />,
  // },
];

export function MobileMenu() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <MenuButton
        width={20}
        height={20}
        isOpen={isOpen}
        strokeWidth={4}
        onClick={() => setOpen(!isOpen)}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[var(--header-height)] rounded-b-3xl p-5 backdrop-blur-sm"
          >
            <ul className="fotn-monospace grid gap-2 p-3">
              {routes.map((route, idx) => {
                const { title, href, color, icon } = route;

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
                    key={title}
                    className="w-full rounded-xl bg-gradient-to-tr p-[0.08rem]"
                  >
                    <a
                      onClick={() => setOpen(prev => !prev)}
                      className={
                        'flex w-full items-center justify-between rounded-xl p-5 ' +
                        color
                      }
                      href={href}
                    >
                      <span className="flex gap-1 text-lg font-semibold">
                        {title}
                      </span>
                      {icon}
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
}
