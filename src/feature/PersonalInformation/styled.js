import styled, { css } from "styled-components";

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

    ${({ $footer }) => $footer && css`
        font-size: 32px;
        margin: 24px 0;
    `};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 22px;
        margin-top: 8px;
        margin-bottom: 16px;

        ${({ $footer }) => $footer && css`
            font-size: 18px;
            margin: 12px 0;
        `};
    };
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 20px;
    margin: 0;
    color: ${({ theme }) => theme.colors.content};

    ${({ $footer }) => $footer && css`
        color: ${({ theme }) => theme.colors.title};
    `};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 17px;
        line-height: 23.8px;

        ${({ $footer }) => $footer && css`
            font-size: 14px;
            line-height: 16.94px;
        `};
    }
`;