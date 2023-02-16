export interface PortfolioItem {
    tags: string[];
    title: string;
    abstract: string;
    githubSource?: string;
    link?: string;
    images: string[];
    year: number;
}

// Carousel docs: https://brainhubeu.github.io/react-carousel/docs/gettingStarted
const items: PortfolioItem[] = [
    {
      abstract: `<div>
      <p>Financial management app. Most of the time adult's money is split between multiple bank or investment accounts.</p>
      <p>This app gives user an ability to join all of its wealth into one place. With meaningful insights user can have a better understanding about his current/future financial situation. As a result, user can make better financial choices impacting its future positively.
      <p>User Experience was a priority - every app component was designed to a perfect detail with love in Figma.</p>`,
      images: [
          "https://i.gyazo.com/de15b09c57e046282285aad8bab27a12.gif",
          "https://user-images.githubusercontent.com/17089888/218181221-8adfe401-cd38-4f2e-904c-e31d4878049c.png",
      ],
      tags: ["NextTS", "Parallel processing", "Serverless", "Storybook", "Firebase", "ChartJs", "MongoDB", "Recoil", "SCSS"],
      title: "🥇 Money Can Fly",
      githubSource: "https://github.com/armandasalmd/money-can-fly",
      link: "https://money-can-fly.vercel.app/",
      year: 2023
    },
    {
        abstract: `<div>
        <p>Inspired by my best friend, I decided to create a card game as a responsive app (PWA). The website has modern UI interface and rich game menu. The game itself allows players to express themselves with emojis. More than one background theme is supported.</p>
        <p>Used a handful of <a href="https://github.com/armandasalmd/luggage-game/blob/production/package.json" target="_blank">modern technologies</a>, where most of them belongs to TypeScript language family. Invested lots of time to build efficient and scalable backend service, leveraging some of the <a href="https://khalilstemmler.com/articles/tags/ddd/" target="_blank">Domain-Driven-Dev principles</a>.</p></div>`,
        images: [
            "https://i.gyazo.com/f40561bd564ddf1af134b2867704d41e.gif",
            "/portfolio/luggage1.png",
            "/portfolio/luggage2.png",
            "/portfolio/luggage3.png",
            "/portfolio/luggage4.png",
            "/portfolio/luggage5.png",
            "/portfolio/luggage6.png",
            "/portfolio/luggage7.png"
        ],
        tags: ["MongoDB", "NodeTS", "ReactTS", "Redux", "SCSS", "Redis", "WebSockets", "OAuth2", "DDD"],
        title: "🥈 Luggage game",
        githubSource: "https://github.com/armandasalmd/luggage-game",
        link: "https://luggage-game.vercel.app/auth/login",
        year: 2022
    },
    {
        abstract: `<p>This is a research in Deep Learning field aiming to discover an <a href="https://drive.google.com/file/d/18TyTUxSZTwFn0nkomoOZimhaAVvhKh4f/view" target="_blank">alternative Covid-19 screening method</a>. It shows that we can detect Covid-19 using Chest X-Ray medical images and Artificial Intelligence.</p>
        <p>With state-of-the-art techniques like Convolutions, Transfer Learning and Data Augmentation Covid-19 prediction can be as accurate as 97.5%. Dissertation project written in Coventry University scores 1st class (84%). In the image above you can see what AI sees during classification.</p>`,
        images: [
            "/portfolio/cov_feature_map_summary.png",
            "/portfolio/cov_3C_train_accuracies.png",
            "/portfolio/cov_methodology.png",
        ],
        tags: ["Jupyter", "Python", "Keras", "TensorFlow", "CNN"],
        title: "🥉 Deep Covid - AI - Dissertation",
        githubSource: "https://github.com/armandasalmd/deep-covid",
        link: "https://drive.google.com/file/d/18TyTUxSZTwFn0nkomoOZimhaAVvhKh4f/view",
        year: 2022
    },
    {
      abstract: `<p>After Notex MVP, I decided to extend aforementioned web app into a cross platform mobile app using Xamarin Forms. It allows users only to read articles but not create them. This project uses same API services as used in the Notex web app.</p>`,
      images: [
          "/portfolio/notex-mobile.png",
          "/portfolio/notex-login.png",
          "/portfolio/notex-useCaseDiagram.drawio.png",
      ],
      tags: ["Xamarin", ".NET Core", "Figma"],
      title: "Notex mobile app",
      year: 2022
  },
    {
        abstract: `<p>A platform where people can create school notes and publish them as publicly available articles online. The idea was to replace paper notebooks and allow sharing your school notes with classmates easily.</p>
        <p>A full-stack project spanning across 3 separate repositories with more than a year spent developing it. The codebase employs caching for <a href="https://redis.io/docs/stack/search/" target="_blank">search engine</a>, integrates <a href="https://editorjs.io/" target="_blank">modern content editor</a>, and offers many other services.</p>`,
        images: [
            "https://i.gyazo.com/6beb0047da439f844be98b999cc2ab18.gif",
            "/portfolio/notex1.png",
            "/portfolio/notex2.png",
            "/portfolio/notex3.png",
            "/portfolio/notex4.png",
            "/portfolio/notex6.png",
            "/portfolio/notex7.png",
            "/portfolio/notex8.png",
            "/portfolio/notex9.png",
        ],
        tags: ["ReactJS", "NodeTS", "MongoDB", ".NET Core", "MySQL", "Redis", "Docker", "Nginx", "Redux", "OAuth2"],
        title: "Notex web app ⭐",
        githubSource: "https://github.com/joaotuliojt/fc-squad43",
        link: "http://notex-client.herokuapp.com",
        year: 2021
    },
    {
      abstract: `<p>Figma UX project for sharing notes and articles. It has been successfully implemented as a <a href="https://luggage-game.vercel.app/auth/login" target="_blank">ReactJS project</a> later on.</p>`,
      images: [
          "/portfolio/notex-ux.png",
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
            "https://i.gyazo.com/7ee46a970b216f158ceb9f576240c701.gif",
            "/portfolio/ccc0.png",
            "/portfolio/ccc1.png",
            "/portfolio/ccc2.png"
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
            "/portfolio/luggage-ux.png",
        ],
        tags: ["Figma", "UX", "UI"],
        title: "Luggage - UX",
        link: "https://www.figma.com/file/EVixXQBooStz9WEsMysAAZ/Luggage-card-game?node-id=0%3A1",
        year: 2021
    },
    {
        abstract: `<p>A car repair service platform. My first big UX project. As a co-founder I groomed this startup business idea with a CEO. It gave me strong UX/UI fundamentals and Figma skills. I learned how to develop new business.</p>`,
        images: [
            "/portfolio/cartixit00.png",
            "/portfolio/cartixit0.png",
            "/portfolio/cartixit1.png",
            "/portfolio/cartixit2.png",
            "/portfolio/cartixit3.png",
            "/portfolio/cartixit4.png",
            "/portfolio/cartixit5.png",
            "/portfolio/cartixit6.png",
        ],
        tags: ["Figma", "UX", "UI"],
        title: "Cartixit startup - UX",
        link: "https://www.figma.com/proto/6qzbML635fn6gU0P2zuMAA/Cartixit-Original?scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1975%3A0&show-proto-sidebar=1&node-id=1975%3A0",
        year: 2019
    },
    {
        abstract: `<p>Android app that was mean to help planning my busy curriculum. This project developed solid development fundamentals for myself. As a 17 years old boy I challenged myself with big projects. App can be found on <a href="https://play.google.com/store/apps/details?id=com.armandasalmd.weeklyroutine&hl=en_GB&gl=US" target="_blank">Google Play</a>.</p>`,
        images: [
            "/portfolio/wr0.png",
            "/portfolio/wr1.png",
            "/portfolio/wr2.png",
            "/portfolio/wr3.png",
            "/portfolio/wr4.png"
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
            "/portfolio/motherload.png"
        ],
        tags: ["C++", "Sqlite3", "GamePhysics"],
        title: "Motherload game clone",
        githubSource: "https://github.com/armandasalmd/motherload",
        year: 2019
    },

    {
        abstract: `<p>As a student I was challenged to work with big data amounts. It this project multiple telemetry data sources were processed and compared to improve Ozone (O3) map accuracy. The project aims to help track global warming hotspots.</p>`,
        images: [
            "/portfolio/sharpener.gif"
        ],
        tags: ["Matlab", "ParallelProcessing"],
        title: "Big data project - Ozone layer",
        githubSource: "https://github.com/armandasalmd/big-data",
        year: 2020
    },
    {
        abstract: `<p>One of my first web apps created. Used Bootstrap, CSS, and Python. Worked with a customer who needed a platform to manage his little shop.</p>`,
        images: [
            "/portfolio/logan.png"
        ],
        tags: ["Python", "DJango", "Bootstrap", "CSS"],
        title: "Logan admin dashboard",
        githubSource: "https://github.com/armandasalmd/logan-admin",
        year: 2018
    },
    {
        abstract: `<p>A Coventry Hackaton project completed in 24 hours. During hackaton, I brainstromed a simple game idea. In the end, I was awarded with 5th place.</p>`,
        images: [
            "/portfolio/number-cruncher.png"
        ],
        tags: ["P5js", "CSS", "HTML"],
        title: "Number cruncher",
        githubSource: "https://github.com/armandasalmd/number-cruncher",
        year: 2020
    },
    {
        abstract: `<p>Young boy's dream to solve Sudoku without any effort. During school days (16 years old), I used C# to solve easy-medium difficulty Sudokus</p>`,
        images: [
            "portfolio/sudoku.png"
        ],
        tags: [".NET", "Console"],
        title: "Sudoku solver",
        githubSource: "https://github.com/armandasalmd/sudoku-solver",
        year: 2017
    },
    {
        abstract: `<p>Windows app that was used to create dynamic content for other failed mobile app that's not listed here. XML file structure was represented as visual components with different properties.</p>`,
        images: [
            "portfolio/xml.png"
        ],
        tags: [".NET", "WPF"],
        title: "XML content studio",
        githubSource: "https://github.com/armandasalmd/xml-content-maker",
        year: 2017
    },
];

export default items;
