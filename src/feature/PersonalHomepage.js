import { Container } from "../common/Container";
import ThemeSwitch from "../common/ThemeSwitch";
import Header from "./Header";

function PersonalHomepage() {
    return (
        <Container>
            <ThemeSwitch />
            <Header />
        </Container>
    );
};

export default PersonalHomepage;