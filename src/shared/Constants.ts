import { AboutElement, ContactInfo, ProjectInfo } from "./Types";

export const EMAIL = "erentasdemircs@gmail.com";

export const LINKEDIN_URL = "https://www.linkedin.com/in/etasdemircs/";

export const GITHUB_URL = "https://github.com/etasdemir";

export const RESUME_URL = "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/etasdemir/etasdemir.github.io/main/src/assets/cv.pdf";

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const ABOUT: AboutElement[] = [
  {
    title: 'summary',
    type: "simple",
    descriptions: [
      "Currently, I am a Software Developer at Basarsoft. I graduated with a BSc in Computer Science from Hacettepe University. I wrote my first line of code before I started college in 2017. I have been working professionally since the first day of 2021. I mostly developed native Android (Kotlin, Java) and cross-platform mobile applications (React Native). I enjoy learning recently released technologies and trying them out on small projects, especially if they are in alpha or beta releases. I take joy in solving new problems that come with new technology. When I'm not working, I often read programming articles or newsletters and work on my side projects created to test the latest technologies."
    ],
  },
  {
    title: 'skills',
    subtitle: "Here are a few technologies I’ve experience in:",
    type: "element",
    descriptions: [
      "Android, Kotlin, Java, C++",
      "React Native, React",
      "JavaScript, HTML/CSS"
    ],
  },
  {
    title: 'favourite newsletters',
    subtitle: "They're great for keeping up with all the news and everything that's changing in the industry. Today's newsletters help save time by providing great articles, tips, useful resources, learning more about a topic that interests you, and so on. I'm getting addicted to newsletters now.",
    type: "hyperlink",
    descriptions: [
      "Android Weekly",
      "Kotlin Weekly",
      "React Native Newsletter",
      "TLDR",
      "TLDR Crypto",
      "Hacker Newsletter",
      "SoftwareLeadWeekly",
      "Changelog",
      "Frontend Focus",
      "Frontend Weekly",
      "Investing.io",
      "Github Explore",
    ],
    urls: [
      "https://androidweekly.net/",
      "http://kotlinweekly.net/",
      "https://reactnativenewsletter.com/",
      "https://tldr.tech/",
      "https://tldr.tech/crypto",
      "https://hackernewsletter.com/",
      "https://softwareleadweekly.com/",
      "https://changelog.com/weekly",
      "https://frontendfoc.us/",
      "https://frontendweekly.co/",
      "https://smash.vc/startup-newsletter/",
      "https://github.com/explore/email"
    ]
  },
];

export const CONTACT: Array<ContactInfo> = [
  {
    urlName: EMAIL,
    url: `mailto:${EMAIL}`,
    buttonText: 'send me email',
  },
  {
    urlName: GITHUB_URL,
    url: GITHUB_URL,
    buttonText: 'visit github',
  },
  {
    urlName: 'Eren Tasdemir',
    url: LINKEDIN_URL,
    buttonText: 'visit linkedin',
  },
  {
    urlName: 'Resume',
    url: RESUME_URL,
    buttonText: 'see my cv',
  },
];


export const PROJECTS: Array<ProjectInfo> = [
  {
    title: "Trackie",
    description: "With Trackie you can explore the most popular genres, manga, authors, and characters. Track down your manga reading status. Follow your favorite author, character, and mangas. Offline first, multi-language, dark theme supported multi-platform mobile application. Easily update your chapter progress so your list is never out of date. Search your favorite manga, character, and author. Bookmark your current readings, recently reads, and favorite mangas, characters, and authors.",
    url: "https://github.com/etasdemir/Trackie",
    techStack: [
      "TypeScript",
      "React Native",
      "Redux",
      "Realm",
      "React Navigation",
      "Styled Components",
      "Redux Logger"
    ],
    image: "trackie-collage.webp",
  },
  {
    title: "OpticMap",
    description: "OpticMap is a on-device optical character recognition Android application. It recognizes text on images and translate recognized texts. Text to speech is available. Save image with recognized text on it. Internet connection only needed for downloading models when a language selected first time.",
    url: "https://github.com/etasdemir/OpticMap",
    techStack: [
      "Kotlin",
      "MVVM",
      "MLKit",
      "TextToSpeech",
      "Architecture Components",
      "Coroutine"
    ],
    image: "optic-map-collage.webp",
  },
  {
    title: "Albedo",
    description: "With AlbedoApp you can find most popular anime series, top upcomings, airings, movies, manga and novels. Make searches by anime, manga, character or people. Find anime and manga by genres. Follow weekly anime schedule. Read anime quotes. Track down watched anime, read manga, total watched episode count, favourite quotes, favourite anime and manga. Create custom anime and manga lists.",
    url: "https://github.com/etasdemir/AlbedoApp",
    techStack: [
      "Kotlin",
      "MVVM",
      "Dagger2",
      "Architecture Components",
      "Retrofit2",
      "Coroutine"
    ],
    image: "albedo-collage.webp"
  },
  {
    title: "GPAcademic",
    description: "Calculate your grade poing average. You can select GPA scale which suits you from most popular ones. Add lessons with their own unique course names, credits and grades and easily manage them. You can calculate GPA of selected lesson. After selecting lessons, you can create a term with given term name and manage these terms You can calculate cumulative GPA from created terms. Available on Google Playstore.",
    url: "https://github.com/etasdemir/GPAcademic",
    techStack: [
      "Kotlin",
      "MVVM",
      "Hilt",
      "Architecture Components",
      "Coroutine"
    ],
    image: "gpacademic-collage.webp",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.elacqua.gpacademic",
  },
  {
    title: "Leasify",
    description: "Leasify is a trustless asset leasing smart contract deployed on NEAR testnet. It is written in AssemblyScript. With Leasify, you can buy asset and lease them. With that, you can get periodic income from your asset. Alternatively, you might want to lease an asset instead of buying. You only need to pay lease price periodically. With this project, I became a NEAR Certified Developer given by NEAR Foundation.",
    url: "https://github.com/etasdemir/leasify",
    techStack: [
      "AssemblyScript",
      "NEAR SDK"
    ],
  },
  {
    title: "FindMyRoute",
    description: "Work order organizing Android application. After loggin in, you can add locations with marker and move the clicked marker wherever you want. You can look at details of the location but can't update it. After creating locations, you can make a optimized route starting from your location and finished at your location.",
    url: "https://github.com/etasdemir/FindMyRoute",
    techStack: [
      "Kotlin",
      "MVVM",
      "Hilt",
      "Architecture Components",
      "Retrofit2",
      "Coroutine",
      "Google Maps"
    ],
  },
  {
    title: "GeoTask",
    description: "Similar to FindMyRoute project but Huawei Mobile Services are used instead of Google Services. I participated in Huawei-BTK Coding Marathon 2021 with this project and won 2nd place.",
    url: "https://github.com/etasdemir/GeoTask",
    techStack: [
      "Kotlin",
      "MVVM",
      "Hilt",
      "Architecture Components",
      "Retrofit2",
      "Coroutine",
      "HMS Maps",
      "HMS Location",
    ],
  },
  {
    title: "Todo-GraphQL",
    description: "The purpose of this project is to learn about GraphQL. Simple task management application with authentication.",
    url: "https://github.com/etasdemir/graphql-example",
    techStack: [
      "Node",
      "GraphQL",
      "MongoDB",
      "JWT",
    ],
  },
];
