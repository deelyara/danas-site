'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
}

export function useMultipleScrollAnimation(count: number, options: UseScrollAnimationOptions = {}) {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
  const elementRefs = useRef<(HTMLElement | null)[]>(Array(count).fill(null));

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-animation-index') || '0');
          
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, index]));
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    elementRefs.current.forEach((element, index) => {
      if (element) {
        element.setAttribute('data-animation-index', index.toString());
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  const setElementRef = (index: number) => (el: HTMLElement | null) => {
    elementRefs.current[index] = el;
  };

  const isVisible = (index: number) => visibleElements.has(index);

  return { setElementRef, isVisible };
} 