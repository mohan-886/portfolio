/** Content sourced from Mohan's August 2026 résumé, his public repositories, and his October 2026 brief. */
export type Palette = { from: string; via: string; to: string; accent: string };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Mohan Tanuj Ponnasanapalli', displayName: 'Mohan Tanuj', firstName: 'MOHAN',
  seriesTag: 'THE SERIES', originalLabel: 'A MOHAN ORIGINAL',
  role: 'Computer Science Undergraduate', tagline: ['Software Engineering', 'Data', 'Automation'],
  intro: 'I’m a Computer Science and Engineering undergraduate at GITAM University with experience in software engineering, data management, automation, and web development. I also lead developer communities and support university initiatives.',
  about: 'My work spans software engineering, alumni data management, workflow automation, and web development. Alongside technical internships, I have led developer community activities and coordinated alumni outreach and convocation operations across GITAM.',
  location: 'Visakhapatnam, Andhra Pradesh', email: 'mohantanuj.p@gmail.com',
  links: { linkedin: 'https://www.linkedin.com/in/mohantanuj/', github: 'https://github.com/mohan-886' },
  resumePdf: '/assets/Mohan_Tanuj_Ponnasanapalli_Resume.pdf',
  portrait: { src: '/assets/mohan-portrait-720.webp', srcSet: '/assets/mohan-portrait-420.webp 420w, /assets/mohan-portrait-720.webp 720w, /assets/mohan-portrait-1100.webp 1100w', alt: 'Portrait supplied by Mohan Tanuj Ponnasanapalli' },
  interests: ['Software Engineering', 'Data Insights', 'Automation', 'Developer Communities'],
};
export const education = [{ school: 'GITAM (Deemed to be University)', place: 'Visakhapatnam', degree: 'Bachelor of Technology in Computer Science and Engineering', period: '2023 – 2027 (expected)', score: 'CGPA 9.12' }];

