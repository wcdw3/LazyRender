import React from 'react';
import { useInView } from 'react-intersection-observer';

export interface LazyRenderProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  forceView?: boolean;
  rootMargin?: string;
  triggerOnce?: boolean;
  threshold?: number;
}

export default function LazyRender({
  children,
  fallback,
  rootMargin,
  threshold = 0,
  forceView = false,
triggerOnce= true
}: LazyRenderProps) {
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return inView || forceView ? (
    <>{children}</>
  ) : (
    <div ref={ref}>{fallback}</div>
  );
}
