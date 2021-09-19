export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  url?: string;
}

const experienceTimeline: ExperienceItem[] = [
  {
    company: 'Points.com, Toronto, CA',
    role: 'Development Engineer',
    startDate: '2021 March',
    endDate: 'Current',
    url: 'https://www.points.com',
  },
  {
    company: 'Points.com, Toronto, CA',
    role: 'Web Developer',
    startDate: '2019 March',
    endDate: '2021 March',
    url: 'https://www.points.com',
  },
  {
    company: 'Silver Agency, Cheltenham, UK',
    role: 'Web Developer',
    startDate: '2016 October',
    endDate: '2018 November',
  },
  {
    company: 'Fusion Design & Print, Cheltenham, UK',
    role: 'Web developer',
    startDate: '2016 March',
    endDate: '2016 October',
  },
];

export default experienceTimeline;
