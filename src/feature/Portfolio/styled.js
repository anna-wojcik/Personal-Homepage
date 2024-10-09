import styled from "styled-components";
import { ReactComponent as GitHubLight } from "../../images/githubLight.svg";
import { ReactComponent as GitHubDark } from "../../images/githubDark.svg";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    color: ${({ theme }) => theme.colors.title};
`;

export const GithubLightIcon = styled(GitHubLight)`
    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        height: 32px;
        width: 32px;
    }
`;

export const GithubDarkIcon = styled(GitHubDark)`
    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        height: 32px;
        width: 32px;
    }
`;

export const SubHeader = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin-top: 12px;
    margin-bottom: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
        margin-bottom: 16px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
    }
`;