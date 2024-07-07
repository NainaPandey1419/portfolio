import { gfg, startup_cell_mits } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React Native Developer",
        company_name: "StartUp Cell MITS",
        icon: startup_cell_mits,
        iconBg: "#accbe1",
        date: "March 2024 - Present",
        points: [
            "Developing and maintaining web applications using React Native and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Technical Mentor",
        company_name: "GeeksforGeeks MITS Student Chapter",
        icon: gfg ,
        iconBg: "#fbc3bc",
        date: "May 2024 - Present",
        points: [
            "Mentor in Data Structures in C++",
            "As a mentor for college freshmen, I focus on building a strong foundation in C++ and essential data structures like arrays, linked lists, and trees. I emphasize hands-on projects and problem-solving to enhance understanding and application. Collaborative learning and continuous support are key elements of my approach, ensuring students are well-prepared and confident in their skills.",
        ],
    },
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/NainaPandey1419',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/naina-pandey-740764205/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Spotify Clone',
        description: 'Developed a webpage that selects, plays and pauses music. Created with Html Css and Javascript.',
        link: 'https://nainapandey1419.github.io/Spotify-Clone/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Memory Game',
        description: 'A game which works on memory. there are two cards with same food item which flip back in the grid if not matched with the same item. It ends if all the items are matched. Created with Html Css and Javascript.',
        link: 'https://nainapandey1419.github.io/Memory-Game/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Myntra Clone',
        description: 'Basic Html Css interface of the Myntra home webpage.',
        link: 'https://nainapandey1419.github.io/Myntra-Clone/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: '2048 Game',
        description: 'Classic game of 2048 with the same interface and theme as the original.Each tile of 2 can be moved left, right, top or bottom with the keys to get 2048. The score updates with each tile moving, and ends if none of the tiles can be moved anymore. Created by using basic Html Css and Javascript.',
        link: 'https://nainapandey1419.github.io/2048-Game/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Space Invaders',
        description: 'Space Invaders game, has an interface which has a shooter and the invaders which get shot until the reach at the bottom of the grid. They move from one end to the other horizontly with each step down. The score keeps updating with each kill. Created with Html Css and Javascript.',
        link: 'https://nainapandey1419.github.io/Space-Invaders/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Flappy Bird Game',
        description: 'The famous Flappy Bird game where a bird with gravity has to dodge the top and bottom pillers which move horizontally backwards and have a velocity. The bird can move upwards and downwards to dodge them and the score keeps updating with each dodge. Created with Html Css and Javascript.',
        link: 'https://nainapandey1419.github.io/flaapy-bird/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'React App Aora',
        description: 'Built with React Native, Animatable, and Appwrite, this app excels in design and functionality, enabling seamless sharing of AI videos within the community. Key features include engaging onboarding, secure authentication, an animated home screen, pull-to-refresh, efficient full-text search, intuitive tab navigation, media upload capabilities, detailed profile insights, consistent responsiveness, and dynamic animations.',
        link: 'https://drive.google.com/file/d/1Pcx6gtvjmOWX-S3jv-yQhzBiq9qFGSoa/view?usp=drive_link',
    },
];