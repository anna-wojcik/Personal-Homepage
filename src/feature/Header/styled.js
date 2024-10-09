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

export const Caption = styled.div`
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.content};
`;

export const Title = styled.h1`
    font-weight: 900;
    font-size: 38px;
    margin-top: 12px;
    margin-bottom: 36px;
    color: ${({ theme }) => theme.colors.title};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 22px;
        margin-top: 8px;
        margin-bottom: 16px;
    }
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 20px;
    margin: 0;
    color: ${({ theme }) => theme.colors.content};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 17px;
    }
`;