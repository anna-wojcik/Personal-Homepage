import { StyledFooter, ListIcons } from "./styled";
import PersonalInformation from "../PersonalInformation";
import { socials } from "../socials";
import { LinkIcon } from "../LinkIcon";

const Footer = () => {
    return (
        <StyledFooter>
            <PersonalInformation
                isFooter={true}
                caption="LET'S TALK!"
                title="aniawojcik894@gmail.com"
                description="I specialize in creating user-friendly web applications that help businesses thrive online. I'm currently accepting new projects and would love to discuss your ideas. Contact me 🤞"
            />
            <ListIcons>
                {socials.map(({ name, url, Icon }) => (
                    <li key={name}>
                        <LinkIcon href={url} title={name} target="_blank" rel="noreferrer"
                        >
                            <Icon />
                        </LinkIcon>
                    </li>
                ))}
            </ListIcons>
        </StyledFooter>
    );
};

export default Footer;