import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(
  animation: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'stagger-up',
  options?: { delay?: number; duration?: number; stagger?: number }
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const delay = options?.delay || 0;
    const duration = options?.duration || 0.8;
    const stagger = options?.stagger || 0.1;

    let fromVars: gsap.TweenVars = { opacity: 0 };
    let toVars: gsap.TweenVars = { opacity: 1, duration, delay, ease: 'power3.out' };

    switch (animation) {
      case 'fade-up':
        fromVars = { opacity: 0, y: 40 };
        toVars = { ...toVars, y: 0 };
        break;
      case 'fade-left':
        fromVars = { opacity: 0, x: -40 };
        toVars = { ...toVars, x: 0 };
        break;
      case 'fade-right':
        fromVars = { opacity: 0, x: 40 };
        toVars = { ...toVars, x: 0 };
        break;
      case 'scale-in':
        fromVars = { opacity: 0, scale: 0.95 };
        toVars = { ...toVars, scale: 1 };
        break;
      case 'stagger-up':
        fromVars = { opacity: 0, y: 30 };
        toVars = { ...toVars, y: 0, stagger };
        break;
    }

    const targets = animation === 'stagger-up' ? el.children : el;

    gsap.set(targets, fromVars);

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(targets, toVars);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [animation, options?.delay, options?.duration, options?.stagger]);

  return ref;
}
