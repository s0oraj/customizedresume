import React from 'react';
import { theme } from '../../theme/colors';

interface SkillBadgeProps {
  skill: string;
}
export function SkillBadge({
  skill
}: SkillBadgeProps) {
  return <span className={`${theme.uiBgPrimary} ${theme.uiTextPrimary} px-3 py-1 rounded-full text-sm hover:${theme.uiBgHover} hover:${theme.uiBrandTertiary} transition-colors cursor-default`}>
      {skill}
    </span>;
}