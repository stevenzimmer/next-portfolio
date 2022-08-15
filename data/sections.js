import {
    FaReact,
    FaYoast,
    FaAws,
    FaDatabase,
    FaSearchengin,
    FaFigma,
    FaCookieBite,
    FaStripe,
    FaDog,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiStrapi,
    SiMarketo,
    SiWpengine,
    SiHubspot,
    SiFramer,
    SiTailwindcss,
    SiJavascript,
    SiCss3,
    SiPhp,
    SiWprocket,
    SiFirebase,
    SiMaterialui,
    SiStripe,
    SiImmer,
    SiGutenberg,
    SiElastic,
} from "react-icons/si";
import { BsLinkedin, BsGithub, BsWordpress } from "react-icons/bs";

import {
    RiNumber1,
    RiNumber2,
    RiNumber3,
    RiNumber4,
    RiNumber5,
} from "react-icons/ri";

import {
    AiOutlineMail,
    AiFillHtml5,
    AiFillCheckCircle,
    AiFillApi,
} from "react-icons/ai";

import { DiGoogleAnalytics } from "react-icons/di";

import { MdMilitaryTech, MdOutlineEmojiPeople } from "react-icons/md";

export const sections = [
    {
        id: "intro",
        icon: <MdOutlineEmojiPeople />,

        // title: '"A one-man web shop"',

        image: "/assets/images/intro.JPG",
        bullets: [
            "Military vet turned full-stack engineer specializing in CMS platforms, web strategy, and marketing.",
            `${
                new Date().getFullYear() - 2014
            } years web engineer and marketing experience`,
        ],
        advanceText: "See recent projects",
        // chips: [
        //     {
        //         title: "Frontend",
        //         stacks: [
        //             {
        //                 icon: <AiFillHtml5 className="text-[#61DBFB]" />,
        //                 text: "HTML",
        //             },
        //             {
        //                 icon: <SiCss3 />,
        //                 text: "CSS",
        //             },
        //             {
        //                 icon: <SiJavascript className="text-[#FF9900]" />,
        //                 text: "JavaScript",
        //             },
        //             {
        //                 icon: <DiPhp className="text-[#8c4bff]" />,
        //                 text: "PHP",
        //             },
        //             {
        //                 icon: <FaDatabase className="text-[#38bdf8]" />,
        //                 text: "CMS",
        //             },
        //             {
        //                 icon: <FaSearchengin className="text-[#5533FF]" />,
        //                 text: "Technical SEO",
        //             },
        //         ],
        //     },
        //     {
        //         title: "Backend",
        //         stacks: [
        //             {
        //                 icon: <AiFillHtml5 className="text-[#61DBFB]" />,
        //                 text: "HTML",
        //             },
        //             {
        //                 icon: <SiCss3 />,
        //                 text: "CSS",
        //             },
        //             {
        //                 icon: <SiJavascript className="text-[#FF9900]" />,
        //                 text: "JavaScript",
        //             },
        //             {
        //                 icon: <DiPhp className="text-[#8c4bff]" />,
        //                 text: "PHP",
        //             },
        //             {
        //                 icon: <FaDatabase className="text-[#38bdf8]" />,
        //                 text: "CMS",
        //             },
        //             {
        //                 icon: <FaSearchengin className="text-[#5533FF]" />,
        //                 text: "Technical SEO",
        //             },
        //         ],
        //     },
        // ],
    },
    {
        header: "Part-time project",
        id: "nue",
        icon: <RiNumber1 />,
        label: "Full-stack engineer",
        title: "Nue",
        url: "www.nue.io",
        dates: "August 2021 - March 2022",
        // description:
        //     "Built marketing website with headless CMS and static site generator.",
        image: "/assets/images/nue.png",
        bullets: [
            "Collaborated cross functionally with product, brand, and design teams to launch company website.",
        ],
        advanceText: "Recent Project: Armory",
        chips: [
            {
                title: "Frontend",
                stacks: [
                    {
                        icon: <FaReact className="text-[#61DBFB]" />,
                        text: "React",
                    },
                    {
                        icon: <SiNextdotjs />,
                        text: "Next.js",
                    },

                    {
                        icon: <SiTailwindcss className="text-[#38bdf8]" />,
                        text: "Tailwind CSS",
                    },
                    {
                        icon: <SiFramer className="text-[#5533FF]" />,
                        text: "Framer Motion",
                    },
                    {
                        icon: <FaFigma className="text-[#5533FF]" />,
                        text: "Figma",
                    },
                    {
                        icon: <SiMaterialui className="text-[#5533FF]" />,
                        text: "Material UI",
                    },
                ],
            },
            {
                title: "Backend",
                stacks: [
                    {
                        icon: <FaAws className="text-[#FF9900]" />,
                        text: "AWS",
                    },
                    {
                        icon: <SiStrapi className="text-[#8c4bff]" />,
                        text: "Strapi",
                    },
                ],
            },
        ],
    },
    {
        header: "Part-time project",
        id: "armory",
        icon: <RiNumber2 />,
        label: "WordPress Developer",
        title: "Armory",
        // description: "",
        image: "/assets/images/armory.png",
        bullets: [
            "Rebuilt website with a custom gutenberg block theme, reduced reliance on heavy plugins, best-in-class load time, high availability architecture.",
        ],
        url: "www.armory.io",
        dates: "March 2021 - March 2022",
        advanceText: "Recent Project: Intertrust",
        chips: [
            {
                title: "Frontend",
                stacks: [
                    {
                        text: "HTML",
                        icon: <AiFillHtml5 className="text-amber-500" />,
                    },
                    {
                        text: "CSS",
                        icon: <SiCss3 className="text-blue-400" />,
                    },
                    {
                        text: "JavaScript",
                        icon: <SiJavascript className="text-[#FF9900]" />,
                    },
                    // {
                    //     text: "Yoast SEO",
                    //     icon: <FaYoast className="text-[#A42873]" />,
                    // },
                ],
            },
            {
                title: "Backend",
                stacks: [
                    {
                        text: "Wordpress",
                        icon: <BsWordpress className="text-[#0073aa]" />,
                    },
                    {
                        text: "Gutenberg block editor",
                        icon: <SiGutenberg className="text-amber-500" />,
                    },

                    {
                        icon: <SiPhp className="text-[#8c4bff]" />,
                        text: "PHP",
                    },
                    {
                        icon: <SiElastic className="text-blue-300" />,
                        text: "Elastic Search",
                    },
                    {
                        text: "Marketo",
                        icon: <SiMarketo className="text-[#4c50cc]" />,
                    },
                    {
                        text: "WPEngine",
                        icon: <SiWpengine className="text-[#0ecad4]" />,
                    },
                ],
            },
        ],
    },
    {
        header: "Full-time job",
        id: "intertrust",
        icon: <RiNumber3 />,
        label: "Sr. Web Engineer",
        title: "Intertrust",
        bullets: [
            "Technical lead for marketing initiatives, demand gen campaigns, the CMS migration, and website redesign.",
        ],
        // description: "",
        image: "/assets/images/intertrust.png",
        url: "www.intertrust.com",
        dates: "January 2019 - PRESENT",
        advanceText: "Recent Project: Expressplay",
        chips: [
            {
                title: "Stack",
                stacks: [
                    {
                        icon: <AiFillHtml5 className="text-[#61DBFB]" />,
                        text: "HTML",
                    },
                    {
                        icon: <SiCss3 />,
                        text: "CSS",
                    },
                    {
                        icon: <SiJavascript className="text-[#FF9900]" />,
                        text: "JavaScript",
                    },
                    {
                        text: "Wordpress",
                        icon: <BsWordpress className="text-[#0073aa]" />,
                    },
                    {
                        icon: <SiPhp className="text-[#8c4bff]" />,
                        text: "PHP",
                    },
                    {
                        text: "Hubspot",
                        icon: <SiHubspot className="text-[#4c50cc]" />,
                    },
                    {
                        text: "Marketo",
                        icon: <SiMarketo className="text-[#4c50cc]" />,
                    },

                    {
                        text: "Google Analtyics",
                        icon: <DiGoogleAnalytics className="text-[#ffca28]" />,
                    },
                    {
                        text: "WPEngine",
                        icon: <SiWpengine className="text-[#0ecad4]" />,
                    },
                ],
            },
        ],
    },
    {
        header: "An Intertrust product",
        id: "expressplay",
        icon: <RiNumber4 />,
        label: "Sr. Web Engineer",
        title: "Intertrust",
        bullets: [
            "Collaborated with marketing, product, and design teams to redesign and rebuild corporate website into beautiful, performant, responsive experience that aligns with the company's mission, identity, and business needs.",
        ],
        // description: "",
        image: "/assets/images/expressplay.png",
        url: "www.expressplay.com",
        dates: "January 2019 - PRESENT",
        advanceText: "Recent Project: VIPKid",
        chips: [
            {
                title: "Stack",
                stacks: [
                    {
                        icon: <AiFillHtml5 className="text-[#61DBFB]" />,
                        text: "HTML",
                    },
                    {
                        icon: <SiCss3 />,
                        text: "CSS",
                    },
                    {
                        icon: <SiJavascript className="text-[#FF9900]" />,
                        text: "JavaScript",
                    },
                    {
                        text: "Wordpress",
                        icon: <BsWordpress className="text-[#0073aa]" />,
                    },
                    {
                        text: "Hubspot",
                        icon: <SiHubspot className="text-[#4c50cc]" />,
                    },
                    {
                        text: "Marketo",
                        icon: <SiMarketo className="text-[#4c50cc]" />,
                    },
                    {
                        icon: <SiPhp className="text-[#8c4bff]" />,
                        text: "PHP",
                    },
                    {
                        text: "Google Analtyics",
                        icon: <DiGoogleAnalytics className="text-[#ffca28]" />,
                    },
                    {
                        text: "WPEngine",
                        icon: <SiWpengine className="text-[#0ecad4]" />,
                    },
                ],
            },
        ],
    },
    {
        header: "Part-time project",
        id: "vipkid",
        icon: <RiNumber5 />,
        label: "WordPress Developer",
        title: "VIPKid",
        bullets: ["Built and maintained company blog"],
        // description: ",
        image: "/assets/images/vipkid.png",
        url: "blog.vipkid.com",
        dates: "January 2020 - JANUARY - 2022",
        advanceText: "Personal Projects",
        chips: [
            {
                title: "Stack",
                stacks: [
                    {
                        icon: <AiFillHtml5 className="text-[#61DBFB]" />,
                        text: "HTML",
                    },
                    {
                        icon: <SiCss3 />,
                        text: "CSS",
                    },
                    {
                        icon: <SiJavascript className="text-[#FF9900]" />,
                        text: "JavaScript",
                    },
                    {
                        text: "Wordpress",
                        icon: <BsWordpress className="text-[#0073aa]" />,
                    },
                    {
                        text: "Hubspot",
                        icon: <SiHubspot className=" text-[#4c50cc]" />,
                    },
                    {
                        icon: <SiPhp className="text-[#8c4bff]" />,
                        text: "PHP",
                    },
                    {
                        text: "WPEngine",
                        icon: <SiWpengine className="text-[#0ecad4]" />,
                    },
                ],
            },
        ],
    },
    {
        header: "Game",
        id: "dog-breed",
        icon: <FaDog />,
        label: "",
        title: "Dog breed guess",
        bullets: [
            "A game that displays a random dog breed and the user selects the photo of the dog that matches the breed.",
        ],
        image: "/assets/images/benji-field.jpg",
        url: "stevenzimmer.github.io/dog-breed/",
        buttonText: "Play game",
        dates: "July 2022",
        advanceText: "eCommerce",
        chips: [
            {
                title: "Frontend",
                stacks: [
                    {
                        icon: <FaReact className="text-[#61DBFB]" />,
                        text: "React",
                    },

                    {
                        icon: <SiTailwindcss className="text-[#38bdf8]" />,
                        text: "Tailwind CSS",
                    },
                ],
            },
            {
                title: "Backend",
                stacks: [
                    {
                        icon: <AiFillApi className="text-indigo-500" />,
                        text: "dog.ceo API",
                    },
                    {
                        icon: <SiImmer className="text-[#36b2e7]" />,
                        text: "Immer",
                    },
                ],
            },
        ],
    },
    {
        header: "eCommerce Project",
        id: "inprogress",
        icon: <FaCookieBite />,
        label: "",
        title: "Benji Bakes",
        bullets: [
            "An ecommerce store to showcase and sell my wonderful wife's deliciously decadent chocolate chip cookies.",
        ],

        image: "/assets/images/benji-bakes.jpg",
        url: "github.com/stevenzimmer/benji-bakes",
        buttonText: "view repository",
        dates: "Started March 2022",
        advanceText: "Where it started",
        chips: [
            {
                title: "Frontend",
                stacks: [
                    {
                        icon: <FaReact className="text-[#61DBFB]" />,
                        text: "React",
                    },
                    {
                        icon: <SiNextdotjs />,
                        text: "Next.js",
                    },

                    {
                        icon: <SiTailwindcss className="text-[#38bdf8]" />,
                        text: "Tailwind CSS",
                    },
                    {
                        icon: <SiFramer className="text-[#5533FF]" />,
                        text: "Framer Motion",
                    },
                ],
            },
            {
                title: "Backend",
                stacks: [
                    {
                        icon: <SiFirebase className="text-[#ffca28]" />,
                        text: "Firebase",
                    },
                    {
                        icon: <SiStripe className="text-[#635bff]" />,
                        text: "Stripe",
                    },
                ],
            },
        ],
    },
    {
        id: "veteran",
        icon: <MdMilitaryTech />,
        title: "How it started: ",
        label: "Veteran",
        bullets: [
            "Worked with advanced military technology to maintain cruise missile systems inventory.",
            "Subject matter expert teaching cruise missile maintenance fundamentals, electronic theory, circuitry and schematic diagrams at the vocational school for basic training recruits.",
        ],
        dates: "November 2002 - October 2012",
        image: "/assets/images/air-force.JPG",
        advanceText: "Get in touch",
    },

    {
        id: "final",
        icon: <AiFillCheckCircle />,
        title: "Contact me",
        bullets: [
            "I am available for a full-time role, part-time projects, consulting, or even quick fixes.",
        ],
        // description: "Profile links",
        image: "/assets/images/contact-me.jpg",

        chips: [
            {
                title: "Links",
                stacks: [
                    {
                        icon: <BsGithub />,
                        text: "GitHub",
                        link: "https://github.com/stevenzimmer",
                    },
                    {
                        icon: <BsLinkedin className="text-[#2867B2]" />,
                        text: "LinkedIn",
                        link: "https://www.linkedin.com/in/webdevzim/",
                    },
                    {
                        icon: <AiOutlineMail />,
                        text: "steven@webzim.dev",
                        link: "mailto:steven@webzim.dev",
                    },
                ],
            },
        ],
    },
];
