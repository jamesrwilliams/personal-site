export interface ExperienceItem {
  company: ExperienceOrg;
  role: string;
  startDate: string;
  endDate: string;
  summary?: string;
}

export interface ExperienceOrg {
  name: string;
  location: string;
  url?: string;
}

const organisations: { [name: string]: ExperienceOrg } = {
  points: {
    name: 'Points.com',
    location: 'Toronto, CA',
    url: 'https://www.points.com',
  },
  silver: {
    name: 'Silver Agency',
    location: 'Cheltenham, UK',
  },
  fusion: {
    name: 'Fusion Design & Print',
    location: 'Cheltenham, UK',
  },
};

const experienceTimeline: ExperienceItem[] = [
  {
    company: organisations.points,
    role: 'Technical Lead',
    startDate: '2022 Jan',
    summary: 'building the future of loyalty',
    endDate: 'Current',
  },
  {
    company: organisations.points,
    role: 'Development Engineer',
    startDate: '2021 Mar',
    endDate: '2022 Jan',
  },
  {
    company: organisations.points,
    role: 'Web Developer',
    startDate: '2019 Mar',
    endDate: '2021 Mar',
  },
  {
    company: organisations.silver,
    role: 'Web Developer',
    startDate: '2016 Oct',
    endDate: '2018 Nov',
  },
  {
    company: organisations.fusion,
    role: 'Web developer',
    startDate: '2016 Mar',
    endDate: '2016 Oct',
  },
];

const currentPosition = experienceTimeline[0];
const yearsOfExperience = (new Date().getFullYear() - 2016);

export {
  currentPosition,
  yearsOfExperience,
  experienceTimeline,
};
