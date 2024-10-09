import { Wrapper, Header, Paragraph, SecondaryWrapper } from "./styled";
import { ReactComponent as DangerIconLight } from "../../../images/dangerLight.svg";
import { ReactComponent as DangerIconDark } from "../../../images/dangerDark.svg";
import { useSelector } from "react-redux";
import { selectIsDark } from "../../themeSlice";
import { RedirectButton } from "../../RedirectButton";

export const Error = () => {
    const isDark = useSelector(selectIsDark);
    return (
        <Wrapper>
            <SecondaryWrapper>
                {isDark ? <DangerIconDark /> : <DangerIconLight />}
                <Header>Ooops! Something went wrong...</Header>
                <Paragraph>
                    Sorry, failed to load Github projects.
                    You can check them directly on Github.
                </Paragraph>
            </SecondaryWrapper>
            <RedirectButton 
                href="https://github.com/anna-wojcik?tab=repositories" 
                $gitHubRedirect
                target="_blank" 
                rel="noopener noreferrer">
                Go to Github
            </RedirectButton>
        </Wrapper>
    );
};

export default Error;