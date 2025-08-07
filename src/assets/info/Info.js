import self from '../img/self.jpg';
import { colors } from '../colors/mainGradient';
import portfolioDemo from '../img/portfolio.png';
import iotDemo from '../img/iot.png';
import hellowoofySchedular from '../img/hellowoofySchedular.png'
import selfTact from '../img/selftact.png'

export const info = {
  firstName: 'Kartik Malhotra',
  lastName: '',
  initials: 'KM', // the example uses first and last, but feel free to use three or more if you like.
  position: 'Full-Stack Developer.',
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
      text: 'Software Development Engineer II at Zignite Labs (Remote) | Open to new opportunities',
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
      link: 'https://www.linkedin.com/in/malhotra-kartik-developer/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/malhotra177',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
    {
      link: 'https://drive.google.com/file/d/19Y8J0pGmim3bvlFsMHKHKaI9SC8R6BD_/view?usp=sharing?usp=sharing', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file-pdf-o',
      label: 'resume',
    },
   ],
  bio: "Meet Kartik Malhotra – a highly skilled Full Stack and Mobile Application Developer with over 5 years of hands-on experience in designing, developing, and implementing user-focused websites and mobile applications. Kartik is dedicated to delivering high-performance solutions using a wide range of technologies and programming languages, consistently optimizing for both functionality and user experience.",
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
      live: 'https://kartik-portfolio-zeta.vercel.app/',
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
        "Architected and developed 5 cross-platform mobile apps using Flutter and Node.js/Django, delivering high-quality UI and scalable backend services.",
       "Built modular Kotlin-based Android SDK with AI-powered health prediction features and secure backend sync, boosting user engagement by 40%.",
       "Developed a Django system to automate Telegram bot workflows using ChatGPT integration and Stripe billing increasing MRR by 20%.",
      "Boosted application scalability by reducing load time by 20% and server costs by 15% through efficient state management, lazy loading, and backend caching mechanisms using Flutter and Node.js."
      ],
    },
    {
      company: "Ksolves India Limited",
      position: "Software Engineer",
      duration: "September 2021 - December 2022",
      description: [
       "Developed and maintained a cross-platform Flutter mobile application, implemented 10+ user-facing features that improved retention by 60%.",
      "Led performance optimization efforts, reducing app startup time by 25% through widget tree refinement, deferred loading, and asset management.",
      "Wrote unit and integration tests to ensure feature stability and minimize regression during frequent releases, improving QA handoff success rate by 30%."
      ],
    }
    // Add more work experience items here if needed
  ]
    
};
