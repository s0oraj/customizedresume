import React from 'react';
import { AtSignIcon, GithubIcon, LinkedinIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { theme } from '../../theme/colors';


/*
=== LOGO PADDING SYSTEM DOCUMENTATION ===

**PURPOSE**: Automatically handle logo visibility across different company brand colors

**FILENAME CONVENTION**:
- DEFAULT (with padding): "company-logo.ext" → adds p-1 padding with white background
- EXCEPTION (no padding): "company-logo-nopadding.ext" → white background only, no padding

**WHEN TO USE "-nopadding"**:
- Logo already has built-in margins/boundaries (e.g., Amazon logo has white border)
- Logo is designed with sufficient internal spacing
- Adding padding creates unwanted white border effect

**WHEN TO USE DEFAULT (padding)**:
- Logo text/graphics touch the image edges (e.g., Cohesity, Netflix)
- Logo needs protection from colored banner backgrounds
- Logo appears cramped without breathing room

**TECHNICAL DETAILS**:
- Default padding: p-1 (4px) - sufficient for small header logos
- Background: Always white to ensure visibility on any banner color
- Border radius: rounded for professional appearance

**EXAMPLES**:
- cohesity-logo.png → gets p-1 padding (text touches edges)
- amazon-logo-nopadding.png → no padding (has built-in spacing)
- netflix-logo.svg → gets p-1 padding (text at edges)
- google-logo-nopadding.jpg → no padding (if has boundaries)

**RESULT**: Each company logo appears professionally integrated without looking templated
*/

export function Header() {
// Centralized logo configuration with automatic padding detection
  const logoSrc = "/netflix.webp";  // Single source of truth - change this for different companies

  // Auto-detect padding needs from filename
  const hasNoPadding = logoSrc.includes("-nopadding");
  const paddingClass = hasNoPadding ? '' : 'p-1';  // Default: add padding, Exception: remove if "-nopadding" in filename

  return (
    <div className={`${theme.bgMain2} p-6 mb-6 ${theme.cardShadow}`}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center">
          {/* Company Logo */}
          <div className="mr-4 flex items-center">
            <div className={`bg-white ${paddingClass} rounded flex items-center justify-center`}>
              <img src={logoSrc} alt="Company Logo" className="max-h-10 max-w-24 object-contain" 
              style={{ height: 'auto', width: 'auto' }}
              />
            </div>
          </div>
          <h1 className={`text-3xl font-bold ${theme.textHeading} uppercase tracking-wider`}>
            SURAJ SINGH
          </h1>
        </div>
        <div className={`${theme.bgBrandPrimary} ${theme.buttonTextColor} px-3 py-1 rounded font-medium text-sm mt-2 md:mt-0`}>
          SDE Application
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* Contact Information Column */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <div className={`flex items-center gap-2 ${theme.textHeaderSecondary}`}>
              <PhoneIcon size={14} className={theme.brandSecondary} />
              <span>+91 8766039312</span>
            </div>
            <div className={`flex items-center gap-2 ${theme.textHeaderSecondary}`}>
              <AtSignIcon size={14} className={theme.brandSecondary} />
              <span>hotmailsuraj@gmail.com</span>
            </div>
            <div className={`flex items-center gap-2 ${theme.textHeaderSecondary}`}>
              <MapPinIcon size={14} className={theme.brandSecondary} />
              <span>Hyderabad, India</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <div className={`flex items-center gap-2 ${theme.textHeaderSecondary}`}>
              <LinkedinIcon size={14} className={theme.brandSecondary} />
              <a href="https://linkedin.com/in/s0oraj" target="_blank" rel="noopener noreferrer" className={`hover:${theme.brandSecondary} transition-colors`}>
                linkedin.com/in/s0oraj
              </a>
            </div>
            <div className={`flex items-center gap-2 ${theme.textHeaderSecondary}`}>
              <GithubIcon size={14} className={theme.brandSecondary} />
              <a href="https://github.com/s0oraj" target="_blank" rel="noopener noreferrer" className={`hover:${theme.brandSecondary} transition-colors`}>
                github.com/s0oraj
              </a>
            </div>
            <div className={`flex items-center gap-2 ${theme.textHeaderSecondary}`}>
              <svg className={`w-3.5 h-3.5 ${theme.brandSecondary}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.111.744 1.715.744.603 0 1.213-.229 1.714-.744.513-.513.744-1.111.744-1.714 0-.631-.244-1.229-.72-1.714l-2.733-2.637c-.841-.841-1.8-1.412-2.849-1.729-1.1-.331-2.264-.331-3.363 0-1.05.317-2.021.888-2.849 1.729l-4.319 4.402c-.841.84-1.412 1.8-1.729 2.849-.316 1.1-.316 2.264 0 3.363.317 1.049.888 2.009 1.729 2.849l4.332 4.332c.841.841 1.8 1.412 2.849 1.729 1.1.331 2.264.331 3.363 0 1.05-.317 2.021-.888 2.849-1.729l2.733-2.637c.476-.485.72-1.083.72-1.714 0-.603-.244-1.202-.72-1.714-.513-.514-1.111-.744-1.714-.744-.604.013-1.19.231-1.715.744z" />
              </svg>
              <a href="https://leetcode.com/s0oraj" target="_blank" rel="noopener noreferrer" className={`hover:${theme.brandSecondary} transition-colors`}>
                leetcode.com/s0oraj
              </a>
            </div>
          </div>
        </div>

        {/* Education Column */}
        <div className={`${theme.bgCard} p-3 rounded ${theme.cardShadow}`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`${theme.textBody} font-semibold`}>
                C.V. Raman Global University
              </h3>
              <div className="flex items-center gap-3">
                <p className={`text-sm ${theme.textMuted}`}>B.Tech in CS & IT</p>
                <div className={`${theme.bgBrandPrimary} ${theme.buttonTextColor} text-xs px-2 py-0.5 rounded font-medium`}>
                  CGPA: 8.5
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className={`${theme.textMuted} text-sm`}>06/2024</span>
              <div className={`flex items-center text-sm ${theme.textMuted} mt-1`}>
                <MapPinIcon size={12} className="mr-1" />
                <span>Bhubaneshwar, Odisha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}