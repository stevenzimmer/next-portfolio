import { useState } from "react";

import { sections } from "@/data/sections";
import Section from "@/components/Section";

import { Link } from "react-scroll";
export default function Home() {
    const [navClasses, setNavClasses] = useState("");

    return (
        <div className="app relative md:h-screen">
            <div className="sections relative w-full">
                {sections.map((section, i, all) => {
                    let nextSectionID =
                        all.length - 1 !== i ? all[i + 1].id : "";
                    return (
                        <Section
                            {...section}
                            nextSectionID={nextSectionID}
                            key={section.id}
                            index={i}
                            isLast={i + 1 === sections.length}
                        />
                    );
                })}
            </div>
            <div
                className={`scrollspy-wrapper fixed top-0 z-50 flex h-full w-12 -translate-x-full transform items-center transition-transform duration-200 md:w-20 ${navClasses}`}
            >
                <div className="nav-stacked active flex w-full flex-col justify-center">
                    {sections.map((section, i) => {
                        return (
                            <Link
                                key={i}
                                activeClass="active"
                                to={section.id}
                                spy={true}
                                smooth={false}
                                duration={300}
                                isDynamic={true}
                                onSetActive={(e) => {
                                    if (e === "intro") {
                                        setNavClasses("");
                                    } else {
                                        setNavClasses("active");
                                    }
                                }}
                                className={`nav-item mx-auto flex h-8 w-8 cursor-pointer items-center justify-center border-b shadow-lg md:h-12 md:w-12 ${
                                    i + 1 === sections.length
                                        ? "border-transparent bg-green-50 hover:bg-green-100"
                                        : "border-blue-200 bg-blue-50 hover:bg-blue-100"
                                }`}
                            >
                                <span
                                    className={`material-icons block text-center text-lg md:text-3xl ${
                                        i + 1 === sections.length
                                            ? "text-green-300"
                                            : "text-blue-300"
                                    }`}
                                >
                                    {section.icon}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
// export async function getServerSideProps(context) {

// }

// const getScreenshot = async (url, id) => {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();
//     console.log("new page");
//     const device_width = 1280;
//     const device_height = 800;
//     await page.setCacheEnabled(false);
//     await page.setViewport({ width: device_width, height: device_height });
//     await page.setUserAgent(
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
//     );
//     await page.goto(`https://${url}`, { waitUntil: "load" });

//     await page.mouse.move(1000, 1000);
//     // await page.click("body");
//     // await page.click("footer");

//     // await page.hover("body");
//     // await page.hover("footer");
//     await autoScroll(page);
//     await page.evaluate(() => {
//         window.scrollTo(0, 0);
//     });
//     await page.screenshot({
//         path: `public/assets/images/${id}.png`,
//         fullPage: true,
//     });
//     // await page.pdf({ path: `public/assets/images/${id}.pdf`, format: "A4" });
//     console.log("browser close");
//     await page.close();
//     await browser.close();
// };

// const autoScroll = async (page) => {
//     await page.evaluate(async () => {
//         await new Promise((resolve, reject) => {
//             var totalHeight = 0;
//             var distance = 100;
//             var timer = setInterval(() => {
//                 var scrollHeight = document.body.scrollHeight;
//                 window.scrollBy(0, distance);
//                 totalHeight += distance;

//                 if (totalHeight >= scrollHeight) {
//                     clearInterval(timer);
//                     resolve();
//                 }
//             }, 100);
//         });
//     });
// };
