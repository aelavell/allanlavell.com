// pages/index.tsx
import React from 'react';
import GridItem from './components/GridItem';

interface GridItemData {
  title: string;
  role: string;
  url: string;
  imageSrc: string;
  bulletPoints: string[];
}

const Home: React.FC = () => {
  const gridItems: GridItemData[] = [
    {
      title: 'ShiftKey Labs',
      imageSrc: '/images/shiftkey-labs.png',
      role: 'Program Coordinator',
      url: 'https://shiftkeylabs.ca',
      bulletPoints: [
        'Lead Developer of ShiftKey Academy Up Curriculum',
        'Coordinating Events & Hackathons',
        'ShiftKey Academy Reimbursement Coordinator',
        'React Native, Firebase, iOS, Android',
      ],
    },
    {
      title: 'Glitch X',
      imageSrc: '/images/GlitchX.png',
      role: 'Product Lead',
      url: 'https://apple.co/3PZAaex',
      bulletPoints: [
        'Core app architecture & implementation',
        'Authoring visual filters',
        'App Store optimization & marketing',
        'Swift, Metal, AVFoundation',
      ],
    },
    {
      title: 'Dalhousie University',
      imageSrc: '/images/Dalhousie.png',
      role: 'Lecturer',
      url: 'https://dal.ca',
      bulletPoints: [
        'Designing & instructing CSCI 5193: Technology Innovation',
        'Teaching Agile programming & full-stack apps',
        'Leading startup workshops & hackathons',
        'React, Angular, Firebase',
      ],
    },
    {
      title: 'Hyperspektiv',
      imageSrc: '/images/Hyperspektiv.png',
      role: 'CTO',
      url: 'https://hyperspektiv.com',
      bulletPoints: [
        'UI/UX co-design & implementation',
        'Creating AR graphics engine',
        'Ensuring uptime & shipping regular releases',
        'Objective-C, Swift, Metal, ARKit',
      ],
    },
    {
      title: 'Within',
      imageSrc: '/images/Within.png',
      role: 'Senior Software Engineer',
      url: 'https://with.in',
      bulletPoints: [
        'Within VR app issue diagnosis & resolution',
        'Native iOS plugin engineering',
        'XR R&D',
        'Unity, C#, Objective-C',
      ],
    },
    {
      title: 'Arcturus XR',
      imageSrc: '/images/Arcturus.png',
      role: 'Senior Software Engineer',
      url: 'https://arcturus.studio',
      bulletPoints: [
        'Re-architecting HoloEdit UI',
        'Core HoloEdit issue diagnosis & resolution',
        'Product testing',
        'C++, Qt, Visual Studio',
      ],
    },
    {
      title: 'Novonix',
      imageSrc: '/images/Novonix.png',
      role: 'Consultant, Data Solutions',
      url: 'https://novonixgroup.com',
      bulletPoints: [
        'Data plotter design & UX guidance',
        'Data plotter rendering optimization',
        'Data plotter core issue diagnosis & resolution',
        'Angular, Highcharts',
      ],
    },
    {
      title: 'VSCO',
      imageSrc: '/images/VSCO.png',
      role: 'Consultant, Creator Tools',
      url: 'https://vsco.co',
      bulletPoints: [
        'Integrating acquired tech into the app',
        'Core app issue diagnosis & resolution',
        'Implementing new video editing features',
        'Swift, AVFoundation, CoreML',
      ],
    },
    {
      title: 'Hyperstream',
      imageSrc: '/images/Hyperstream.png',
      role: 'CTO',
      url: 'https://hyperspektiv.com',
      bulletPoints: [
        'UI/UX co-design & implementation',
        'Streaming engine from Metal to OBS',
        'Leading dev team to implement AR graphics',
        'Swift, Metal, ARKit',
      ],
    },
    {
      title: 'Hype Machine',
      imageSrc: '/images/HypeMachine.png',
      role: 'Consultant',
      url: 'https://hypem.com',
      bulletPoints: [
        'App debugging & optimization',
        'UI implementation',
        'iOS deployment & technical support',
        'Objective-C',
      ],
    },
    {
      title: 'FlyMachine',
      imageSrc: '/images/FlyMachine.png',
      role: 'Consultant, Graphics',
      url: 'https://www.youtube.com/watch?v=sC37mhaFIhE',
      bulletPoints: [
        'Video filter design & implementation',
        'UI Performance Optimization',
        'Web graphics context prototyping',
        'React, WebGL',
      ],
    },
    /*
    {
      title: 'TRASH',
      imageSrc: '/images/Trash.png',
      role: 'Consultant',
      url: 'https://trash.app',
      bulletPoints: [
        'Video pipeline engineering',
        'Assisting ML research',
        'iOS deployment & technical support',
        'Swift, CoreML',
      ],
    },*/
    {
      title: 'Glitch Wizard',
      imageSrc: '/images/GlitchWizard.png',
      role: 'Product Lead',
      url: 'https://glitchwizard.app',
      bulletPoints: [
        'App branding, design, UI/UX',
        'Leading dev team to build graphics engine',
        'Independent publishing & Apple feature',
        'Objective-C, GLSL, GPUImage',
      ],
    },
  ];

  return (
    <div className=""> 
      <h1 className="text-center text-3xl font-bold mt-8 mb-6">Allan Lavell - Technical Portfolio</h1>
      <div className="container mx-auto px-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="mx-auto gap-2 justify-center">
          <div className="w-full h-44 bg-gradient-to-b from-white to-purple-200 rounded-2xl"> 
            <img className="w-44 h-44 mt-1 mx-auto rounded-full" src="/images/allan.png"></img>
          </div>
          <h2 className="text-lg font-bold pt-3.5">Bio</h2>
          <ul className="pl-3 pt-3  list-disc">
            <li key="0">Canadian programmer, entrepreneur</li>
            <li>Shipped over 10 products (4 independent iOS apps)</li>
            <li>Highly motivated to do good on this planet</li>
            <li><p className="">
              <a className="text-pink-600 underline hover:text-pink-700" target="_blank" href="https://www.linkedin.com/in/allan-lavell/">LinkedIn</a> &nbsp;<a className="text-pink-600 underline hover:text-pink-700" target="_blank" href="https://twitter.com/allanlavell">X</a> &nbsp;<a className="text-pink-600 underline hover:text-pink-700" target="_blank" href="https://www.instagram.com/lavell.world.peace">Instagram</a>
              </p>
            </li>
          </ul>
        </div>
          {gridItems.map((item, index) => (
            <GridItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
