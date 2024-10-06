import styled from "styled-components";

export const StyledList = styled.ul`
    margin: 16px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 90px;
    row-gap: 8px;
`;

export const Item = styled.li`
    color: ${({ theme }) => theme.colors.section.content};

    &::marker {
        color: ${({ theme }) => theme.colors.section.bullet};
    }
`;