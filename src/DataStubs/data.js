export const registerStub = {
  id: 99,
  name: 'Test User',
  email: 'test@test.com',
  values: [],
  projects: [],
  topValues: {}
}

export const values = [
  {
    id: 1,
    name: 'family',
  },
  {
    id: 2,
    name: 'environmental',
  },
  {
    id: 3,
    name: 'financial',
  },
  {
    id: 4,
    name: 'health',
  },
  {
    id: 5,
    name: 'community',
  },
  {
    id: 6,
    name: 'creativity',
  },
  {
    id: 7,
    name:  'positivity',
  },
  {
    id: 8,
    name: 'efficiency',
  },
  {
    id: 9,
    name: 'loyalty',
  },
  {
    id: 10,
    name: 'spirituality'
  }
];

export const userData = {
  id: 99,
  name: 'Test User',
  email: 'test@test.com',
  values: [{
      id: 1,
      name: 'family',
      desc: 'Family values - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pariatur.',
    },
    {
      id: 2,
      name: 'environmental',
      desc: 'environmental values - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pariatur.',
      
    },
    {
      id: 4,
      name: 'health',
      desc: 'Health values - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pariatur.',
    },
    {
      id: 5,
      name: 'community',
      desc: 'Community values - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pariatur.',
    },
    {
      id: 6,
      name: 'creativity',
      desc: 'Creativity - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pariatur.',
    },
    {
      id: 10,
      name: 'spirituality',
      desc: 'Spirituality - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pariatur.',
  }],
  projects: [
      {
        name: 'Make stubs',
        desc: 'Make stubs while waiting for the backend to pull their heads out of their asses',
        values: [4]
      }
  ],
  topValues: {
    1: 1,
    2: 2,
    3: 6
  }
};

export const onboardedUserStub = {
  id: 99,
  name: 'Test User',
  email: 'test@test.com',
  values: [1,2,4,5,6,10],
  projects: [],
  topValues: {
    1: 1,
    2: 2,
    3: 6
  }
};

export const projectExample = [
  {
    id: Date.now,
    name: 'Gardening to improve home environment',
    desc: 'My goal is to have a full-functioning garden within a year. I would like to start with growing herbs like Oregano, thyme and mint.',
    time: 2,
    values: 2,
  }
]