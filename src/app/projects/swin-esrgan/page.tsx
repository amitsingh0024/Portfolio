'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';

export default function SwinESRGANProject() {
  return (
    <main className="project-detail-main min-h-screen bg-black text-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white-400 hover:text-white transition-colors mb-8"
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
                Swin-ESRGAN Image Enhancement
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">PyTorch</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">TensorBoard</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Swin Transformer</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">ESRGAN</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">GAN</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Deep Learning</span>
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
                Swin-ESRGAN is an advanced image enhancement model that combines the strengths of ESRGAN and Swin Transformers
                to achieve superior super-resolution results. This project represents a significant advancement in the field
                of image processing and enhancement, with a focus on preserving details and reducing artifacts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>High-quality image upscaling with detail preservation</li>
                <li>Support for various input image formats</li>
                <li>Quality metrics calculation (PSNR and SSIM)</li>
                <li>Easy-to-use visualization tools</li>
                <li>GPU acceleration support through CUDA</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>
              <div className="bg-blue-500 p-4 rounded-lg mb-4 overflow-x-auto">
                <pre className="text-sm text-white-300 whitespace-pre-wrap">
                  Input (Low-Resolution Image)
                         |
                         v
                  Swin Transformer Feature Extractor
                         |
                         v
                  Feature Map Output (rich in global and local context)
                         |
                         v
                  Custom Generator (refinement and upsampling) → High-Resolution Image
                         |
                         v
                  Discriminator (adversarial training)
                </pre>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The model architecture combines the transformer-based feature extraction of Swin Transformers with the
                generative capabilities of ESRGAN. This hybrid approach allows for better feature understanding and
                more accurate image reconstruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Loss Functions</h2>
              <div className="space-y-4">
                <div className="bg-blue-500 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Pixel Loss (L1/L2)</h3>
                  <p className="text-white-300">Ensures pixel-level similarity between generated and real images</p>
                </div>
                <div className="bg-blue-500 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Perceptual Loss</h3>
                  <p className="text-white-300">Computes similarity between feature representations using VGG network</p>
                </div>
                <div className="bg-blue-500 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Adversarial Loss</h3>
                  <p className="text-white-300">Helps generate more realistic images through GAN training</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Image/Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Project Structure</h3>
              <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                  my-model/
                  ├── data/               # Input/output images
                  ├── models/            # Model architecture
                  ├── tests/             # Test scripts
                  ├── utils/             # Utility functions
                  ├── training/          # Training scripts
                  ├── losses/            # Loss functions
                  └── config/            # Configuration files
                </pre>
              </div>
            </div>

            <div className="bg-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Results & Metrics</h3>
              <p className="text-white-300 mb-4">
                The model achieved significant improvements in image quality compared to traditional ESRGAN models,
                particularly in preserving fine details and textures.
              </p>
              <div className="space-y-2 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-white-300">PSNR (Peak Signal-to-Noise Ratio)</span>
                  <span className="text-white-400">&gt; 27 dB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white-300">SSIM (Structural Similarity Index)</span>
                  <span className="text-white-400">&gt; 0.9</span>
                </div>
              </div>
              {/* Metrics Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <img src="/images/swin-esrgan/train_g_loss_loss.png" alt="Generator Loss Curve" className="img-zoom rounded-lg mb-2 max-h-64 object-contain bg-gray-800 p-2" />
                  <span className="text-white-400 text-sm">Generator Loss During Training</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/images/swin-esrgan/train_d_loss_loss.png" alt="Discriminator Loss Curve" className="img-zoom rounded-lg mb-2 max-h-64 object-contain bg-gray-800 p-2" />
                  <span className="text-white-400 text-sm">Discriminator Loss During Training</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/images/swin-esrgan/val_PSNR.png" alt="PSNR Curve" className="img-zoom rounded-lg mb-2 max-h-64 object-contain bg-gray-800 p-2" />
                  <span className="text-white-400 text-sm">PSNR (Peak Signal-to-Noise Ratio) Over Epochs</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/images/swin-esrgan/val_SSIM.png" alt="SSIM Curve" className="img-zoom rounded-lg mb-2 max-h-64 object-contain bg-gray-800 p-2" />
                  <span className="text-white-400 text-sm">SSIM (Structural Similarity Index) Over Epochs</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Research Publication</h3>
              <p className="text-white-300">
                This research was presented at the ICRTICC Conference in February 2025, showcasing the innovative
                approach and significant improvements in image enhancement technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 