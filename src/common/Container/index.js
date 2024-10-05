import styled from "styled-components";

export const Container = styled.div`
    max-width: 1089px;
    margin: 120px auto;
    padding: 0 60px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin: 34px auto;
        padding: 0 16px;
    }
`;