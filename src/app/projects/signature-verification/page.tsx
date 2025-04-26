'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function SignatureVerificationProject() {
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
                Signature Verification System
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Deep Learning</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">CNN</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Siamese Network</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">ResNet18</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">TensorBoard</span>
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
                A deep learning-based system for verifying handwritten signatures using Siamese Networks. This project uses a pre-trained ResNet18 backbone to learn signature embeddings and verify if two signatures belong to the same person.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Siamese Network architecture with ResNet18 backbone</li>
                <li>Signature embedding generation</li>
                <li>Signature pair verification</li>
                <li>Performance metrics and reporting</li>
                <li>TensorBoard integration for training visualization</li>
                <li>Comprehensive model evaluation</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Python 3.8+</li>
                <li>PyTorch, torchvision, pandas, pillow, tensorboard, tqdm</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Installation</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Clone or download this repository</li>
                <li>Install the required packages: <code>pip install torch torchvision pandas pillow tensorboard tqdm</code></li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Structure</h2>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`.
├── config/
│   └── config.py          # Configuration settings
├── dataset/
│   └── sign_data/         # Signature dataset
├── models/
│   └── siamese_network.py # Model architecture
├── scripts/
│   ├── generate_model_report.py  # Generate model report
│   ├── launch_tensorboard.py     # Launch TensorBoard
│   └── test_model.py             # Test model performance
└── reports/               # Generated reports`}
                </pre>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Usage</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Train the model: <code>python scripts/train.py</code></li>
                <li>Test a single signature pair: <code>python scripts/test_model.py --mode single --person_id 049</code></li>
                <li>Test the entire dataset: <code>python scripts/test_model.py --mode full</code></li>
                <li>Generate model report: <code>python scripts/generate_model_report.py</code></li>
                <li>View training logs: <code>python scripts/launch_tensorboard.py</code> (then open http://localhost:6006)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Model Architecture</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Siamese Network with pre-trained ResNet18 backbone</li>
                <li>Custom embedding layer</li>
                <li>Contrastive loss function</li>
                <li>Margin-based similarity comparison</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Configuration</h2>
              <p className="text-gray-300 leading-relaxed">
                Key configuration parameters in <code>config/config.py</code>:
              </p>
              <ul className="list-disc list-inside ml-6 text-gray-300">
                <li>Model parameters (embedding size, margin)</li>
                <li>Training parameters (batch size, epochs, learning rate)</li>
                <li>Data paths</li>
                <li>Image preprocessing settings</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Performance Metrics</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Accuracy</li>
                <li>Precision</li>
                <li>Recall</li>
                <li>F1 Score</li>
                <li>Confusion Matrix</li>
                <li>Total test samples</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>If you encounter "Model file not found" errors: Make sure you've trained the model first and check the model path in config.py</li>
                <li>If TensorBoard doesn't show any data: Verify that training logs exist in the runs directory and check if the training script completed successfully</li>
                <li>If you get data loading errors: Verify your dataset structure matches the expected format and check the CSV file paths in config.py</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">License & Acknowledgments</h2>
              <p className="text-gray-300 leading-relaxed">
                This project is licensed under the MIT License. Thanks to the PyTorch team, dataset providers, and contributors to the open-source libraries used in this project.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 