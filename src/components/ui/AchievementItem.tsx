import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';
import { theme } from '../../theme/colors';

interface Link {
  text: string;
  url: string;
}
interface AchievementItemProps {
  title: string;
  date: string;
  description?: string;
  points?: string[];
  links?: Link[];
}
export function AchievementItem({
  title,
  date,
  description,
  points,
  links
}: AchievementItemProps) {
  return <div className={`pl-2 border-l-2 ${theme.uiBorderAccent}`}>
      <div className="ml-4">
        <div className="flex justify-between items-center">
          <h3 className={`text-lg font-semibold ${theme.uiTextPrimary}`}>{title}</h3>
          <span className={`${theme.uiBrandPrimary} font-medium`}>{date}</span>
        </div>
        {description && <p className={`${theme.uiTextTertiary} text-sm mt-1`}>{description}</p>}
        {points && points.length > 0 && <ul className="list-disc pl-5 space-y-1.5 mt-2">
            {points.map((point, index) => <li key={index} className={`${theme.uiTextTertiary} text-sm`}>
                {point}
              </li>)}
          </ul>}
        {links && links.length > 0 && <div className="flex flex-wrap gap-2 mt-2">
            {links.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-xs ${theme.uiBgPrimary} ${theme.uiTextSecondary} hover:${theme.uiBgHover} hover:${theme.uiBrandSecondary} px-2 py-1 rounded transition-colors`}>
                <ExternalLinkIcon size={12} className="mr-1" />
                {link.text}
              </a>)}
          </div>}
      </div>
    </div>;
}