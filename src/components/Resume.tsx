import React from 'react';
import { Header } from './sections/Header';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { AdditionalTechnicalExperience } from './sections/AdditionalTechnicalExperience';
import { Research } from './sections/Research';
import { Hackathons } from './sections/Hackathons';
import { AndroidDev } from './sections/AndroidDev';
import { theme } from '../theme/colors';

export function Resume() {
  return (
    <div className={`w-full ${theme.bgMain}`}>
      <Header />
      <div className={`w-full mx-auto ${theme.textBody} py-6 px-4 sm:px-6`}>
        <div className="mb-6">
          <Skills />
        </div>
        <div className="mb-6">
          <Experience />
        </div>
        <div className="mb-6">
          <Projects />
        </div>
        <div className="mb-6">
          <Achievements />
        </div>
      </div>
      
      {/* Move AdditionalTechnicalExperience outside the padded container */}
      <AdditionalTechnicalExperience />
      
      <div className={`w-full mx-auto ${theme.textBody} py-6 px-4 sm:px-6`}>
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Hackathons />
            <AndroidDev />
          </div>
          <div>
            <Research />
          </div>
        </div>
        {/* Add extra space at the bottom to extend page height, adjust if 2nd page gets new stuff */}
        {/* 695 works for 60% a4 */}
        {/* 755 works for 81% a3 */}
        <div className="w-full" style={{ height: '755px' }}></div>
      </div>
    </div>
  );
}