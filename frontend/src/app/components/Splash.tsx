import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
            <TypeAnimation
                sequence={[
                1000,                  // wait 1s before starting
                'Kostub Kumar',       // type name
                500,                 // pause 1.5s
                () => onComplete(),   // then trigger exit
                ]}
                wrapper="h1"
                speed={50}
                cursor={true}
                repeat={0}
                className="text-9xl sm:text-9xl font-black text-white bg-clip-text bg-gradient-to-r from-white to-gray-300 font-['Dancing_Script']"
            />
    </motion.div>
  );
}