export type Experience = { company: string; role: string; period: string; categories: string[]; points: string[] };
export const experience: Experience[] = [
  { company: 'Directorate of External Relations, GITAM', role: 'Data Insights Associate', period: 'September 2025 – Present', categories: ['Technical Experience'], points: [
    'Maintain structured alumni information and support data analysis for institutional requirements.',
    'Consolidate alumni records using LinkedIn Sales Navigator, SQL, and Excel.',
    'Support requirements and feature validation for an alumni management platform, working with developers and Jira/Kanban workflows.',
  ] },
  { company: 'Volvo Group India Pvt. Ltd.', role: 'Software Engineering Intern — RPA & Hyperautomation', period: 'May 2026 – July 2026', categories: ['Technical Experience', 'Internships'], points: [
    'Built Power Apps on Volvo’s SharePoint intranet and integrated Power Automate workflows for internal processes.',
    'Created RPA error analysis dashboards using UiPath Orchestrator logs and REST APIs.',
    'Developed an AI-powered Scrum Master with Azure DevOps APIs and Volvo GenAI Hub for backlog generation, sprint analysis, retrospective summaries, agile board creation, and project-specific RAG knowledge retrieval.',
  ] },
  { company: 'Directorate of External Relations, GITAM', role: 'Data Management Intern', period: 'April 2025 – September 2025', categories: ['Technical Experience', 'Internships'], points: [
    'Organized alumni relations data and consolidated records from multiple sources into a central dataset.',
    'Supported data integration, cleaning, and maintenance to make alumni records easier to access.',
  ] },
  { company: 'Tekwissen', role: 'Software Engineering Intern', period: 'Dates to confirm', categories: ['Technical Experience', 'Internships'], points: ['Internship dates, technologies, and responsibilities need confirmation.'] },
  { company: 'Deepak Automobiles', role: 'Website Content Developer', period: 'Dates to confirm', categories: ['Technical Experience'], points: ['Develop and maintain website content, organizing automotive product and service information for clear presentation.'] },
  { company: 'Directorate of University Experience, GITAM', role: 'Volunteer — Technology Platforms', period: 'Present · start date to confirm', categories: ['Volunteering'], points: ['Support development and configuration of Zendesk-based platforms and digital workflows for university experience initiatives.'] },
];
export type Leadership = { role: string; organization: string; period: string; points: string[] };
export const leadership: Leadership[] = [
  { role: 'President', organization: 'Meta Developer Communities, GITAM Visakhapatnam', period: 'Present · start date to confirm', points: ['Lead the student developer community, mentor developers, and coordinate technical workshops, hackathons, and collaborative learning.', 'The résumé also records leadership of applications for club management and student engagement.'] },
  { role: 'Outreach & Communications Domain Chair', organization: 'GITAM Homecoming 2025 & 2026', period: 'September 2025 – January 2026; September 2026 – January 2027 (ongoing)', points: ['Led a 20-member team for Homecoming 2025, coordinating alumni outreach and invitations.', 'Currently lead a 30-member team for Homecoming 2026, planning communication, volunteer responsibilities, and invitation workflows.'] },
  { role: 'Convocation Head — Alumni Card Operations', organization: 'GITAM Convocation 2026', period: 'June 2026 – September 2026', points: ['Headed alumni card preparation and distribution across Visakhapatnam, Kakinada, and Bengaluru campuses.', 'Coordinated card encoding, sorting, organization, and distribution workflows.'] },
  { role: 'Student Ambassador', organization: 'GITAM University', period: 'June 2026 – Present', points: ['Represent the university in student-focused initiatives and support student engagement.'] },
  { role: 'Student Speaker', organization: 'GITAM Student Induction Programme', period: 'July 2026 – August 2026', points: ['Spoke with incoming students about university life and shared student experiences.'] },
  { role: 'Accreditation Support', organization: 'Andhra Cricket Association · India vs New Zealand, 4th T20I', period: 'Event: 28 January 2026', points: ['Supported accreditation coordination and related administrative workflows at the ACA-VDCA Cricket Stadium, Visakhapatnam.'] },
  { role: 'Domain Lead', organization: 'Meta Developer Communities', period: 'July 2025 – April 2026', points: ['Coordinated domain-level technical engagement, community activities, and collaborative development.'] },
  { role: 'Convocation Volunteer — Alumni Cards', organization: 'GITAM Convocation 2025', period: 'May 2025 – September 2025', points: ['Assisted with alumni card encoding, sorting, preparation, and distribution.'] },
  { role: 'WebXR Domain Member', organization: 'Meta Developer Communities', period: 'September 2024 – April 2025', points: ['Participated in WebXR community activities and technical collaboration around immersive web technologies.'] },
  { role: 'Class Representative', organization: 'GITAM University', period: 'August 2023 – April 2024', points: ['Represented classmates in academic communication and coordinated between students and faculty.'] },
];

