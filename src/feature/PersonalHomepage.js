import { Container } from "../common/Container";
import Section from "../common/Section";
import ThemeSwitch from "../common/ThemeSwitch";
import Header from "./Header";
import skills from "../images/skills.png";
import rocket from "../images/rocket.png";
import { mySkills, toLearn } from "../myData";

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
        </Container>
    );
};

export default PersonalHomepage;