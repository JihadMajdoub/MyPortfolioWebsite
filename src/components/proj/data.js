import weatherForecastPic from './images/weatherforecast.png';
import cryptoTrackerPic from './images/cryptotracker.png';
import doodleJumpPic from './images/doodlejump.png';
import portfolioWebsitePic from './images/portfoliowebsite.png';
import { IoLogoJavascript, IoLogoSass, IoLogoPython } from 'react-icons/io';
import { FaPhp, FaNode, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiMysql, SiCsharp, SiDjango } from 'react-icons/si';
import { DiJqueryLogo, FaJava } from 'react-icons/di';
import { TiHtml5, TiCss3 } from 'react-icons/ti';



export const myProjects = [

    {
        id: 1,
        title: 'Weather Forecast',
        img: weatherForecastPic,
        git: 'https://github.com/JihadMajdoub/WeatherForecast',
        live: 'https://www.google.co.uk',
        desc: 'Weather forecast app using ReactJS, Sass, JS and HTML. API taken from open Openweathermap.',
        lang: [<IoLogoJavascript/>, <FaReact/>, <IoLogoSass/>, <TiHtml5/>]
    },

    {
        id: 2,
        title: 'Crypto Price Tracker',
        img: cryptoTrackerPic,
        git: 'https://github.com/JihadMajdoub/crypto-price-tracker',
        live: '',
        desc: 'Crypto price tracker using ReactJS, JS, CSS and HTML. API taken from CoinGeko.',
        lang: [<IoLogoJavascript/>, <FaReact/>, <TiCss3/>, <TiHtml5/>]
    },

    {
        id: 3,
        title: 'Portfolio Website',
        img: portfolioWebsitePic,
        git: 'https://github.com/JihadMajdoub/MyPortfolioWebsite',
        live: '',
        desc: 'This is the current portfolio website you are currently on. I used different ReactJS with the aid of a few React npm packages and used Sass for the styling.',
        lang: [<IoLogoJavascript/>, <FaReact/>, <IoLogoSass/>, <TiHtml5/>]
    },

    {
        id: 4,
        title: 'Doodle Jump',
        img: doodleJumpPic,
        git: 'https://github.com/JihadMajdoub/Doodler-Game',
        live: 'https://www.google.co.uk',
        desc: 'Doodle Jump game created using Javascript.',
        lang: [<TiHtml5/>, <IoLogoJavascript/>, <TiCss3/>]
    },

    {
        id: 5,
        title: 'Todo List',
        img: '',
        git: 'https://github.com/JihadMajdoub/WeatherForecast',
        live: 'https://www.google.co.uk',
        desc: 'Upcoming App. Please check again in a few days for updates.',
        lang: []
    },

    {
        id: 6,
        title: 'Job Listing Directory',
        img: '',
        git: 'https://github.com/JihadMajdoub/WeatherForecast',
        live: 'https://www.google.co.uk',
        desc: 'Upcoming App. Please check again in a few days for updates.',
        lang: [<SiMysql/>, <FaPhp/>, <TiHtml5/>, <FaBootstrap/>]
    },
]

