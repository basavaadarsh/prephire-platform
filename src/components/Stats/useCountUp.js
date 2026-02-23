import { useEffect, useRef, useState } from "react";

export function useCountUp(target, durationMs = 1200) {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef(null);
  const startedRef = useRef(false);
  const rafId = useRef();

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return undefined;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const startTs = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTs) / durationMs, 1);
        const next = target * progress;
        setDisplayValue(Number.isInteger(target) ? Math.round(next) : Number(next.toFixed(1)));
        if (progress < 1) {
          rafId.current = requestAnimationFrame(tick);
        }
      };

      rafId.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && start()),
      { threshold: 0.35 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [target, durationMs]);

  return { ref: nodeRef, displayValue };
}
