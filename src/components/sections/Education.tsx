import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { theme } from '../../theme/colors';

export function Education() {
  return <div>
      <SectionTitle>Education</SectionTitle>
      <div className="mt-3">
        <div className={`${theme.bgCard} p-3 rounded`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`${theme.textBody} font-semibold`}>
                C.V. Raman Global University
              </h3>
              <p className={`text-sm ${theme.textMuted}`}>B.Tech in CS & IT</p>
              <p className={`text-xs ${theme.textSubtle}`}>Bhubaneshwar, Odisha</p>
            </div>
            <div className="text-right">
              <span className={`${theme.brandPrimary} text-sm`}>06/2024</span>
              <div className={`${theme.bgBrandPrimary} ${theme.textBlack} text-xs px-2 py-0.5 rounded mt-1 font-medium`}>
                CGPA: 8.5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}