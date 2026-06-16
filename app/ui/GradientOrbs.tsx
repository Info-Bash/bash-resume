import { motion } from "framer-motion";

export default function GradientOrbs () {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[700px] h-[700px] rounded-full -top-[200px] -right-[200px] blur-[40px]"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[600px] h-[600px] rounded-full -bottom-[100px] -left-[150px] blur-[40px]"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute w-[400px] h-[400px] rounded-full top-[40%] left-[40%] blur-[30px]"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)" }}
        />
      </div>
  );
}