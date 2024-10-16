import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface AnimateOnScrollOptions {
  startValue: string;
  endValue: string;
  duration?: number;
  threshold?: number;
}

export function useIncreaseNumberAnimations({
  startValue,
  endValue,
  duration = 2, // Default animation duration of 2 seconds
  threshold = 0.5, // Default threshold to 50%
}: AnimateOnScrollOptions) {
  const [currentFormattedStat, setCurrentFormattedStat] =
    useState<string>(startValue); // Holds the formatted stat
  const statRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // For intersection observer

  useEffect(() => {
    // Intersection Observer callback
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && statRef.current) {
        gsap.fromTo(
          statRef.current,
          { innerText: startValue }, // Start value of the animation
          {
            innerText: endValue, // End value of the animation
            duration: duration, // Animation duration
            ease: "power1.out", // Easing function
            snap: { innerText: 1 }, // Ensure rounding of the animated number
            onUpdate: function () {
              const currentValue = statRef.current?.innerText || "0";
              setCurrentFormattedStat(currentValue); // Update stat during animation
            },
          }
        );
      }
    };

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: threshold, // Set threshold based on options
    });

    if (containerRef.current) {
      observer.observe(containerRef.current); // Observe the component container
    }

    // Cleanup on unmount
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [startValue, endValue, duration, threshold]);

  return { currentFormattedStat, statRef, containerRef };
}
