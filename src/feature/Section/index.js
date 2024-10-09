import List from "./List";
import { Header, StyledSection, Image } from "./styled";

const Section = ({ title, icon, listOfData }) => (
    <StyledSection>
        <Header>
            {title}
            <Image src={icon} alt="" />
        </Header>
        <List listOfData={listOfData} />
    </StyledSection>
);

export default Section;
