import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
    "name": "Lahcen Naoui",
    "title": "Hi all, I'm Lahcen Naoui",
    "description": "I have been working as a full stack developer since 2019, the period during which I have worked in different environments at a companie. I am a self-motivated and self-taught professional who likes to solve problems."+

    "I merge a passion for usability and user experience with technical knowledge to create cool digital experiences. My repertoire includes programming languages and tools such as Java JEE, Spring Boot/MVC, ReactJS, Angular, TypeScript, MySQL, HTML, CSS, BootStrap,Wordpress, MySQL, Git.",
    "resumeLink": "CV_Lahcen_NAOUI.pdf"
}

export const openSource = {
    githubUserName: 'naoui-lahcen',
};

export const contact = {}

export const socialLinks = {
    "facebook": "https://www.facebook.com/naol12644/",
    "instagram": "https://www.instagram.com/lahcen_naoui",
    /*    "twitter": "https://twitter.com/oussama-qaiboub",*/
    "github": "https://github.com/naoui-lahcen",
    "linkedin": "https://www.linkedin.com/in/lahcen-naoui-1a673683"
}

export const skillsSection = {
    title: 'Skills',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
        emoji('⚡ I build fast, interactive websites. '),
        emoji('⚡ Develop highly interactive Back-end / Front-end  for the web and mobile applications'),
        emoji('⚡ I like to code things from scratch, and enjoy bringing ideas to life in the browser.'),
        emoji('⚡ Fast load times and lag free interaction, my highest priority.'),
        emoji('⚡ My layouts will work on any device, big or small.'),

    ],

    softwareSkills: [
        {
            skillName: 'html-5',
            fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
            skillName: 'css3',
            fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
            skillName: 'sass',
            fontAwesomeClassname: 'logos:sass',
        },
        {
            skillName: 'JavaScript',
            fontAwesomeClassname: 'logos:javascript',
        },
        {
            skillName: 'TypeScript',
            fontAwesomeClassname: 'logos:typescript-icon',
        },
        {
            skillName: 'Angular',
            fontAwesomeClassname: 'vscode-icons:file-type-angular',
        },
        {
            skillName: 'React',
            fontAwesomeClassname: 'logos:react',
        },
        {
            skillName: 'Ionic',
            fontAwesomeClassname: 'logos:ionic-icon',
        },
        {
            skillName: 'Java',
            fontAwesomeClassname: 'vscode-icons:file-type-java',
        },
        {
            skillName: 'python',
            fontAwesomeClassname: 'logos:python',
        },
        {
            skillName: 'SpringBoot',
            fontAwesomeClassname: 'logos:spring',
        },
        {
            skillName: 'sql-database',
            fontAwesomeClassname: 'vscode-icons:file-type-sql',
        },
        {
            skillName: 'mysql',
            fontAwesomeClassname: 'logos:mysql',
        },
        {
            skillName: 'MariaDB',
            fontAwesomeClassname: 'logos:mariadb',
        },
        {
            skillName: 'Oracle',
            fontAwesomeClassname: 'logos:oracle',
        },
        {
            skillName: 'Firebase',
            fontAwesomeClassname: 'logos:firebase',
        },
        {
            skillName: 'Git',
            fontAwesomeClassname: 'logos:git-icon',
        },
        {
            skillName: 'Docker',
            fontAwesomeClassname: 'logos:docker-icon',
        },
        {
            skillName: 'Kubernetes',
            fontAwesomeClassname: 'logos:kubernetes',
        },
        {
            skillName: 'Jenkins',
            fontAwesomeClassname: 'logos:jenkins',
        },
        {
            skillName: 'Sonar',
            fontAwesomeClassname: 'logos:sonarqube',
        },
        /*      {
                skillName: 'Nexus',
                fontAwesomeClassname: 'logos:nexus',
              },*/
        {
            skillName: 'Nginx',
            fontAwesomeClassname: 'logos:nginx',
        },
        {
            skillName: 'Unix-Linux',
            fontAwesomeClassname: 'logos:linux-tux',
        },
        {
            skillName: 'WordPress',
            fontAwesomeClassname: 'logos:wordpress-icon',
        }
    ],
}


export const SkillBars = [
    {
        Stack: 'Backend', //Insert stack or technology you have experience in
        progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
        Stack: 'Frontend/Design ',
        progressPercentage: '70',
    },
    {
        Stack: 'DevOps',
        progressPercentage: '60',
    },
]

export const educationInfo = [
    {

        schoolName: 'University of science and technology SETTAT',
        subHeader: 'Licence PRO, DEVELOPMENT JAVA / JEE',
        duration: 'September 2020 - June 2021',
        desc: 'Dedicated to the Intranet / Extranet but also to the Internet.',
        descBullets: [
            'Administrator / developer of software packages.',
            'The implementation and customization of distributed applications.',
            'Management of technological projects involving several partners.',
            'Analysis and design of applications using software engineering tools.',
            /*'Support and advice for users.',*/
        ],
    },
    {
        schoolName: 'ISGI Casablanca',
        subHeader: 'Full Stack Software Development Diploma',
        duration: 'September 2016 - June 2018',
        desc: 'the design, construction, development, debugging, maintenance and improvement of software and other applications and websites.',
        descBullets: [
            'The development of computer applications using recent technologies.',
            'Analyze customer / user needs, take charge of computer writing, write instructions ...',
            /*'Participation in project development teams on new technologies.',*/
            'Knowledge of computer language, expertise in database technologies ...',

        ],
    }
]

export const experience = [
    {
        role: 'Software Engineer',
        company: 'Google',
        companylogo: googlelogo,
        date: 'June 2018 – Present',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        descBullets: [
            'Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        ],
    },
    {
        role: 'Front-End Developer',
        company: 'Github',
        companylogo: github,
        date: 'May 2017 – May 2018',
        desc:
            'Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        role: 'Software Engineer Intern',
        company: 'Airbnb',
        companylogo: airbnb,
        date: 'Jan 2015 – Sep 2015',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

export const projects = [
    {
        name: "Prestashop payment module",
        desc: "Creation of prestashop module for a national payment service",
    },
    {
        name: "Social media application",
        desc: "Creation of app to post a creative publication for other users to rate",
    },
    {
        name: "Hyper-casual game",
        desc: "Creation of Hyper-casual mobile game with Unity 3D and C#",
     /*   link: {
            name: "Oussama Qaiboub",
            url: "kasjfklsdjf"
        }*/
    }
]
