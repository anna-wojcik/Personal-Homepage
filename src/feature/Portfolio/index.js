import { Wrapper, SubHeader, Paragraph } from "./styled";
import ListProjects from "./ListProjects";
import Loading from "./Loading";
import Error from "./Error";
import { useRepositories } from "./useRepositiories";
import { socials } from "../socials";
import { LinkIcon } from "../LinkIcon";

export const Portfolio = () => {
    const data = useRepositories();
    console.log(data.repositoriesData);

    const getContainerState = () => {
        if (data.state === "loading") {
            return (
                <div>
                    <Loading />
                </div>
            )
        } else if (data.state === "success") {
            return <ListProjects projects={data.repositoriesData}/>
        } else if (data.state === "error") {
            return <Error />
        }
    };

    const gitHubSocial = socials.find(social => social.name === "GitHub");

    return (
        <article>
            <Wrapper>
                <LinkIcon
                    $portfolio
                    href={gitHubSocial.url}
                    title={gitHubSocial.name}
                    target="_blank"
                    rel="noopener noreferrer">
                    <gitHubSocial.Icon $portfolio/>
                </LinkIcon>
                <SubHeader>Portfolio</SubHeader>
                <Paragraph>My recent projects</Paragraph>
                {getContainerState()}
            </Wrapper>
        </article>
    )
};

export default Portfolio;