"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 400); // Match transition duration
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-400">
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.20, 1],
          }}
          className="flex-grow w-full overflow-x-hidden"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
