'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function VoicifyProject() {
  return (
    <main className="project-detail-main min-h-screen overflow-x-hidden">
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
                Voicify - Voice-Assisted AI Assistant
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Speech Recognition</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">DialoGPT</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">pyttsx3</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Local AI</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
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
                Voicify is a Python-based voice assistant that uses speech recognition and a local language model to provide intelligent responses and perform various tasks. It runs entirely on your machine without requiring any external API calls.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Voice input and output</li>
                <li>Local AI-powered responses using DialoGPT-medium</li>
                <li>No internet connection required after initial setup</li>
                <li>Modular and extensible architecture</li>
                <li>Easy to configure and customize</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Installation</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Clone this repository</li>
                <li>Install the required dependencies: <code>pip install -r requirements.txt</code></li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Usage</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Run the main application: <code>python -m src.main</code></li>
                <li>The first time you run the application, it will download the language model (approx. 1.5GB, one-time process).</li>
              </ul>
              <div className="mt-2">
                <span className="font-semibold text-gray-200">Available Commands:</span>
                <ul className="list-disc list-inside ml-6 text-gray-300">
                  <li><code>voicify help</code>: Show available commands</li>
                  <li><code>voicify exit</code>: Exit the application</li>
                  <li><code>voicify clear</code>: Clear the screen</li>
                </ul>
              </div>
              <div className="mt-2">
                <span className="font-semibold text-gray-200">Example Interactions:</span>
                <ul className="list-disc list-inside ml-6 text-gray-300">
                  <li>&quot;Hello, how are you?&quot;</li>
                  <li>&quot;What can you do?&quot;</li>
                  <li>&quot;Tell me about yourself&quot;</li>
                  <li>Any other questions or statements</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Structure</h2>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`voicify/
├── src/
│   ├── main.py
│   ├── speech/
│   │   ├── __init__.py
│   │   ├── recognizer.py
│   │   └── synthesizer.py
│   ├── ai/
│   │   ├── __init__.py
│   │   └── processor.py
│   ├── commands/
│   │   ├── __init__.py
│   │   └── handler.py
│   └── config/
│       ├── __init__.py
│       └── settings.py
├── requirements.txt
└── README.md`}
                </pre>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Details & Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Uses Microsoft's DialoGPT-medium model for natural language processing</li>
                <li>Speech recognition powered by Google's Speech Recognition</li>
                <li>Text-to-speech using pyttsx3</li>
                <li>Runs entirely locally after initial model download</li>
                <li>Python 3.7+ required</li>
                <li>Microphone for voice input, speakers for output</li>
                <li>~2GB free disk space for the language model</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 