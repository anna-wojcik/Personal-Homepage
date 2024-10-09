import { useSelector } from "react-redux";
import { Wrapper, GithubLightIcon, GithubDarkIcon, SubHeader, Paragraph } from "./styled";
import { selectIsDark } from "../themeSlice";
import ListProjects from "./ListProjects";
import Loading from "./Loading";
import Error from "./Error";
import { useRepositories } from "./useRepositiories";

export const Portfolio = () => {
    const isDark = useSelector(selectIsDark);
    const data = useRepositories();

    const getContainerState = () => {
        if (data.state === "loading") {
            return (
                <div>
                    <Loading />
                </div>
            )
        } else if (data.state === "success") {
            return <ListProjects />
        } else if (data.state === "error") {
            return <Error />
        }
    };

    return (
        <article>
            <Wrapper>
                <a href="https://github.com/anna-wojcik?tab=repositories" target="_blank" rel="noopener noreferrer">
                    {isDark ? <GithubDarkIcon /> : <GithubLightIcon />}
                </a>
                <SubHeader>Portfolio</SubHeader>
                <Paragraph>My recent projects</Paragraph>
                {getContainerState()}
            </Wrapper>
        </article>
    )
};

export default Portfolio;