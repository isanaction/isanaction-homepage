// import "./styles.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../lib/useFollowPointer";

export default function FollowPointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      whileHover={{ scale: 5 }}
      whileTap={{ x: 200 }}
      initial={{ scale: 2 }}
      transition={{
        type: "spring",
        damping: 19,
        stiffness: 50,
        restDelta: 0.001
      }}
    >🐈</motion.div>
  );
}
