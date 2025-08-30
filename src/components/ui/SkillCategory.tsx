import React from 'react';
import { SkillBadge } from './SkillBadge';
import { theme } from '../../theme/colors';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}
export function SkillCategory({
  title,
  skills
}: SkillCategoryProps) {
  return <div>
      <h3 className={`text-md font-semibold ${theme.uiTextSecondary} mb-2`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => <SkillBadge key={index} skill={skill} />)}
      </div>
    </div>;
}