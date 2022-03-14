import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

const theme = createTheme();
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>WebDevZim | Full-stack problem solver</title>
                {/* <link
                    href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
                    rel="stylesheet"
                /> */}
            </Head>

            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
