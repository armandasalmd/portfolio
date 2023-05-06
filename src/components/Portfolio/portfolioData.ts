export interface ImageItem {
  link: string;
  caption?: string;
}

export interface PortfolioItem {
    tags: string[];
    title: string;
    abstract: string;
    githubSource?: string;
    link?: string;
    images: ImageItem[];
    year: number;
}

function createImage(link: string, caption?: string): ImageItem {
  return {
    link,
    caption
  };
}

const items: PortfolioItem[] = [
    {
      abstract: `<div>
      <p>Financial management app. Most of the time adult's money is split between multiple bank or investment accounts.</p>
      <p>This app gives user an ability to join all of its wealth into one place. With meaningful insights user can have a better understanding about his current/future financial situation. As a result, user can make better financial choices impacting its future positively.
      <p>User Experience was a priority - every app component was designed to a perfect detail with love in Figma.</p>`,
      images: [
        createImage("https://i.gyazo.com/e0b97b85fdd64504ebb36668427753a9.gif", "Landing page"),
        createImage("/portfolio/imgs/mcf6.png", "Manage transactions"),
        createImage("/portfolio/imgs/mcf3.png", "Bank statements import"),
        createImage("/portfolio/imgs/mcf2.png", "Import settings drawer"),
        createImage("/portfolio/imgs/mcf4.png", "Manage investments data"),
        createImage("/portfolio/imgs/mcf5.png", "Create spending targets"),
        createImage("/portfolio/imgs/mcf7.png", "Create new transaction"),
        createImage("/portfolio/imgs/mcf1.png", "Landing page loading"),
      ],
      tags: ["NextJS", "TypeScript", "Parallel processing", "Serverless", "Storybook", "Firebase", "ChartJs", "MongoDB", "Recoil", "SCSS"],
      title: "🥇 Money Can Fly",
      githubSource: "https://github.com/armandasalmd/money-can-fly",
      link: "https://money-can-fly.vercel.app/",
      year: 2023
    },
    {
        abstract: `<div>
        <p>Inspired by my best friend, I decided to create a card game as a responsive app (PWA). The website has modern UI interface and rich game menu. The game itself allows players to express themselves with emojis. More than one background theme is supported.</p>
        <p>MERN stack app. Used a handful of <a href="https://github.com/armandasalmd/luggage-game/blob/production/package.json" target="_blank">modern technologies</a>, where most of them belongs to TypeScript language family. Invested lots of time to build efficient and scalable backend service, leveraging some of the <a href="https://khalilstemmler.com/articles/tags/ddd/" target="_blank">Domain-Driven-Dev principles</a>.</p></div>`,
        images: [
          createImage("https://i.gyazo.com/55d5692f8dfc31f00368a1e2d45c8036.gif", "Game in action"),
          createImage("/portfolio/imgs/luggage1.png", "Game (Blue theme)"),
          createImage("/portfolio/imgs/luggage2.png", "Game (Green theme)"),
          createImage("/portfolio/imgs/luggage3.jpg", "Progresive Web App (PWA)"),
          createImage("/portfolio/imgs/luggage4.png", "Game lobby"),
          createImage("/portfolio/imgs/luggage5.png", "Friends tab"),
          createImage("/portfolio/imgs/luggage6.png", "Game history tab"),
          createImage("/portfolio/imgs/luggage7.png", "Account settings"),
        ],
        tags: ["ReactJS", "Redux", "NodeJS", "MongoDB", "SCSS", "Redis", "WebSockets", "OAuth2", "DDD"],
        title: "🥈 Luggage game",
        githubSource: "https://github.com/armandasalmd/luggage-game",
        link: "https://luggage-game.vercel.app/auth/login",
        year: 2022
    },
    {
        abstract: `<p>This is a research in Deep Learning field aiming to discover an <a href="https://drive.google.com/file/d/18TyTUxSZTwFn0nkomoOZimhaAVvhKh4f/view" target="_blank">alternative Covid-19 screening method</a>. It shows that we can detect Covid-19 using Chest X-Ray medical images and Artificial Intelligence.</p>
        <p>With state-of-the-art techniques like Convolutions, Transfer Learning and Data Augmentation Covid-19 prediction can be as accurate as 97.5%. Dissertation project written in Coventry University scores 1st class (84%). In the image above you can see what AI sees during classification.</p>`,
        images: [
          createImage("/portfolio/cov_feature_map_summary.png", "Feature map"),
          createImage("/portfolio/cov_3C_train_accuracies.png", "Tensorboard accuracy results"),
        ],
        tags: ["Jupyter", "Python", "Keras", "TensorFlow", "CNN"],
        title: "🥉 Deep Covid - AI - Dissertation",
        githubSource: "https://github.com/armandasalmd/deep-covid",
        link: "https://drive.google.com/file/d/18TyTUxSZTwFn0nkomoOZimhaAVvhKh4f/view",
        year: 2022
    },
    {
      abstract: `<div><p>After Notex MVP, I decided to extend aforementioned web app into a cross platform mobile app using Xamarin Forms.</p><p>App allows users only to read articles. This project uses same API services as used in the Notex web app.</p></div>`,
      images: [
        createImage("/portfolio/notex-mobile.png", "Mobile app"),
        createImage("/portfolio/notex-login.png", "Login screen"),
      ],
      tags: ["Xamarin", ".NET Core", "Figma"],
      title: "Notex mobile app",
      year: 2022
  },
    {
        abstract: `<p>A platform where people can create school notes and publish them as publicly available articles online. The idea was to replace paper notebooks and allow sharing your school notes with classmates easily.</p>
        <p>A full-stack project spanning across 3 separate repositories with more than a year spent developing it. The codebase employs caching for <a href="https://redis.io/docs/stack/search/" target="_blank">search engine</a>, integrates <a href="https://editorjs.io/" target="_blank">modern content editor</a>, and offers many other services.</p>`,
        images: [
            createImage("https://i.gyazo.com/6beb0047da439f844be98b999cc2ab18.gif", "Searching and reading articles"),
            createImage("/portfolio/notex1.png", "Landing page"),
            createImage("/portfolio/notex2.png", "Search page"),
            createImage("/portfolio/notex3.png", "Login page"),
            createImage("/portfolio/notex4.png", "Article creator mode"),
            createImage("/portfolio/notex6.png", "Account settings"),
            createImage("/portfolio/notex7.png", "Creator manages articles publicity"),
            createImage("/portfolio/notex8.png", "Article settings"),
            createImage("/portfolio/notex9.png", "Note editor"),
        ],
        tags: ["ReactJS", "NodeJS", "MongoDB", ".NET Core", "MySQL", "Redis", "Docker", "Nginx", "Redux", "OAuth2"],
        title: "Notex web app ⭐",
        githubSource: "https://github.com/armandasalmd/notex-nexus-api",
        link: "http://notex-client.herokuapp.com",
        year: 2021
    },
    {
      abstract: `<div><p>Modern UX principles can make shopping more enjoyable.</p><p>After doing technical analysis I've identified Amazon website flaws and tried to fix them. </p><p>Myriad of page combinations have been tried and only the best ones were selected.</p><h5>Disclaimer: this project was done for entertainment purposes only</h5></div>`,
      images: [
        createImage("/portfolio/imgs/amazon2.png", "Register page"),
        createImage("/portfolio/imgs/amazon1.png", "Redesigned landing page"),
        createImage("/portfolio/imgs/amazon7.png", "Actual Amazon page"),
        createImage("/portfolio/imgs/amazon5.png", "Browsing history"),
        createImage("/portfolio/imgs/amazon6.png", "Figma components"),
        createImage("/portfolio/imgs/amazon3.png", "Featured items"),
        createImage("/portfolio/imgs/amazon4.png", "More deals and advertisement"),
        createImage("/portfolio/imgs/amazon2-1.png", "Mobile register"),
      ],
      tags: ["Figma", "UX", "UI"],
      title: "Amazon redesign experiment",
      year: 2022
    },
    {
      abstract: `<p>Figma UX project for sharing notes and articles. It has been successfully implemented as a <a href="https://luggage-game.vercel.app/auth/login" target="_blank">ReactJS project</a> later on.</p>`,
      images: [
        createImage("/portfolio/notex-ux.png", "Figma preview"),
        createImage("/portfolio/imgs/notex-ux1.png", "Article comments tab"),
        createImage("/portfolio/imgs/notex-ux2.png", "Redesigned search page fragment"),
        createImage("/portfolio/imgs/notex-ux3.png", "Bookmarks modal"),
        createImage("/portfolio/imgs/notex-ux4.png", "Creator manages articles publicity"),
        createImage("/portfolio/imgs/notex-ux5.png", "Publishing content"),
      ],
      tags: ["Figma", "UX", "UI"],
      title: "Notex - UX",
      link: "https://www.figma.com/file/qreJAqhSVtHwDsYJqEVbo9/Notex---main?node-id=121%3A213",
      year: 2020
    },
    {
        abstract: `<p>Coventry University has a <a href="https://github.com/armandasalmd/cov-classification-calculator/blob/production/src/utils/classificator.js" target="_blank">complex algorithm</a> to calculate graduation grade. Out of curiousity, I developed a NextJs web app.</p> 
        <p>This open-source project allows to add dynamic course templates so classificator can calculate final degree for any course.</p>`,
        images: [
          createImage("https://i.gyazo.com/7ee46a970b216f158ceb9f576240c701.gif", "App preview"),
          createImage("/portfolio/ccc0.png", "Menu page"),
          createImage("/portfolio/ccc1.png", "Input module scores"),
          createImage("/portfolio/ccc2.png", "Results screen"),
        ],
        tags: ["NextJS", "ReactJS"],
        title: "Uni Degree Classificator",
        githubSource: "https://github.com/armandasalmd/cov-classification-calculator",
        link: "https://cov-classification-calculator.vercel.app",
        year: 2021
    },
    {
        abstract: `<p>My latest UX project, which was redesigned from ground 3 times. At all times mobile resposiveness was a priority. This UI project has been successfully implemented as a <a href="https://luggage-game.vercel.app/auth/login" target="_blank">ReactJS project</a>.</p>`,
        images: [
          createImage("/portfolio/luggage-ux.png", "Figma project"),
          createImage("/portfolio/imgs/luggage-ux1.png", "Design iteration 1/3"),
          createImage("/portfolio/imgs/luggage-ux2.png", "Design iteration 2/3"),
          createImage("/portfolio/imgs/luggage-ux3.png", "Design iteration 3/3"),
          createImage("/portfolio/imgs/luggage-ux4.png", "Progresive Web App prompt"),
          createImage("/portfolio/imgs/luggage-ux5.png", "Game dashboard")
        ],
        tags: ["Figma", "UX", "UI"],
        title: "Luggage - UX",
        link: "https://www.figma.com/file/EVixXQBooStz9WEsMysAAZ/Luggage-card-game?node-id=0%3A1",
        year: 2021
    },
    {
        abstract: `<p>A car repair service platform. My first big UX project. As a co-founder I groomed this startup business idea with a CEO. It gave me strong UX/UI fundamentals and Figma skills. I learned how to develop new business.</p>`,
        images: [
          createImage("/portfolio/cartixit00.png", "Landing page"),
            createImage("/portfolio/cartixit0.png", "Request a quote"),
            createImage("/portfolio/cartixit1.png", "Order details"),
            createImage("/portfolio/cartixit2.png", "Top overview"),
            createImage("/portfolio/cartixit3.png", "Service provider dashboard"),
            createImage("/portfolio/cartixit4.png", "Search repair center"),
            createImage("/portfolio/cartixit5.png", "Reviews section"),
            createImage("/portfolio/cartixit6.png", "Page footer"),
        ],
        tags: ["Figma", "UX", "UI"],
        title: "Cartixit startup - UX",
        link: "https://www.figma.com/proto/6qzbML635fn6gU0P2zuMAA/Cartixit-Original?scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1975%3A0&show-proto-sidebar=1&node-id=1975%3A0",
        year: 2019
    },
    {
        abstract: `<p>Android app that was mean to help planning my busy curriculum. This project developed solid development fundamentals for myself. As a 17 years old boy I challenged myself with big projects. App can be found on <a href="https://play.google.com/store/apps/details?id=com.armandasalmd.weeklyroutine&hl=en_GB&gl=US" target="_blank">Google Play</a>.</p>`,
        images: [
            createImage("/portfolio/wr0.png", "App overview"),
            createImage("/portfolio/wr1.png", "Create events"),
            createImage("/portfolio/wr2.png", "Interactive tutorial"),
            createImage("/portfolio/wr3.png", "Manage events"),
            createImage("/portfolio/wr4.png", "Navigation menu")
        ],
        tags: ["AndroidStudio", "Java"],
        title: "Weekly Routine",
        githubSource: "https://github.com/armandasalmd/weekly-routine",
        link: "https://play.google.com/store/apps/details?id=com.armandasalmd.weeklyroutine&hl=en_GB&gl=US",
        year: 2018
    },

    {
        abstract: `<p>A robot that mines caves, dig minerals and sell them to upgrade itself. In this Uni project I was a Scrum team lead. I was writting low level C++ code, which enforced critical thinking. Game engine was built using primitives.</p>`,
        images: [
          createImage("/portfolio/motherload.png", "Game preview")
        ],
        tags: ["C++", "Sqlite3", "GamePhysics"],
        title: "Motherload game clone",
        githubSource: "https://github.com/armandasalmd/motherload",
        year: 2019
    },

    {
        abstract: `<p>As a student I was challenged to work with big data amounts. It this project multiple telemetry data sources were processed and compared to improve Ozone (O3) map accuracy. The project aims to help track global warming hotspots.</p>`,
        images: [
          createImage("/portfolio/ozone.png", "Mapping Ozone density"),
          createImage("/portfolio/sharpener.gif", "Analysing Ozone layer gaps")
        ],
        tags: ["Matlab", "ParallelProcessing"],
        title: "Big data project - Ozone layer",
        githubSource: "https://github.com/armandasalmd/big-data",
        year: 2020
    },
    {
        abstract: `<p>One of my first web apps created. Used Bootstrap, CSS, and Python. Worked with a customer who needed a platform to manage his little shop.</p>`,
        images: [
          createImage("/portfolio/logan.png", "Simple dashboard")
        ],
        tags: ["Python", "DJango", "Bootstrap", "CSS"],
        title: "Logan admin dashboard",
        githubSource: "https://github.com/armandasalmd/logan-admin",
        year: 2018
    },
    {
        abstract: `<p>A Coventry Hackaton project completed in 24 hours. During hackaton, I brainstromed a simple game idea. In the end, I was awarded with 5th place.</p>`,
        images: [
          createImage("/portfolio/number-cruncher.png", "Simple game")
        ],
        tags: ["P5js", "CSS", "HTML"],
        title: "Number cruncher",
        githubSource: "https://github.com/armandasalmd/number-cruncher",
        year: 2020
    },
    {
        abstract: `<p>Young boy's dream to solve Sudoku without any effort. During school days (16 years old), I used C# to solve easy-medium difficulty Sudokus</p>`,
        images: [
          createImage("portfolio/sudoku.png", "Console outputs solved sudoku")
        ],
        tags: [".NET", "Console"],
        title: "Sudoku solver",
        githubSource: "https://github.com/armandasalmd/sudoku-solver",
        year: 2017
    },
    {
        abstract: `<p>Windows app that was used to create dynamic content for other failed mobile app that's not listed here. XML file structure was represented as visual components with different properties.</p>`,
        images: [
          createImage("portfolio/xml.png", "Content creator studio")
        ],
        tags: [".NET", "WPF"],
        title: "XML content studio",
        githubSource: "https://github.com/armandasalmd/xml-content-maker",
        year: 2017
    },
];

export default items;
