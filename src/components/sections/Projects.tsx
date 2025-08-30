import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { theme } from '../../theme/colors';

export function Projects() {
  const projects = [{
    title: 'Advanced Coding Interview Patterns (ACIP)',
    link: 'https://acip.vercel.app/',
    repo: 'https://github.com/s0oraj/acip',
    technologies: 'React, Vite, Three.js, Framer-motion-3D, Zustand',
    points: [`Built <span class="font-semibold ${theme.brandPrimary}">GPU-accelerated 3D galaxy UI</span> with Solar systems as individual Coding Roadmaps, <span class="font-semibold ${theme.brandPrimary}">500K stars at 60 FPS</span>, optimizing vertices with <span class="font-semibold ${theme.brandPrimary}">Three.js</span> buffers and <span class="font-semibold ${theme.brandPrimary}">Level of Detail (LOD)</span>`, `<span class="font-semibold ${theme.brandPrimary}">Algorithm Pattern Engine</span>: Implemented <span class="font-semibold ${theme.brandPrimary}">51 interactive step-by-step UX visualizations</span> for each algorithm pattern, demonstrating code execution through synchronized animations using <span class="font-semibold ${theme.brandPrimary}">framer-motion</span>`, `Devised Coding Roadmap's Minimap with <span class="font-semibold ${theme.brandPrimary}">2D/3D mode switching</span>, real-time dual-camera sync via <span class="font-semibold ${theme.brandPrimary}">3D graphics programming using quaternion-based camera transforms</span>, world-space frustum culling, & trigonometric FOV/2`]
  }, {
    title: 'ACIP Backend - Pattern Tracker',
    link: 'https://github.com/s0oraj/pattern-tracker',
    repo: 'https://github.com/s0oraj/pattern-tracker',
    technologies: 'Spring Boot, OAuth2, PostgreSQL, JPA/Hibernate, Maven',
    points: [`Built <span class="font-semibold ${theme.brandPrimary}">Spring Boot REST API</span> with <span class="font-semibold ${theme.brandPrimary}">Google OAuth2</span> and <span class="font-semibold ${theme.brandPrimary}">JWT authentication</span> for secure user sessions`, `Designed <span class="font-semibold ${theme.brandPrimary}">PostgreSQL database schema</span> with <span class="font-semibold ${theme.brandPrimary}">JPA/Hibernate ORM</span> and optimized query performance`, `Implemented <span class="font-semibold ${theme.brandPrimary}">question tracking system</span> with <span class="font-semibold ${theme.brandPrimary}">CRUD operations</span> across 220+ coding interview patterns`]
  }];

  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-4 mt-3">
        {projects.map((project, index) => (
          <div key={index} className={`${theme.bgCard} ${theme.cardShadow} hover:${theme.cardShadowHover} transition-shadow p-4 rounded`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`text-lg ${theme.textBody} font-semibold`}>
                  {project.title}
                  <span className={`${theme.brandPrimary} font-normal italic ml-2`}>
                    | {project.technologies}
                  </span>
                </h3>
              </div>
              <div className="flex gap-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-sm ${theme.bgSubtle} hover:${theme.bgHover} ${theme.textSecondary} px-1.5 py-0.5 rounded`}>
                  <ExternalLinkIcon size={14} className={`mr-1 ${theme.brandPrimary}`} />
                  View Project
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-sm ${theme.bgSubtle} hover:${theme.bgHover} ${theme.textSecondary} px-1.5 py-0.5 rounded`}>
                  <GithubIcon size={14} className={`mr-1 ${theme.brandPrimary}`} />
                  Source Code
                </a>
              </div>
            </div>
            <ul className="space-y-1 mt-3">
              {project.points.map((point, idx) => (
                <li key={idx} className={`flex items-start text-lg ${theme.textMuted}`}>
                  <span className={`${theme.brandPrimary} mr-2 mt-0.5`}>•</span>
                  <span dangerouslySetInnerHTML={{
                    __html: point
                  }}></span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}