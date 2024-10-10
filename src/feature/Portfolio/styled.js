import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.title};
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