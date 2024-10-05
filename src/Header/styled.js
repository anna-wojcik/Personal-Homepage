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
    color: ${({ theme }) => theme.color.gray};
`;

export const Title = styled.h1`
    font-weight: 900;
    font-size: 38px;
    margin-top: 12px;
    margin-bottom: 36px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 22px;
    }
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 20px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 17px;
    }
`;

export const Button = styled.a`
    margin-top: 32px;
    width: 154px;
    height: 49px;
    background: ${({ theme }) => theme.color.blue};
    border: 1px solid ${({ theme }) => theme.color.iron};
    border-radius: 4px;
    color: ${({ theme }) => theme.color.white};
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-size: 20px;
    text-decoration: none;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 17px;
    }

    &:hover {
        box-shadow: 0px 2px 0px 0px #14462033 inset;
    }

    &:focus {
        border: 1px solid rgba(209, 213, 218, 0.3);
        box-shadow: -2px -2px 0px 0px #8CC2FF;
        box-shadow: 2px 2px 0px 0px #8CC2FF;
        box-shadow: -2px 2px 0px 0px #8CC2FF;
        box-shadow: 2px -2px 0px 0px #8CC2FF;
    }
`;