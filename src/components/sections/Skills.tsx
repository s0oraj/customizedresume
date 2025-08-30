import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { theme } from '../../theme/colors';

export function Skills() {
  return <div>
      <SectionTitle>Technical Skills</SectionTitle>
      <div className={`${theme.bgCard} ${theme.cardShadow} p-4 rounded mt-3 space-y-2`}>
        <div>
          <span className={`${theme.brandPrimary} font-medium mr-2`}>
            Backend & Data Technologies:
          </span>
          <span className={theme.textSecondary}>
            Spring, Java, Python, Android Development, PostgreSQL, PySpark, SQL,
            Hive
          </span>
        </div>
        <div>
          <span className={`${theme.brandPrimary} font-medium mr-2`}>
            Frontend Development:
          </span>
          <span className={theme.textSecondary}>
            React.js, Three.js, Framer Motion 3D, Jetpack Compose, Javascript,
            XML
          </span>
        </div>
        <div>
          <span className={`${theme.brandPrimary} font-medium mr-2`}>
            Developer Tools:
          </span>
          <span className={theme.textSecondary}>
            Visual Studio Code, Android Studio, Docker, Postman, Git, Maven,
            IntelliJ IDEA
          </span>
        </div>
      </div>
    </div>;
}