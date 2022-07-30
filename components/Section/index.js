import ITyped from "react-ityped";
import { Typography, Grid, Paper, Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { makeStyles } from "@mui/styles";

import Snap from "../Snap";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        [theme.breakpoints.up("sm")]: {
            height: "100vh",
        },
    },
    h1: {
        fontWeight: 500,
        marginBottom: "20px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "30px",
        },
    },
    h2: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "24px",
        },
    },
}));

export default function Section(props) {
    const classes = useStyles();
    const strings = ["Developer", "Designer", "Engineer", "Marketer", "Zim"];

    return (
        <Grid
            key={props.index}
            id={props.id}
            container
            component="section"
            className="section"
            direction={props.index % 2 === 0 ? `row-reverse` : `row`}
        >
            <Grid
                item
                xs={12}
                sm={12}
                md={7}
                className={`md:relative sticky top-0 z-1 overflow-hidden bg-blue-50 flex justify-center items-center`}
            >
                <Zoom
                    wrapStyle={{ width: "100%", height: "100%" }}
                    zoomMargin={100}
                >
                    <img
                        className={`relative mx-auto w-full inline-block ${
                            props.url
                                ? "h-80 object-contain md:h-full"
                                : "h-full object-cover"
                        } relative md:absolute`}
                        src={props.image}
                        alt={props.title}
                    />
                </Zoom>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={5}
                component={Paper}
                square
                className="relative z-0 overflow-y-scroll"
            >
                <div className={classes.paper}>
                    {props.advanceText && (
                        <Snap index={props.index} section={props.nextSectionID}>
                            {props.advanceText}
                        </Snap>
                    )}
                    <div className="flex w-full items-center justify-center pt-12 pb-32 md:h-full md:py-0 ">
                        <div className="w-11/12 lg:w-9/12">
                            {props.header && (
                                <Typography
                                    gutterBottom
                                    align="center"
                                    variant="h5"
                                    className={`text-grey-500`}
                                >
                                    {props.header}
                                </Typography>
                            )}
                            {props.icon && (
                                <div
                                    className={` mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full shadow md:h-20 md:w-20 ${
                                        props.isLast
                                            ? "bg-green-50"
                                            : "bg-blue-50"
                                    }`}
                                >
                                    <span
                                        className={`material-icons block text-center text-3xl md:text-6xl ${
                                            props.isLast
                                                ? "text-green-300"
                                                : "text-blue-300"
                                        }`}
                                    >
                                        {props.icon}
                                    </span>
                                </div>
                            )}
                            <Typography
                                align="center"
                                color="primary"
                                variant="h2"
                                className={`text-2xl font-medium`}
                                gutterBottom
                            >
                                {props.title}
                            </Typography>
                            {props.label && (
                                <Typography
                                    marginBottom={2}
                                    align="center"
                                    variant="h3"
                                    className={`text-grey-500 text-xl  font-normal`}
                                >
                                    {props.label}
                                </Typography>
                            )}
                            {props.dates && (
                                <Typography
                                    align="center"
                                    variant="h6"
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: 18,
                                        marginBottom: 2,
                                    }}
                                    gutterBottom
                                >
                                    {props.dates}
                                </Typography>
                            )}
                            {props.description && (
                                <Typography
                                    align="center"
                                    variant="h5"
                                    gutterBottom
                                >
                                    {props.description}
                                </Typography>
                            )}
                            {props.index === 0 && (
                                <Typography
                                    align="center"
                                    variant="h1"
                                    className={"md:text-4xl"}
                                    gutterBottom
                                >
                                    Web{" "}
                                    <ITyped
                                        className="inline"
                                        loop={false}
                                        strings={strings}
                                        backDelay={1500}
                                    />
                                </Typography>
                            )}
                            {props.bullets?.length && (
                                <ul className="mb-6 list-disc px-6 md:text-2xl">
                                    {props.bullets?.map((bullet, i) => (
                                        <li key={i} className="mb-2 last:mb-0">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {props.chips?.length && (
                                <>
                                    {props.chips?.map((chip, i) => (
                                        <div
                                            key={i}
                                            className="mb-6 flex flex-wrap items-center justify-center space-x-2"
                                        >
                                            {chip.stacks.map((stack, j) => (
                                                <div
                                                    key={j}
                                                    className="bg-grey-50 text-grey-700 relative my-1 flex w-auto items-center space-x-1 space-y-1 rounded px-2"
                                                >
                                                    {stack.link && (
                                                        <a
                                                            rel="nofollow"
                                                            href={stack.link}
                                                            className="absolute inset-0 h-full w-full"
                                                        ></a>
                                                    )}

                                                    <div className="w-auto text-sm md:text-3xl">
                                                        {stack.icon}
                                                    </div>
                                                    <div className="w-auto">
                                                        <Typography variant="string">
                                                            {stack.text}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </>
                            )}
                            {props?.url && (
                                <div className="text-center">
                                    <Button
                                        href={`https://${props.url}`}
                                        variant="contained"
                                        color="secondary"
                                        endIcon={<LaunchIcon />}
                                        target="_blank"
                                        rel="nofollow"
                                    >
                                        <a>
                                            {props.buttonText
                                                ? props.buttonText
                                                : "Visit site"}
                                        </a>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}
