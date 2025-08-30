import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon, MapPinIcon } from 'lucide-react';
import { theme } from '../../theme/colors';

export function Research() {
  return (
    <div>
      <SectionTitle>Research - Machine Learning</SectionTitle>
      <div className="space-y-4 mt-3">

        {/* Box 1: University and Role */}
        <div className={`${theme.bgCard} ${theme.cardShadow} hover:${theme.cardShadowHover} transition-shadow p-4 rounded`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-lg ${theme.textBody} font-semibold`}>
                C.V. Raman Global University
              </h3>
              <div className="flex justify-between items-center">
                <p className={`text-lg ${theme.textMuted}`}>Undergraduate Researcher</p>               
              </div>
            </div>
            <div className="text-right">
              <span className={`${theme.textMuted} text-sm`}>12/2022 - 06/2023</span>
              <div className={`flex items-center text-sm ${theme.textMuted} mt-1`}>
                <MapPinIcon size={12} className="mr-1" />
                <span>Bhubaneshwar, Odisha</span>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2: Glaucoma Project */}
        <div className={`${theme.bgCard} ${theme.cardShadow} hover:${theme.cardShadowHover} transition-shadow p-4 rounded`}>
          <div className="flex justify-between items-start">
            <h3 className={`text-lg ${theme.textBody} font-semibold`}>
              Early-Stage Glaucoma Detection
            </h3>
            <a href="https://github.com/s0oraj/Early_Stage_Glaucoma_Detection/tree/main" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-sm ${theme.bgSubtle} hover:${theme.bgHover} ${theme.textSecondary} px-1.5 py-0.5 rounded`}>
              <GithubIcon size={14} className={`mr-1 ${theme.brandPrimary}`} />
              Repo
            </a>
          </div>
          <p className={`${theme.brandPrimary} italic mt-1 mb-1`}>
            Machine Learning, CNN, Transfer Learning, Python
          </p>
          <ul className="space-y-1">
            <li className={`flex items-start text-lg ${theme.textMuted}`}>
              <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
              <span>
                Developing an{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  Extreme Learning Machine Model
                </span>{' '}
                with{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  Convolutional Neural Networks (CNN) and Transfer Learning
                </span>
                , achieving{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>96%</span>{' '}
                accuracy in vision preservation for early-stage glaucoma
                detection.
              </span>
            </li>
            <li className={`flex items-start text-lg ${theme.textMuted}`}>
              <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
              <span>
                Conducted research at{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  C.V. Raman Global University
                </span>{' '}
                as{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  Undergraduate Researcher
                </span>{' '}
                in Machine Learning department from{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  12/2022 -- 06/2023
                </span>
                .
              </span>
            </li>
          </ul>
        </div>

        {/* Box 3: Alzheimer's Project */}
        <div className={`${theme.bgCard} ${theme.cardShadow} hover:${theme.cardShadowHover} transition-shadow p-4 rounded`}>
          <div className="flex justify-between items-start">
            <h3 className={`text-lg ${theme.textBody} font-semibold`}>
              Alzheimer's Disease Diagnostic System
            </h3>
            <div className="flex gap-1">
              <a href="https://ieeexplore.ieee.org/document/10306481" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-sm ${theme.bgSubtle} hover:${theme.bgHover} ${theme.textSecondary} px-1.5 py-0.5 rounded`}>
                <ExternalLinkIcon size={14} className={`mr-1 ${theme.brandPrimary}`} />
                Paper
              </a>
              <a href="https://github.com/s0oraj/Alizhiemers_Detection_Transfer_Learning" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-sm ${theme.bgSubtle} hover:${theme.bgHover} ${theme.textSecondary} px-1.5 py-0.5 rounded`}>
                <GithubIcon size={14} className={`mr-1 ${theme.brandPrimary}`} />
                Repo
              </a>
            </div>
          </div>
          <p className={`${theme.brandPrimary} italic mt-1 mb-1`}>
            Image Processing, DWT, SWT, CLAHE, Python
          </p>
          <ul className="space-y-1">
            <li className={`flex items-start text-lg ${theme.textMuted}`}>
              <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
              <span>
                Employed{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  Advanced image preprocessing
                </span>{' '}
                techniques, including{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  Discrete Wavelet Transform (DWT)
                </span>
                ,{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  Stationary Wavelet Transform (SWT)
                </span>
                , and{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  Contrast Limited Adaptive Histogram Equalization (CLAHE)
                </span>{' '}
                for hippocampus-based analysis.
              </span>
            </li>
            <li className={`flex items-start text-lg ${theme.textMuted}`}>
              <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
              <span>
                Achieved{' '}
                <span className={`font-semibold ${theme.brandPrimary}`}>
                  98% accuracy
                </span>{' '}
                in Alzheimer's disease detection through optimized neural
                network architecture and preprocessing pipeline implementation.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}