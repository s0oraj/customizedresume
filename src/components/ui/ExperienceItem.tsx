import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { theme } from '../../theme/colors';

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  location: string;
  points: string[];
}
export function ExperienceItem({
  company,
  position,
  period,
  location,
  points
}: ExperienceItemProps) {
  return <div className={`pl-2 border-l-2 ${theme.uiBorderAccent}`}>
      <div className="ml-4">
        <div className="flex justify-between items-center">
          <h3 className={`text-lg font-semibold ${theme.uiTextPrimary}`}>{company}</h3>
          <span className={`${theme.uiBrandPrimary} font-medium`}>{period}</span>
        </div>
        <p className={`${theme.uiTextSecondary} font-medium`}>{position}</p>
        <div className={`flex items-center ${theme.uiTextMuted} mb-3`}>
          <MapPinIcon size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        <ul className="list-disc pl-5 space-y-1.5">
          {points.map((point, index) => <li key={index} className={`${theme.uiTextTertiary} text-sm`}>
              {point}
            </li>)}
        </ul>
      </div>
    </div>;
}