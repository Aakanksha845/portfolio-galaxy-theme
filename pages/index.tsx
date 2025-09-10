"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "../src/Components/SplashScreen";
import Hero from "../src/Components/FirstPage";
import Layout from "../src/Layout.tsx/Layout";
import Experience from "../src/Components/Experience";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* Main Content with Fade Transition */}
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onFinish={() => setShowSplash(false)} />
        ) : (
          <Layout key="main">
            <Hero />
          </Layout>
        )}
      </AnimatePresence>
    </>
  );
}
