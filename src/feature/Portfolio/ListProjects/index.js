import { ProjectsList, Project, Wrapper, Header, Description, Paragraph, WrapperLink, Link } from "./styled";

export const ListProjects = () => (
    <ProjectsList>
        <Wrapper>
            <Project>
                <Header>Project 1</Header>
                <Description>
                    Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.
                </Description>
                <WrapperLink>
                    <Paragraph>
                        Demo: <Link href="https://anna-wojcik.github.io/todos-list-react/" target="_blank" rel="noopener noreferrer">https://anna-wojcik.github.io/todos-list-react/</Link>
                    </Paragraph>
                    <Paragraph>
                        Code: <Link href="https://github.com/anna-wojcik/todos-list-react" target="_blank" rel="noopener noreferrer">https://github.com/anna-wojcik/todos-list-react</Link>
                    </Paragraph>
                </WrapperLink>
            </Project>
        </Wrapper>
    </ProjectsList>
);

export default ListProjects;