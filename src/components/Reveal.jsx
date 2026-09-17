import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

const Reveal = ({
  children,
  as = "div",
  delay = 0,
  y = 28,
  duration = 0.8,
  className = "",
  ...props
}) => {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: EASE }}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
