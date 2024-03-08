import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  initialOpacity?: number;
  finalOpacity?: number;
  initialY?: number;
  finalY?: number;
  initialX?: number;
  finalX?: number;
  transform?: string;
};

export default function Reveal({
  children,
  delay,
  duration,
  initialOpacity,
  finalOpacity,
  initialY,
  finalY,
  initialX,
  finalX,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const variants = {
    hidden: { opacity: initialOpacity, y: initialY, x: initialX },
    visible: {
      opacity: finalOpacity,
      y: finalY,
      x: finalX,
      transition: {
        duration: duration,
        ease: "linear",
        delay: delay,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mainControls}
    >
      {children}
    </motion.div>
  );
}
