import type { RefObject } from "react";
import { useEffect, useRef } from "react";

function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions | boolean,
): void {
  if (obj?.addEventListener) {
    obj.addEventListener(event, handler, options);
  }
}

function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  event: string,
  handler: EventListener,
  options?: EventListenerOptions | boolean,
): void {
  if (obj?.removeEventListener) {
    obj.removeEventListener(event, handler, options);
  }
}

const defaultEvents = ["mousedown", "touchstart"];

/**
 * 要素の外側をクリック（またはタッチ）したときにコールバックを実行するカスタムフック
 * @param ref - 監視対象の要素への参照
 * @param onClickAway - 外側をクリックしたときに実行される関数
 * @param events - 監視するイベントのリスト（デフォルト: mousedown, touchstart）
 */
export function useClickAway<E extends Event = Event>(
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
