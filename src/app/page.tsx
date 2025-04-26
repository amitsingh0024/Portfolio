'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="hero-section h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Amit Singh
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            AI & Software Developer | Machine Learning Enthusiast | Full Stack Developer
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/amit-singh-443684226/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:amit2584379@gmail.com"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about-section section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm Amit Singh, a passionate AI and software developer with a knack for building innovative solutions. 
              I love exploring new technologies, solving real-world problems, and collaborating on impactful projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Cards */}
            <motion.div
              className="project-card bg-gray-900 p-6 rounded-lg project-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">Swin-ESRGAN Image Enhancement</h3>
              <p className="text-gray-300 mb-4">
                Advanced GAN-based model combining Swin Transformers and ESRGAN for high-quality image super-resolution.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">PyTorch</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">TensorBoard</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Swin Transformer</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">ESRGAN</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">GAN</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Deep Learning</span>
              </div>
              <Link
                href="/projects/swin-esrgan"
                className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition-colors"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              className="project-card bg-gray-900 p-6 rounded-lg project-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">Voicify - Voice-Assisted AI Assistant</h3>
              <p className="text-gray-300 mb-4">
                Python-based voice assistant using speech recognition and local DialoGPT for offline, intelligent responses.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Speech Recognition</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">DialoGPT</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">pyttsx3</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Local AI</span>
              </div>
              <Link
                href="/projects/voicify"
                className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition-colors"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              className="project-card bg-gray-900 p-6 rounded-lg project-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">AI Chatbot</h3>
              <p className="text-gray-300 mb-4">
                A modern chatbot application built with React, Node.js, and TensorFlow.js that uses natural language processing to understand and respond to user messages.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">TensorFlow.js</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Socket.io</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">NLP</span>
              </div>
              <Link
                href="/projects/ai-chatbot"
                className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition-colors"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              className="project-card bg-gray-900 p-6 rounded-lg project-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">Signature Verification</h3>
              <p className="text-gray-300 mb-4">
                Deep learning project for verifying handwritten signatures using CNNs and computer vision techniques.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Deep Learning</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">CNN</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Siamese Network</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">ResNet18</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">TensorBoard</span>
              </div>
              <Link
                href="/projects/signature-verification"
                className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section flex flex-col items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="flex flex-col items-center gap-4">
              <a
                href="mailto:amit2584379@gmail.com"
                className="text-xl font-semibold text-[#222] hover:text-purple-400 transition-colors"
              >
                amit2584379@gmail.com
              </a>
              <p className="text-xl font-semibold text-[#222]">+91 8381859790</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
