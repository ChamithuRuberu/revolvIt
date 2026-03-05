"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  // Routes that should NOT have the main Navbar and Footer
  const isPortalSection = pathname.startsWith('/portal') || pathname.startsWith('/login');

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
          className="flex flex-col min-h-screen w-full overflow-x-hidden"
        >
          {!isPortalSection && <Navbar />}
          <main className="flex-grow">
            {children}
          </main>
          {!isPortalSection && <Footer />}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
