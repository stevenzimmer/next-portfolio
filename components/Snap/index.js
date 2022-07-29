import React from "react";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import { Typography } from "@mui/material";
import { Link as ReactScrollLink } from "react-scroll";
export default function Snap(props) {
    return (
        <div
            className={`next-section absolute bottom-0 cursor-pointer md:bottom-8 ${
                props.index % 2 === 0 ? `right-8` : `right-8 md:left-8`
            }`}
        >
            <div className="relative flex items-end">
                <div className="">
                    <Typography
                        align="center"
                        variant="h6"
                        className="text-lg md:text-xl"
                    >
                        <ReactScrollLink to={props.section} duration={300}>
                            {props.children}
                        </ReactScrollLink>
                    </Typography>
                </div>

                <div className="animate-bounce">
                    <ReactScrollLink to={props.section} duration={300}>
                        <ArrowDownward />
                    </ReactScrollLink>
                </div>
            </div>
        </div>
    );
}
