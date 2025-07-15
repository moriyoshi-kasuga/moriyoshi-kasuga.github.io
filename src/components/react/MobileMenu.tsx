import type { RefObject } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MenuButton } from "./MenuButton";

function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions | boolean,
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(event, handler, options);
  }
}

function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  event: string,
  handler: EventListener,
  options?: EventListenerOptions | boolean,
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(event, handler, options);
  }
}
const defaultEvents = ["mousedown", "touchstart"];
function useClickAway<E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents,
) {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    const handler = (event: Event) => {
      const { current: el } = ref;
      const target = event.target as Node;
      if (el && !el.contains(target)) {
        savedCallback.current(event as E);
      }
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
}

const routes = [
  {
    title: "Home",
    href: "/",
    icon: <Icon icon="mdi:home-outline" width={30} height={30} />,
  },
  {
    title: "About",
    href: "/about",
    icon: <Icon icon="mdi:search" width={30} height={30} />,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <Icon icon="mdi:source-branch" width={30} height={30} />,
  },
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
            className="fixed top-[var(--header-height)] right-0 left-0 rounded-b-3xl p-5 backdrop-blur-xs"
          >
            <ul className="grid place-content-center place-items-center gap-2 p-3">
              {routes.map((route, idx) => {
                const { title, href, icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 340,
                      damping: 20,
                      delay: 0.05 + idx / 10,
                    }}
                    key={title}
                    className="rounded-xl bg-linear-to-tr p-[0.08rem]"
                  >
                    <a
                      onClick={() => setOpen(prev => !prev)}
                      className="flex max-w-80 min-w-72 items-center justify-between rounded-xl bg-gray-100/90 p-5"
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
