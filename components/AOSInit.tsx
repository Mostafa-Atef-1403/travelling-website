"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return null;
}

// hey!
/*
You can use:

1. fade => in all directions | fade+upORdown => for left and right.
2. flip => in all directions
3. zoom-in or zoom-out => in all directions
 */
