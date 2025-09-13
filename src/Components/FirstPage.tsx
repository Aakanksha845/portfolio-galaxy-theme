"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const profilePhoto = "/images/aakanksha.jpg";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const texts = ["Fullstack Developer", "Frontend Developer", "Web Developer"];

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    let timeout: any;

    if (isTyping) {
      if (charIndex < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deleteSpeed);
      } else {
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, currentTextIndex, texts]);

  return (
    <div className="about-page">
      <motion.section
        className="photo-section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
      >
        <div className="profile-photo">
          <Image
            src={profilePhoto}
            alt="profile"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
        <div className="heading">
          <h1>
            <span>Hi There</span> <br />
            I’m <span className="hero-heading">Aakanksha N</span>
          </h1>
        </div>
        <div className="typing-container">
          <span className="typing-text">
            {currentText}
            <span className="cursor">|</span>
          </span>
        </div>
        <div className="badges">
          <div className="glowing-badge">SDE-1 at Coffee Beans</div>
          <div className="glowing-badge">Former Intern at Nokia Solutions</div>
          <div className="glowing-badge">CSE Graduate from RNSIT</div>
        </div>
        <button className="resume-button">Download Resume</button>
      </motion.section>
      <motion.section
        className="about-me-section"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8, delay: 0.9, ease: "easeOut" }}
      >
        <h2>About Me</h2>
        <p>
          From the very beginning of my journey at RNS Institute of Technology,
          I was fascinated by the world of technology and problem-solving. My
          academic years, where I graduated with an 8.9 CGPA, were filled with
          projects that pushed me to explore software development beyond
          textbooks. Along the way, I built a strong foundation in programming
          and design, while also honing my skills in frontend and fullstack
          development. My first professional experience came with an internship
          at Nokia Solutions and Networks, where I spent 10 months working on
          real-world projects, gaining hands-on exposure to automated testing
          using Playwright and Cucumber, and collaborating within a global tech
          environment.
        </p>
        <p>
          Today, I am working as a Fullstack Developer at CoffeeBeans, where I
          craft scalable, high-quality applications using React, TypeScript,
          GraphQL, and modern testing frameworks like Jest. What excites me most
          is building user-centric solutions that merge performance, design, and
          innovation—especially when exploring the intersection of frontend
          development and AI-powered applications. Whether it’s creating
          seamless user experiences or architecting robust systems, I’m driven
          by a deep passion for continuous learning and delivering impact
          through code.
        </p>

        <div className="cta-buttons">
          <a href="#projects" className="cta-btn primary">
            View Projects
          </a>
          <a href="#contact" className="cta-btn secondary">
            Contact Me
          </a>
        </div>
      </motion.section>
    </div>
  );
}
