import "../styles/globals.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

let theme = createTheme({});

theme.typography.h1 = {
    fontSize: "2rem",
    "@media (min-width:600px)": {
        fontSize: "2.4rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
    },
};

theme.typography.h2 = {
    fontSize: "1rem",
    "@media (min-width:600px)": {
        fontSize: "1.2rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
    },
};

const ldJsonDdata = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Steven Zimmer",
    url: "https://webzim.dev/",
    image: "https://webzim.dev/assets/images/contact-me.jpg",
    sameAs: [
        "https://www.linkedin.com/in/webdevzim/",
        "https://github.com/stevenzimmer",
        "https://twitter.com/webdevzim",
    ],
    jobTitle: "Full-stack / Web Strategy / WordPress",
    worksFor: {
        "@type": "Organization",
        name: "WebDevZim",
    },
};
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Web Zim | Full-stack | Web Strategy | WordPress</title>
                <meta
                    name="description"
                    content="Full-stack problem solver specializing in WordPress, web strategy, and marketing."
                />
                <meta
                    name="keywords"
                    content="web developer, full stack, wordpress expert"
                />
                <link rel="shortcut icon" href="assets/favicon.svg" />
                <link rel="canonical" href="https://webzim.dev/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(ldJsonDdata),
                    }}
                />
            </Head>

            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
