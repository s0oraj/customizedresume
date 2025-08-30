import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { theme } from '../../theme/colors';

export function Experience() {
  const experiences = [{
    company: 'Wipro Technologies',
    position: 'Data Engineer L2 - Top 4 BFSI Client',
    period: '03/2025 - Present',
    location: 'Hyderabad',
    points: [`Building <span class="font-semibold ${theme.brandPrimary}">distributed systems</span> for processing <span class="font-semibold ${theme.brandPrimary}">multi-terabyte datasets</span> through <span class="font-semibold ${theme.brandPrimary}">Genesis DataMart</span>, handling data flows from PP files through NGL/DRI processes to holding layers`, `Optimizing PySpark <span class="font-semibold ${theme.brandPrimary}">Directed Acyclic Graph (DAG)</span> execution using <span class="font-semibold ${theme.brandPrimary}">topological sorting algorithms</span> for <span class="font-semibold ${theme.brandPrimary}">SUBGL processes</span> and <span class="font-semibold ${theme.brandPrimary}">backfeed mechanisms</span> with STR/SRU components`, `Implementing <span class="font-semibold ${theme.brandPrimary}">SQL/Hive partitioning strategies</span> for banking data across dual holding layers and BSS file processing`, `Processing <span class="font-semibold ${theme.brandPrimary}">multi-stream PP-SGL reconciliation</span> via <span class="font-semibold ${theme.brandPrimary}">BTEQ scripts</span> and <span class="font-semibold ${theme.brandPrimary}">STDDEF processes</span> with <span class="font-semibold ${theme.brandPrimary}">Teradata</span>`, `Developing <span class="font-semibold ${theme.brandPrimary}">pipelines</span> with <span class="font-semibold ${theme.brandPrimary}">checkpoint mechanisms</span> for downstream GLRS, IFRS9, Y9C, RUBY integration`]
  }, {
    company: 'Roboslog Pvt Ltd',
    position: 'Software Developer Intern (Java)',
    period: '06/2022 - 08/2022',
    location: 'Delhi, NCR',
    points: [`Built Agent-Driver Android apps with <span class="font-semibold ${theme.brandPrimary}">Firebase Cloud Messaging</span> for live order notifications and <span class="font-semibold ${theme.brandPrimary}">MapBox location tracking</span> for real-time delivery updates`, `Designed and implemented <span class="font-semibold ${theme.brandPrimary}">REST API integration</span> using <span class="font-semibold ${theme.brandPrimary}">Retrofit</span> for authentication and data management`, `Integrated <span class="font-semibold ${theme.brandPrimary}">Razorpay, PayPal, PayU</span> with commission split: <span class="font-semibold ${theme.brandPrimary}">60% driver, 18% sender-receiver, 4% admin</span>`, `Developed a <span class="font-semibold ${theme.brandPrimary}">wallet UI</span> to display balance storage and track goods transactions, using <span class="font-semibold ${theme.brandPrimary}">XML and Jetpack Compose</span>`]
  }];

  return (
    <div>
      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-4 mt-3">
        {experiences.map((exp, index) => (
          <div key={index} className={`${theme.bgCard} ${theme.cardShadow} hover:${theme.cardShadowHover} transition-shadow p-4 rounded`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className={`text-lg ${theme.textBody} font-semibold`}>{exp.company}</h3>
              <span className={`${theme.textMuted} text-sm`}>{exp.period}</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <p className={`text-lg ${theme.brandPrimary}`}>{exp.position}</p>
              <div className={`flex items-center text-sm ${theme.textMuted}`}>
                <MapPinIcon size={12} className="mr-1" />
                <span>{exp.location}</span>
              </div>
            </div>
            <ul className="space-y-1 mt-2">
              {exp.points.map((point, idx) => (
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