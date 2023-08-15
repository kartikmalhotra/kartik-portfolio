import self from '../img/self.hpg';
import { colors } from '../colors/mainGradient';
import portfolioDemo from '../img/portfolio.png';
import iotDemo from '../img/iot.png';
import hellowoofySchedular from '../img/hellowoofySchedular.png'
import selfTact from '../img/selftact.png'

export const info = {
  firstName: 'Kartik',
  lastName: 'Malhotra',
  initials: 'KM', // the example uses first and last, but feel free to use three or more if you like.
  position: 'Mobile Application & Full Stack Web Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇮🇳',
      text: 'Based in Dehradun, India',
    },
    {
      emoji: '💻',
      text: 'SDE II at Zignite Labs',
    },
    {
      emoji: '📧',
      text: 'kartik.malhotra177@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://github.com/kartikmalhotra',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/kartik-malhotra-995a6b152/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/malhotra177',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
    {
      link: 'https://drive.google.com/file/d/1h7MMQUF72MHFeIo0oHI_jZtMsVXx-b22/view?usp=sharing', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file-pdf-o',
      label: 'resume',
    },
   ],
  bio: "Meet Kartik Malhotra a highly skilled Full stack developer and Mobile application developer dedicated to building and optimizing user-focused websites and mobile applications with 3+ years od hands-on experience designing, developing and implementing applications and solutions using a range of technologies and programming languages.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['Dart', 'C++','Python','Matlab/Octave','TypeScript', 'JavaScript', 'Java', 'HTML/CSS'],
    frameworks: [
      'Flutter',
      'React',
      'Angular',
      'Django',
      'NodeJs',
    ],
    databases: ['MySQl', 'MongoDB', 'PostgreSQL','Firebase'],
    cloudServices: ['AWS S3', 'AWS EC2','Google Analytics'],
    tools: [
      'Git',
      'Postman',
      'Docker',
      'Jira',
    ],
  },
  hobbies: [
    {
      label: 'Singing',
      emoji: '🎤',
    },
    {
      label: 'Photography',
      emoji: '📷',
    },
    {
      label: 'Traveling',
      emoji: '✈️',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Portfolio-Website',
      live: 'https://kartik-portfolio-two.vercel.app/',
      source: 'https://github.com/kartikmalhotra',
      image: portfolioDemo,
    },
    {
      title: 'Real Time Traffic Management',
      live: null,
      source: 'https://github.com/kartikmalhotra/Catching-vehicles-crossing-zebra-crossing-road-on-red-traffic-light',
      image: iotDemo,
    },
    {
      title: 'Hellowoofy Schedular',
      live: "https://apps.apple.com/us/app/hellowoofy-scheduler/id1460231447?platform=iphone",
      source: null,
      image: hellowoofySchedular,
    },
    {
      title: 'Selftact',
      live: "https://apps.apple.com/us/app/selftact-com/id1636946285",
      source: null,
      image: selfTact,
    },
  ],
  workExperience: [
    {
      company: "Zignite Labs",
      position: "Software Development Engineer - II",
      duration: "Jan 2022 - Present",
      description: [
        "Created an Android SDK in Kotlin, allowing companies to take different posture tests using ML by integrating it into their app.",
        "Converted an app called HelloWoofy Schedular from native codebase to Flutter. The application supports different channels ( Facebook, Tiktok, Snapchat, Instagram ) where user can post their content from the application.",
        "Built a Selftact app that allows users to take selfies, and create a network of contacts. This app supports both offline and online modes to store their data, data is synchronized in real-time to every connected client. It has cool features such as AR Filter and showing the location at which a selfie is taken on Google Maps..",
        "Created a website using Flutter and Nodejs for a Real Estate company",
      ],
    },
    {
      company: "Ksolves India Limited",
      position: "Software Engineer",
      duration: "September 2021 - December 2022",
      description: [
        "Created an application called NimbleThis PNM 2.0",
        "Conducted rigorous unit testing for high-quality and secure application.",
        "Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development. Pioneered new methods of code review to incorporate wider range of voices. Updated old code bases to modern development standards, improving functionality"
      ],
    }
    // Add more work experience items here if needed
  ]
    
};
