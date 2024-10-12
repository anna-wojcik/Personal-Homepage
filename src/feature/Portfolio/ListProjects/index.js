import { ProjectsList, ProjectItem, Header, Description, Paragraph, WrapperLink, Link } from "./styled";

export const ListProjects = ({ projects }) => (
    <ProjectsList>
        {projects.map(project => (
            <ProjectItem key={project.id}>
                <Header>{project.name}</Header>
                <Description>
                    {project.description}
                </Description>
                <WrapperLink>
                    <Paragraph>
                        Demo: <Link href={project.homepage} target="_blank" rel="noopener noreferrer">{project.homepage}</Link>
                    </Paragraph>
                    <Paragraph>
                        Code: <Link href={project.html_url} target="_blank" rel="noopener noreferrer">{project.html_url}</Link>
                    </Paragraph>
                </WrapperLink>
            </ProjectItem>
        ))}
    </ProjectsList>
);

export default ListProjects;