import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

const useCountUp = (target, { duration = 1.8 } = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target, duration]);

  return { ref, value };
};

export default useCountUp;
