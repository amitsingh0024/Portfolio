'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

export default function AIChatbotProject() {
  return (
    <main className="project-detail-main min-h-screen bg-black text-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <FaArrowLeft />
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="project-detail-header mb-8 md:mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600" style={{ color: '#000' }}>
                AI Chatbot
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">TensorFlow.js</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Socket.io</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">NLP</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="project-detail-content grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                A modern chatbot application built with React, Node.js, and TensorFlow.js that uses natural language processing to understand and respond to user messages.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Modern, responsive UI with smooth animations</li>
                <li>Real-time chat interface</li>
                <li>TensorFlow.js-powered natural language processing</li>
                <li>Intent classification and response generation</li>
                <li>Confidence scoring for responses</li>
                <li>Modular architecture for easy maintenance and scaling</li>
                <li>TypeScript for type safety</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Structure</h2>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`.
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # AI and other services
│   │   ├── types/       # TypeScript type definitions
│   │   └── ...          # Other frontend files
│   └── package.json     # Frontend dependencies
│
├── backend/           # Node.js backend server
│   ├── src/
│   │   └── server.ts   # Backend server code
│   └── package.json    # Backend dependencies
│
└── README.md          # This file`}
                </pre>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Installation & Usage</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Clone or download this repository</li>
                <li>Install frontend and backend dependencies with <code>npm install</code></li>
                <li>Start backend server: <code>npm run dev</code> (port 3001)</li>
                <li>Start frontend: <code>npm start</code> (port 3000)</li>
                <li>Open <code>http://localhost:3000</code> in your browser</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="mb-2">
                <span className="font-semibold text-gray-200">Frontend:</span>
                <ul className="list-disc list-inside ml-6 text-gray-300">
                  <li>React, TypeScript, TensorFlow.js, Universal Sentence Encoder</li>
                  <li>Framer Motion, Tailwind CSS, Socket.io-client</li>
                </ul>
              </div>
              <div>
                <span className="font-semibold text-gray-200">Backend:</span>
                <ul className="list-disc list-inside ml-6 text-gray-300">
                  <li>Node.js, Express, Socket.io, TypeScript</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Placeholder for future images or diagrams */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center justify-center min-h-[200px]">
              <Image 
                src="/images/ai-chatbot/ui-screenshot.png" 
                alt="Chatbot UI Example" 
                width={500}
                height={300}
                className="img-zoom rounded-lg mb-2 max-h-80 object-contain bg-gray-800 p-2" 
              />
              <span className="text-gray-400">Chatbot UI Example</span>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 