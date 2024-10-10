import { Container } from "../common/Container";
import Section from "./Section";
import ThemeSwitch from "./ThemeSwitch";
import Header from "./Header";
import skills from "../images/skills.png";
import rocket from "../images/rocket.png";
import { mySkills, toLearn } from "../myData";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function PersonalHomepage() {
    return (
        <Container>
            <ThemeSwitch />
            <Header />
            <Section
                title="My skillset includes"
                icon={skills}
                listOfData={mySkills}
            />
            <Section
                title="What I want to learn next"
                icon={rocket}
                listOfData={toLearn}
            />
            <Portfolio />
            <Footer />
        </Container>
    );
};

export default PersonalHomepage;