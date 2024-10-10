import photo from "../../images/profile.jpg";
import { email } from "../../email";
import { ReactComponent as Envelope } from "../../images/envelope.svg";
import { StyledHeader, Image } from "./styled";
import { RedirectButton } from "../RedirectButton";
import PersonalInformation from "../PersonalInformation";

export const Header = () => (
    <StyledHeader>
        <Image src={photo} alt="Zdjęcie Anny Wójcik" />
        <div>
            <PersonalInformation
                isFooter={false}
                caption="THIS IS"
                title="Anna Wójcik"
                description="I'm a React Frontend Developer and I study Computer Science at the Faculity of Electrical Engineering and Computer Science of the Lublin University of Technology."
            />
            <RedirectButton href={`mailto:${email}`}>
                <Envelope />
                Hire me
            </RedirectButton>
        </div>
    </StyledHeader>
);

export default Header;