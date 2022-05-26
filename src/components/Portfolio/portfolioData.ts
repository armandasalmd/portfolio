export interface PortfolioItem {
    tags: string[];
    title: string;
    abstract: string;
    githubSource?: string;
    link?: string;
    images: string[];
}

// Carousel docs: https://brainhubeu.github.io/react-carousel/docs/gettingStarted
const items: PortfolioItem[] = [
    {
        abstract: `<p>Uma aplicação Web realizada durante o Hackathon do programa de formação da <a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.</p>`,
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
        tags: ["MongoDB", "NodeTS", "ReactTS", "SCSS", "Redis"],
        title: "Luggage - card game",
        githubSource: "https://github.com/armandasalmd/luggage-game",
        link: "https://luggage-game.vercel.app/auth/login"
    },
    {
        abstract: `<p>Uma aplicação Web realizada durante o Hackathon do programa de formação da <a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.</p>`,
        images: [
            "/portfolio/cov_methodology.png",
            "/portfolio/cov_3C_train_accuracies.png",
            "/portfolio/cov_feature_map_summary.png",
        ],
        tags: ["Jupyter", "Python", "Keras", "TensorFlow"],
        title: "Deep Covid - AI",
        githubSource: "https://github.com/armandasalmd/deep-covid"
    },
    {
        abstract: `<p>Uma aplicação Web realizada durante o Hackathon do programa de formação da <a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.</p>`,
        images: [
            "/portfolio/notex1.png",
            "/portfolio/notex2.png",
            "/portfolio/notex3.png",
            "/portfolio/notex4.png",
            "/portfolio/notex6.png",
            "/portfolio/notex7.png",
            "/portfolio/notex8.png",
            "/portfolio/notex9.png",
        ],
        tags: ["ReactJS", "NodeTS", "MongoDB", ".NET Core", "MySQL", "Redis", "Docker"],
        title: "Notex website",
        githubSource: "https://github.com/joaotuliojt/fc-squad43",
        link: "http://notex-client.herokuapp.com"
    },
    {
        abstract: `<p>Uma aplicação Web realizada durante o Hackathon do programa de formação da <a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.</p>`,
        images: [
            "/portfolio/notex-mobile.png",
            "/portfolio/notex-login.png",
            "/portfolio/notex-useCaseDiagram.drawio.png",
        ],
        tags: ["Xamarin", ".NET Core", "Figma"],
        title: "Notex mobile app"
    },
    {
        abstract: `<p>Uma aplicação Web realizada durante o Hackathon do programa de formação da <a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.</p>`,
        images: [
            "/portfolio/ccc0.png",
            "/portfolio/ccc1.png",
            "/portfolio/ccc2.png"
        ],
        tags: ["NextJS", "ReactJS"],
        title: "Uni Degree Classificator",
        githubSource: "https://github.com/armandasalmd/cov-classification-calculator",
        link: "https://cov-classification-calculator.vercel.app"
    },
    {
        abstract: `<p>Uma aplicação Web realizada durante o Hackathon do programa de formação da <a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.</p>`,
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
        title: "Cartixit startup UX",
        githubSource: "https://github.com/armandasalmd/weekly-routine",
        link: "https://play.google.com/store/apps/details?id=com.armandasalmd.weeklyroutine&hl=en_GB&gl=US"
    },
    {
        abstract: `<p>Uma aplicação Web realizada durante o Hackathon do programa de formação da <a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.</p>`,
        images: [
            "/portfolio/wr1.png",
            "/portfolio/wr2.png",
            "/portfolio/wr3.png",
            "/portfolio/wr4.png"
        ],
        tags: ["AndroidStudio", "Java"],
        title: "Weekly Routine",
        githubSource: "https://github.com/armandasalmd/weekly-routine",
        link: "https://play.google.com/store/apps/details?id=com.armandasalmd.weeklyroutine&hl=en_GB&gl=US"
    },
    {
        abstract: `<p>Uma aplicação Web realizada durante o Hackathon do programa de formação da <a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.</p>`,
        images: [
            "/portfolio/number-cruncher.png"
        ],
        tags: ["P5js", "CSS", "HTML"],
        title: "Number cruncher",
        githubSource: "https://github.com/armandasalmd/number-cruncher"
    },
    {
        abstract: `<p>Uma aplicação Web realizada durante o Hackathon do programa de formação da <a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.</p>`,
        images: [
            "portfolio/sudoku.png"
        ],
        tags: [".NET", "Console"],
        title: "Sudoku solver",
        githubSource: "https://github.com/armandasalmd/sudoku-solver"
    },
    {
        abstract: `<p>Uma aplicação Web realizada durante o Hackathon do programa de formação da <a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.</p>`,
        images: [
            "portfolio/xml.png"
        ],
        tags: [".NET", "WPF"],
        title: "XML content studio",
        githubSource: "https://github.com/armandasalmd/xml-content-maker"
    },
];

export default items;