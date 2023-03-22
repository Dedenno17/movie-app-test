import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  isVisible: boolean;
}

const Welcome: React.FC<Props> = ({ isVisible }) => {
  // state of hidden parent
  const [isHidden, setIsHidden] = useState<boolean>(false);

  // parent will be hidden a sec after visible is false but delayed one sec
  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => {
        setIsHidden(true);
      }, 1000);
    }
  }, [isVisible]);

  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-center items-center ${
        isHidden && 'hidden'
      }`}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.h2
            className="text-6xl text-center text-primaryRed font-[500] lg:text-[5rem] xl:text-[6rem] mb-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            exit={{ opacity: 0, y: -20 }}
          >
            WELCOME TO
          </motion.h2>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isVisible && (
          <motion.h1
            className="text-[4rem] text-center text-primaryRed font-[900] lg:text-[5.5rem] xl:text-[6.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            exit={{ opacity: 0 }}
          >
            FELIX
          </motion.h1>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isVisible && (
          <motion.p
            className="text-lg text-primaryGrey text-center font-[300] lg:text-2xl xl:text-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            exit={{ opacity: 0 }}
          >
            Choose your favorite show in Search input <br /> column up there!
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(Welcome);
