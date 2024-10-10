import styled from "styled-components";

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 72px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
`;

export const Image = styled.img`
    max-width: 384px;
    max-height: 384px;
    border-radius: 50%;
    width: 30vw;
    min-width: 128px;
    min-height: 128px;
`;