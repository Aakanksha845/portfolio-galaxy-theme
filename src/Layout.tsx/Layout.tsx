"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="layout-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
    >
      {/* Star Background Container */}
      <div className="splash-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      {/* Foreground content */}
      <motion.div
        id="title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.01, ease: "easeOut" }}
      >
        <main className="layout-content">
          {children}
          {/* Footer appears at the very end */}
          {/* <Footer /> */}
          {/* Fixed Navbar stays visible */}
          <Navbar />
        </main>
      </motion.div>
    </motion.div>
  );
}
