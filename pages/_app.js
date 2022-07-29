import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

const theme = createTheme();
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Web Zim | Full-stack problem solver</title>
                <meta
                    name="description"
                    content="A full Stack problem solver and a one-man web agency"
                />
            </Head>

            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
