import styled from "styled-components";

export const StyledSection = styled.section`
    background: ${({ theme }) => theme.colors.section.background};
    border-radius: 4px;
    margin-top: 72px;
    padding: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 48px;
        padding: 16px;
    }
`;

export const Header = styled.h1`
    color:  ${({ theme }) => theme.colors.section.title};
    margin: 0;
    padding-bottom: 14px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.section.borderHeader};
    font-weight: 900;
    font-size: 30px;
    display: flex;
    gap: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;

export const Image = styled.img`
    width: 28px;
    height: 28px;
    margin-top: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 20px;
        height: 20px;
        margin-top: 0px;
    }
`;