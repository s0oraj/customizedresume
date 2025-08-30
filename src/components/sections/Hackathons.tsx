import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon } from 'lucide-react';
import { theme } from '../../theme/colors';

export function Hackathons() {
  return (
    <div>
      <SectionTitle>Hackathons</SectionTitle>
      <div className={`${theme.bgCard} ${theme.cardShadow} hover:${theme.cardShadowHover} transition-shadow p-4 rounded mt-3`}>
        <div className="mb-2">
          <div className="flex justify-between items-start">
            <h3 className={`text-lg ${theme.textBody} font-semibold`}>
              NLP Regression: Amazon Product Length Prediction
            </h3>
            <a href="https://www.kaggle.com/code/umitsahoo/nlp-with-regression" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-sm ${theme.bgSubtle} hover:${theme.bgHover} ${theme.textSecondary} px-1.5 py-0.5 rounded`}>
              <ExternalLinkIcon size={14} className={`mr-1 ${theme.brandPrimary}`} />
              View Project
            </a>
          </div>
          <p className={`${theme.brandPrimary} italic mt-1`}>
            Natural Language Processing, Regression Analysis, Python, Keras
          </p>
        </div>
        <ul className="space-y-1">
          <li className={`flex items-start text-lg ${theme.textMuted}`}>
            <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
            <span>
              Formulated an{' '}
              <span className={`font-semibold ${theme.brandPrimary}`}>NLP model</span>{' '}
              using{' '}
              <span className={`font-semibold ${theme.brandPrimary}`}>TensorFlow</span>{' '}
              and{' '}
              <span className={`font-semibold ${theme.brandPrimary}`}>
                Keras regression
              </span>{' '}
              with <span className={`font-semibold ${theme.brandPrimary}`}>ReLU</span>{' '}
              activation to predict product length on{' '}
              <span className={`font-semibold ${theme.brandPrimary}`}>
                regression analysis
              </span>{' '}
              on Amazon dataset of{' '}
              <span className={`font-semibold ${theme.brandPrimary}`}>
                2.2 million products
              </span>{' '}
              to enhance packaging and customer satisfaction.
            </span>
          </li>
          <li className={`flex items-start text-lg ${theme.textMuted}`}>
            <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
            <span>
              Optimized{' '}
              <span className={`font-semibold ${theme.brandPrimary}`}>
                text vectorization
              </span>{' '}
              (vocab size:{' '}
              <span className={`font-semibold ${theme.brandPrimary}`}>10,000</span>, max
              sequence length: 200 tokens) achieved excellent training loss:{' '}
              <span className={`font-semibold ${theme.brandPrimary}`}>0.38121589</span>{' '}
              and validation loss:{' '}
              <span className={`font-semibold ${theme.brandPrimary}`}>0.31848289</span>.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}