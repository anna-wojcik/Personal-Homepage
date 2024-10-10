import { styleIcon } from "./LinkIcon";
import { ReactComponent as GitHubIcon } from "../images/github.svg";
import {ReactComponent as FacebookIcon } from "../images/facebooksvg.svg";
import { ReactComponent as LinkedinIcon } from "../images/linkedin.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/anna-wojcik",
        Icon: styleIcon(GitHubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100009055242993&locale=pl_PL",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/anna-w%C3%B3jcik-a6859a332/",
        Icon: styleIcon(LinkedinIcon),
    },
];