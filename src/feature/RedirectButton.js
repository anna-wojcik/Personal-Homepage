import styled, { css } from "styled-components";

export const RedirectButton = styled.a`
    margin-top: 32px;
    width: 154px;
    height: 49px;
    background: ${({ theme }) => theme.colors.redirectButton.background};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.redirectButton.content};
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-size: 20px;
    text-decoration: none;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 17px;
        margin-top: 24px;
        width: 138px;
        height: 40px;

        ${({ $gitHubRedirect }) => $gitHubRedirect && css`
            width: 148px;
        `};
    }

    &:hover {
        box-shadow: 0px 2px 0px 0px ${({ theme }) => theme.colors.redirectButton.hover} inset;
    }

    &:focus {
        border: 1px solid rgba(209, 213, 218, 0.3);
        box-shadow: -2px -2px 0px 0px ${({ theme }) => theme.colors.redirectButton.focus};
        box-shadow: 2px 2px 0px 0px ${({ theme }) => theme.colors.redirectButton.focus};
        box-shadow: -2px 2px 0px 0px ${({ theme }) => theme.colors.redirectButton.focus};
        box-shadow: 2px -2px 0px 0px ${({ theme }) => theme.colors.redirectButton.focus};
    }

    ${({ $gitHubRedirect }) => $gitHubRedirect && css`
        width: 168px;
    `};
`;