export type Metric = { value: string; label: string };
export type Project = { id: string; title: string; year: string; genre: string; logline: string; stack: string[]; build: string[]; features: string[]; metrics: Metric[]; github?: string; demo?: string; palette: Palette; motif: 'shield' | 'flow' | 'tenants' };
export const projects: Project[] = [
  { id: 'driver-drowsiness', title: 'Driver Drowsiness Detection System', year: 'Undated', genre: 'Computer Vision · IoT · Safety', logline: 'An IoT-enabled driver assistance prototype that detects driver state and triggers safety responses.', stack: ['Python', 'OpenCV', 'Dlib', 'Arduino Uno', 'Twilio APIs'], build: ['Used real-time facial landmark detection to classify driver states.', 'Integrated MQ-3 alcohol sensing, ultrasonic collision detection, relay-controlled vehicle actuation, and emergency messaging.'], features: ['Real-time driver-state detection', 'Alcohol sensing', 'Collision sensing', 'Relay-controlled response', 'Emergency messages'], metrics: [], palette: crimson, motif: 'shield' },
  { id: 'farmers-companion', title: 'Farmer’s Companion', year: 'Undated', genre: 'Smart India Hackathon · Agricultural Data', logline: 'A farmer-facing web app that explores historical crop yields and irrigation data for selected states and crops.', stack: ['React', 'Vite', 'JavaScript', 'Papa Parse', 'CSV'], build: ['Built a React interface that loads crop yield and irrigation CSV data in the browser.', 'Implemented state, crop, season, and land-area selections with historical yield summaries, 10-year trend charts, irrigation figures, and area-based estimates.', 'The public code uses CSV aggregation and fixed price values; no machine learning model, live weather service, or backend was found.'], features: ['Historical yield summaries', 'State and crop filters', 'Irrigation statistics', 'Yield trend chart', 'Area-based estimates'], metrics: [], github: 'https://github.com/mohan-886/farmers-companion', palette: jade, motif: 'flow' },
  { id: 'mdc-site', title: 'Meta Developer Communities Website', year: '2025', genre: 'Web Development · Developer Community', logline: 'A website codebase for Meta Developer Communities events and community content.', stack: ['HTML', 'CSS', 'JavaScript'], build: ['The public repository contains a multi-section static site, custom styles, scripts, and community event assets.', 'Individual authorship and deployment status need confirmation before claiming a specific contribution or live site.'], features: ['Community information', 'Event content', 'Static website'], metrics: [], github: 'https://github.com/mohan-886/main_final', palette: ocean, motif: 'tenants' },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'scholarship', title: 'Presidential Merit Scholarship', org: 'GITAM University', detail: 'Received for three consecutive academic years: 2023–2024, 2024–2025, and 2025–2026.', laurel: 'Three Years' },
  { id: 'top-two', title: 'Top 2% in CSE', org: 'GITAM University', detail: 'Ranked within the top 2% of students in the Computer Science and Engineering department.', laurel: 'Academic Standing' },
  { id: 'first-year', title: '9.83 SCP', org: 'First Year at GITAM', detail: 'Placed among the top five students in the first year. SCP is retained as stated; it is not the current CGPA.', laurel: 'Top Five' },
];
export type Certification = { issuer: string; name: string; date?: string; link?: string };
export const certifications: Certification[] = [];
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
const skill = (name: string, mono: string): Skill => ({ name, mono });
export const skillCategories: SkillCategory[] = [
  { id: 'languages', title: 'Languages', subtitle: 'Programming and web fundamentals', skills: [skill('Python','Py'), skill('C','C'), skill('JavaScript','Js'), skill('HTML','Ht'), skill('CSS','Cs')] },
  { id: 'web', title: 'Web Development', subtitle: 'Interfaces and APIs', skills: [skill('React.js','Re'), skill('Node.js','No'), skill('REST APIs','Ap'), skill('JSON','Js')] },
  { id: 'data', title: 'Data & Databases', subtitle: 'Data work and storage', skills: [skill('MySQL','My'), skill('Firebase','Fb'), skill('SQL','Sq'), skill('Excel','Xl'), skill('Power BI','Bi'), skill('Papa Parse','Pa')] },
  { id: 'automation', title: 'Automation', subtitle: 'Verified internship tools', skills: [skill('SharePoint','Sp'), skill('Power Apps','Po'), skill('Power Automate','Pa'), skill('UiPath Orchestrator','Ui'), skill('Azure DevOps','Az'), skill('Volvo GenAI Hub','Ai'), skill('Zendesk','Zd')] },
  { id: 'tools', title: 'Developer Tools', subtitle: 'Planning and collaboration', skills: [skill('Git','Gt'), skill('GitHub','Gh'), skill('Jira','Ji'), skill('Vite','Vi'), skill('Arduino Uno','Ar'), skill('OpenCV','Cv'), skill('Dlib','Dl'), skill('Twilio APIs','Tw')] },
];
export const skillEvidence: Record<string, string[]> = {
  Python: ['Driver Drowsiness Detection System'], JavaScript: ['Farmer’s Companion', 'MDC website'], HTML: ['MDC website'], CSS: ['MDC website'], 'React.js': ['Farmer’s Companion'], 'REST APIs': ['Volvo internship', 'résumé skills'], MySQL: ['résumé skills'], Firebase: ['résumé skills'], SQL: ['GITAM alumni data'], Excel: ['GITAM alumni data'], 'Power BI': ['résumé skills'], 'Papa Parse': ['Farmer’s Companion'], SharePoint: ['Volvo internship'], 'Power Apps': ['Volvo internship'], 'Power Automate': ['Volvo internship'], 'UiPath Orchestrator': ['Volvo internship'], 'Azure DevOps': ['Volvo internship'], 'Volvo GenAI Hub': ['Volvo internship'], Zendesk: ['GITAM technology platforms'], Git: ['résumé skills'], GitHub: ['public repositories'], Jira: ['GITAM alumni platform'], Vite: ['Farmer’s Companion'], 'Arduino Uno': ['Driver Drowsiness Detection System'], OpenCV: ['Driver Drowsiness Detection System'], Dlib: ['Driver Drowsiness Detection System'], 'Twilio APIs': ['Driver Drowsiness Detection System'],
};
export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'Computer Science', lines: ['B.Tech in Computer Science and Engineering', 'GITAM University · Expected 2027'], chips: ['CGPA 9.12', 'Top 2% in CSE'] },
  { kicker: 'Technical Work', title: 'Engineering & Automation', lines: ['Volvo Group · Power Apps, SharePoint, RPA analysis', 'GITAM · Alumni data and platform work'], chips: ['Software Engineering', 'Data', 'Automation'] },
  { kicker: 'Projects', title: 'Built with Purpose', lines: ['Driver Drowsiness Detection System · Computer vision and IoT', 'Farmer’s Companion · Agricultural data exploration'], chips: ['Python', 'React', 'CSV'] },
  { kicker: 'Community', title: 'Leading Together', lines: ['President · Meta Developer Communities', 'Convocation Head · Alumni card operations across three campuses'], chips: ['Developer Communities', 'GITAM'] },
  { kicker: 'Academic Recognition', title: 'Presidential Merit Scholar', lines: ['Three consecutive academic years: 2023–2024 through 2025–2026', '9.83 first-year SCP · among the top five students'], chips: ['Academic Standing'] },
];
export type ProfileId = 'mohan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'mohan', name: 'Mohan', blurb: 'The full series', color: '#e5132b', order: ['about','journey','originals','skills','picks','moments','story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Experience and projects first', color: '#4cc9ff', order: ['journey','originals','skills','picks','moments','story','about'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects and stack first', color: '#46e3a8', order: ['originals','skills','journey','picks','moments','story','about'] },
  { id: 'creative', name: 'Community', blurb: 'Leadership and story first', color: '#ffb547', order: ['picks','journey','originals','skills','moments','story','about'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Technical interests and university work', palette: violet },
  journey: { nav: 'Experience', card: 'Experience', meta: 'Engineering · Data · Automation', palette: amber },
  originals: { nav: 'Projects', card: 'Projects', meta: `${projects.length} verified projects`, palette: crimson },
  picks: { nav: 'Leadership', card: 'Leadership & Involvement', meta: 'Community · University · Events', palette: jade },
  skills: { nav: 'Skills', card: 'Technical Skills', meta: `${skillCategories.length} categories`, palette: ocean },
  moments: { nav: 'Achievements', card: 'Academic Achievements', meta: 'Scholarship · Academic standing', palette: crimson },
  story: { nav: 'Education', card: 'Education & Resume', meta: 'GITAM · 2023–2027', palette: violet },
};
