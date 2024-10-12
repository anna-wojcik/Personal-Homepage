import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 88px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 44px;
    }
`;

export const SecondaryWrapper = styled.div`
    max-width: 420px;
`;

export const Header = styled.h3`
    font-size: 24px;
    font-weight: 700;
    margin-top: 16px;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.colors.error.title};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.error.title};
    margin: 0;
    line-height: 28px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
    }
`;