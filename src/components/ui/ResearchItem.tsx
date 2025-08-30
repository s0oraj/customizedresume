import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { theme } from '../../theme/colors';

interface ResearchItemProps {
  title: string;
  link: string;
  repo: string;
  technologies: string;
  points: string[];
}
export function ResearchItem({
  title,
  link,
  repo,
  technologies,
  points
}: ResearchItemProps) {
  return <div className={`pl-2 border-l-2 ${theme.uiBorderAccent}`}>
      <div className="ml-4">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className={`text-lg font-semibold ${theme.uiTextPrimary}`}>{title}</h3>
          <div className="flex gap-2">
            <a href={link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-xs ${theme.uiBgPrimary} ${theme.uiTextSecondary} hover:${theme.uiBgHover} hover:${theme.uiBrandSecondary} px-2 py-1 rounded transition-colors`}>
              <ExternalLinkIcon size={12} className="mr-1" />
              Paper
            </a>
            <a href={repo} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-xs ${theme.uiBgPrimary} ${theme.uiTextSecondary} hover:${theme.uiBgHover} hover:${theme.uiBrandSecondary} px-2 py-1 rounded transition-colors`}>
              <GithubIcon size={12} className="mr-1" />
              Repo
            </a>
          </div>
        </div>
        <div className={`mb-3 text-sm ${theme.uiBrandPrimary} font-medium`}>
          {technologies}
        </div>
        <ul className="list-disc pl-5 space-y-1.5">
          {points.map((point, index) => <li key={index} className={`${theme.uiTextTertiary} text-sm`}>
              {point}
            </li>)}
        </ul>
      </div>
    </div>;
}