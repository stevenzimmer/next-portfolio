import "../styles/globals.css";

import {
    createTheme,
    ThemeProvider,
    responsiveFontSizes,
} from "@mui/material/styles";
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

// theme = responsiveFontSizes(theme);
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Web Zim | Full-stack problem solver</title>
                <meta
                    name="description"
                    content="A full Stack problem solver and a one-man web shop"
                />
                <link rel="shortcut icon" href="assets/favicon.svg" />
            </Head>

            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
