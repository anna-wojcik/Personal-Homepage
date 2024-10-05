import photo from "../images/profile.jpg";
import { email } from "../email";
import { ReactComponent as Envelope } from "../images/envelope.svg";
import { StyledHeader, Image, Caption, Title, Description, Button } from "./styled";

export const Header = () => (
    <StyledHeader>
        <Image src={photo} alt="Zdjęcie Anny Wójcik" />
        <div>
            <Caption>This is</Caption>
            <Title>Anna Wójcik</Title>
            <Description>
                I'm a React Frontend Developer and a Computer Science Student at Lublin University of Technology.
            </Description>
            <Button href={`mailto:${email}`}>
                <Envelope />
                Hire me
            </Button>
        </div>
    </StyledHeader>
);

export default Header;