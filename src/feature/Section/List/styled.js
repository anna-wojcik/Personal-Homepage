import styled from "styled-components";

export const StyledList = styled.ul`
    margin: 16px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 90px;
    row-gap: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        grid-template-columns: 1fr 1fr;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
        font-size: 14px;
        grid-template-columns: 1fr;
        margin-bottom: 0;
    };
`;

export const Item = styled.li`
    color: ${({ theme }) => theme.colors.section.content};

    &::marker {
        color: ${({ theme }) => theme.colors.section.bullet};
    };
`;