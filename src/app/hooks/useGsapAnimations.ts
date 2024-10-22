"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GsapOptions = {
  scrollTrigger?: object;
  [key: string]: unknown;
};

export const useGsapAnimations = () => {
  const fadeLeftHeader = useRef(null);
  const fadeRightHeader = useRef(null);
  const fadeTopHeader = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // const isNonMobileScreen = window.innerWidth > 768;

    // // If on mobile screen, skip animations
    // if (!isNonMobileScreen) {
    //   setIsLoading(false);
    //   return;
    // }

    try {
      setIsLoading(true);

      const animateElement = (
        selector: string,
        from: object,
        to: GsapOptions
      ) => {
        gsap.utils.toArray(selector).forEach((element) => {
          gsap.fromTo(element as HTMLElement, from, {
            ...to,
            scrollTrigger: {
              trigger: element as HTMLElement,
              scrub: 1,
              ...to.scrollTrigger,
            },
          });
        });
      };

      animateElement(
        ".fade-up",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: { start: "top 120%", end: "top 30%" },
        }
      );
      animateElement(
        ".fade-down",
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: { start: "top 120%", end: "top 30%" },
        }
      );
      animateElement(
        ".fade-left",
        { opacity: 0, x: -150 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: { start: "top 80%", end: "top 30%" },
        }
      );
      animateElement(
        ".fade-right",
        { opacity: 0, x: 150 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: { start: "top 80%", end: "top 30%" },
        }
      );
      animateElement(
        ".flip-left",
        { opacity: 0, rotateY: -80, y: 0 },
        {
          opacity: 1,
          rotateY: 0,
          duration: 1,
          scrollTrigger: { start: "top 80%", end: "top 30%" },
        }
      );

      // Animation cho các header
      if (fadeLeftHeader.current) {
        gsap.fromTo(
          fadeLeftHeader.current,
          { opacity: 0, x: -150 },
          { opacity: 1, x: 0, duration: 1.5 }
        );
      }

      if (fadeRightHeader.current) {
        gsap.fromTo(
          fadeRightHeader.current,
          { opacity: 0, x: 150 },
          { opacity: 1, x: 0, duration: 1.5 }
        );
      }

      if (fadeTopHeader.current) {
        gsap.fromTo(
          fadeTopHeader.current,
          { opacity: 0, y: 150 },
          { opacity: 1, y: 0, duration: 1.5 }
        );
      }
    } catch (error) {
      console.error("GSAP Animation Error: ", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { fadeLeftHeader, fadeRightHeader, fadeTopHeader, isLoading };
};
