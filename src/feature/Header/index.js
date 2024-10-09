import photo from "../../images/profile.jpg";
import { email } from "../../email";
import { ReactComponent as Envelope } from "../../images/envelope.svg";
import { StyledHeader, Image, Caption, Title, Description } from "./styled";
import { RedirectButton } from "../RedirectButton";

export const Header = () => (
    <StyledHeader>
        <Image src={photo} alt="Zdjęcie Anny Wójcik" />
        <div>
            <Caption>This is</Caption>
            <Title>Anna Wójcik</Title>
            <Description>
                I'm a React Frontend Developer and a Computer Science Student at Lublin University of Technology.
            </Description>
            <RedirectButton href={`mailto:${email}`}>
                <Envelope />
                Hire me
            </RedirectButton>
        </div>
    </StyledHeader>
);

export default Header;