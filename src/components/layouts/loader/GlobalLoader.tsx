"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Box, LinearProgress } from "@mui/material";

export default function GlobalLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600); // Duration of loader visible after route change

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: "left" }}
        >
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 2000,
            }}
          >
            <LinearProgress color="primary" />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
