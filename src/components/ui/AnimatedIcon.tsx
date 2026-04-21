import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

export default function AnimatedIcon({ icon: Icon, className, delay = 0 }: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 15,
        delay
      }}
      className="inline-flex items-center justify-center p-0.5"
    >
      <Icon className={className} />
    </motion.div>
  );
}
