import { useState } from 'react';
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
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Skill',
    href: '/about/skill',
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MobileMenu(props: any) {
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
            <ul className="grid gap-2 p-3">
              {routes.map((route, idx) => {
                const { title, href } = route;
                const Icon = props[title];

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
                        'flex w-full items-center justify-between rounded-xl bg-zinc-200 p-5'
                      }
                      href={href}
                    >
                      <span className="font-mono-jp flex gap-1 text-lg font-semibold">
                        {title}
                      </span>
                      {Icon}
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
