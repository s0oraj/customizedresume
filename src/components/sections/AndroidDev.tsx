import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { theme } from '../../theme/colors';

export function AndroidDev() {
  return (
    <div>
      <SectionTitle>Android Development</SectionTitle>
      <div className="space-y-4 mt-3">
        <div className={`${theme.bgCard} ${theme.cardShadow} hover:${theme.cardShadowHover} transition-shadow p-4 rounded`}>
          <div className="flex justify-between items-start">
            <h3 className={`text-lg ${theme.textBody} font-semibold`}>
              Animus - Cryptography Based Social Media App
            </h3>
            <div className="flex gap-1">
              <a href="https://github.com/s0oraj/Animus" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-sm ${theme.bgSubtle} hover:${theme.bgHover} ${theme.textSecondary} px-1.5 py-0.5 rounded`}>
                <ExternalLinkIcon size={14} className={`mr-1 ${theme.brandPrimary}`} />
                Demo
              </a>
              <a href="https://github.com/s0oraj/animus" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-sm ${theme.bgSubtle} hover:${theme.bgHover} ${theme.textSecondary} px-1.5 py-0.5 rounded`}>
                <GithubIcon size={14} className={`mr-1 ${theme.brandPrimary}`} />
                Repo
              </a>
            </div>
          </div>
          <p className={`${theme.brandPrimary} italic mt-1 mb-2`}>
            Android Studio, Java, OpenCV, E2EE, AES, Alan-AI
          </p>
          <ul className="space-y-1">
            <li className={`flex items-start text-lg ${theme.textMuted}`}>
              <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
              <span>
                Utilized{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  Advanced Encryption Standard (AES)
                </span>{' '}
                algorithm to make chats{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  End-to-End Encrypted (E2EE)
                </span>
                .
              </span>
            </li>
            <li className={`flex items-start text-lg ${theme.textMuted}`}>
              <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
              <span>
                Pioneered an in-app{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  AI Voice Assistant
                </span>{' '}
                allowing users to navigate the app using voice commands, via{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>Alan-AI</span>.
              </span>
            </li>
            <li className={`flex items-start text-lg ${theme.textMuted}`}>
              <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
              <span>
                Created{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  Avatar Creator
                </span>{' '}
                using{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  Google ML Kit
                </span>{' '}
                and <span className={`font-semibold ${theme.brandPrimary}`}>OpenCV</span>{' '}
                for{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  image segmentation
                </span>{' '}
                and cartoonization.
              </span>
            </li>
          </ul>
        </div>

        <div className={`${theme.bgCard} ${theme.cardShadow} hover:${theme.cardShadowHover} transition-shadow p-4 rounded`}>
          <div className="flex justify-between items-start">
            <h3 className={`text-lg ${theme.textBody} font-semibold`}>
              SangeetAI - Emotion-Based Music Recommender
            </h3>
            <div className="flex gap-1">
              <a href="https://github.com/s0oraj/SangeetAI" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-sm ${theme.bgSubtle} hover:${theme.bgHover} ${theme.textSecondary} px-1.5 py-0.5 rounded`}>
                <ExternalLinkIcon size={14} className={`mr-1 ${theme.brandPrimary}`} />
                View
              </a>
              <a href="https://github.com/s0oraj/SangeetAI" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-sm ${theme.bgSubtle} hover:${theme.bgHover} ${theme.textSecondary} px-1.5 py-0.5 rounded`}>
                <GithubIcon size={14} className={`mr-1 ${theme.brandPrimary}`} />
                Repo
              </a>
            </div>
          </div>
          <p className={`${theme.brandPrimary} italic mt-1 mb-2`}>
            Python, TensorFlow Lite, VGG19, Android Java
          </p>
          <ul className="space-y-1">
            <li className={`flex items-start text-lg ${theme.textMuted}`}>
              <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
              <span>
                Built{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  VGG19 CNN model
                </span>{' '}
                with transfer learning on{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  35K+ FER2013 images
                </span>{' '}
                for 7-class emotion detection, achieving optimized mobile
                inference through{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  TensorFlow Lite conversion
                </span>
                .
              </span>
            </li>
            <li className={`flex items-start text-lg ${theme.textMuted}`}>
              <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
              <span>
                Implemented complete ML pipeline from{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>Kaggle API</span>{' '}
                to Android deployment with augmentation (rotation/flip),
                normalization, and{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  Adam optimizer with early stopping
                </span>
                .
              </span>
            </li>
            <li className={`flex items-start text-lg ${theme.textMuted}`}>
              <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
              <span>
                Developed Android app using{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>CameraView</span>{' '}
                and{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>JCPlayer</span>{' '}
                for real-time emotion-based music recommendations.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}