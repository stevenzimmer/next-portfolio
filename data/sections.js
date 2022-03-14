import {
    FaReact,
    FaYoast,
    FaAws,
    FaDatabase,
    FaSearchengin,
    FaFigma,
    FaCookieBite,
    FaStripe,
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
} from "react-icons/si";

import { GrInProgress } from "react-icons/gr";

import { BsLinkedin, BsGithub, BsWordpress } from "react-icons/bs";

import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";

import { AiOutlineMail, AiFillHtml5, AiFillCheckCircle } from "react-icons/ai";

import { DiGoogleAnalytics } from "react-icons/di";

import { MdMilitaryTech, MdOutlineEmojiPeople } from "react-icons/md";

export const sections = [
    {
        id: "intro",
        icon: <MdOutlineEmojiPeople />,
        // header: "Not actually a dog, but share a lab's temperment",
        label: "Hello! I am Steven",
        // title: "Steven",
        // description: "I've ",
        image: "intro.JPG",
        bullets: [
            "Military vet turned full-stack engineer specializing in CMS platforms, technical SEO, and marketing tech.",
            `${
                new Date().getFullYear() - 2014
            } years software engineer and web marketing experience`,
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
        header: "Recent project",
        id: "nue",
        icon: <RiNumber1 />,
        label: "Full Stack engineer",
        title: "Nue",
        url: "www.nue.io",
        dates: "August 2021 - March 2022",
        // description:
        //     "Built marketing website with headless CMS and static site generator.",
        image: "nue.png",
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
        header: "Recent project",
        id: "armory",
        icon: <RiNumber2 />,
        label: "WordPress Developer",
        title: "Armory",
        // description: "",
        image: "armory.png",
        bullets: [
            "Rebuilt website with a custom WordPress theme, reduced reliance on heavy plugins, best-in-class load time, high availability architecture.",
            "Empowered content stakeholders with self service CMS capabilities.",
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
                        icon: <SiPhp className="text-[#8c4bff]" />,
                        text: "PHP",
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
        header: "Recent project",
        id: "intertrust",
        icon: <RiNumber3 />,
        label: "Sr. Web Engineer",
        title: "Intertrust",
        bullets: [
            "Technical lead for marketing initiatives, demand gen campaigns, the CMS migration, and website redesign.",
        ],
        // description: "",
        image: "intertrust.png",
        url: "www.intertrust.com",
        dates: "January 2019 - PRESENT",
        advanceText: "Recent Project: VIPKid",
        chips: [
            {
                title: "Stack",
                stacks: [
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
        header: "Recent project",
        id: "vipkid",
        icon: <RiNumber4 />,
        label: "WordPress Developer",
        title: "VIPKid",
        bullets: ["Built and maintained company blog"],
        // description: ",
        image: "vipkid.png",
        url: "blog.vipkid.com",
        dates: "January 2020 - JANUARY - 2022",
        advanceText: "Personal Projects",
        chips: [
            {
                title: "Stack",
                stacks: [
                    {
                        text: "Wordpress",
                        icon: <BsWordpress className="text-[#0073aa]" />,
                    },
                    {
                        text: "Hubspot",
                        icon: <SiHubspot className=" text-[#4c50cc]" />,
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
        header: "In Progress",
        id: "inprogress",
        icon: <FaCookieBite />,
        label: "",
        title: "Benji Bakes",
        bullets: [
            "An ecommerce store to promote and sell cookies for humans and treats for pets with local delivery functionality",
        ],

        image: "benji-bakes.jpg",
        url: "github.com/stevenzimmer/benji-bakes",
        buttonText: "view repository",
        dates: "Started Feb 2022",
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
        dates: "November 2002 - June 2012",
        // description: "Served 10 years in the Air Force",
        image: "air-force.JPG",
        advanceText: "Get in touch",
    },

    {
        id: "final",
        icon: <AiFillCheckCircle />,
        // label: "Like what you see?",
        title: "Contact me",
        description: "Profile links",
        image: "contact.JPG",

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
                        text: "steven@zim.dog",
                        link: "mailto:steven@zim.dog",
                    },
                ],
            },
        ],
    },
];
