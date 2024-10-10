import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin: 120px 0 109px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin: 48px 0 31px;
    };
`;

export const ListIcons = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    gap: 24px;
    margin: 56px 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin: 40px 0 0;
        gap: 12px;
    };
`;